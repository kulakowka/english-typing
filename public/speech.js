/* Озвучка через Web Speech API. Звук здесь вторичен: фраза звучит, когда она уже на экране.
   Если голоса нет или браузер молчит, тренажёр работает дальше без звука. */
window.Speech = (() => {
'use strict';
const synth = (() => { try { return 'speechSynthesis' in window && typeof SpeechSynthesisUtterance === 'function' ? window.speechSynthesis : null; } catch (e) { return null; } })();
const NOVELTY = /Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Wobble|Jester|Organ|Superstar|Trinoids|Whisper|Zarvox|Good News|Junior|Ralph|Fred|Kathy|Deranged|Hysterical|Pipe/i;
const NORMAL = 0.95, SLOW = 0.6;

let voices = [], en = [], voice = null;
let state = synth ? 'unknown' : 'none';          // none | novoice | unknown | ok | failed
let utter = null, phase = 'idle', pending = null, watchdog = 0, coolT = 0;
let onchange = () => {};

function score(v) {
  const n = v.name || ''; let s = /^en[-_]US/i.test(v.lang) ? 30 : /^en[-_]GB/i.test(v.lang) ? 25 : 10;
  if (/Natural|Neural|Premium|Enhanced|Siri/i.test(n)) s += 20;
  if (/Google|Samantha|Daniel|Karen|Aria|Jenny|Zira|Alex|Ava|Allison|Susan|Serena/i.test(n)) s += 10;
  if (NOVELTY.test(n)) s -= 100;
  if (v.default) s += 2;
  return s;
}
function setState(s) { if (s !== state) { state = s; onchange(state); } }
function loadVoices() {
  if (!synth) return;
  try { voices = synth.getVoices() || []; } catch (e) { voices = []; }
  en = voices.filter(v => /^en([-_]|$)/i.test(v.lang || '')).sort((a, b) => score(b) - score(a));
  voice = en[0] || null;
  if (voices.length && !en.length) setState('novoice');
  else if (state === 'novoice' && en.length) setState('unknown');
}

/* Chrome вешает синтезатор, если вызвать cancel() до события start или несколько раз подряд.
   Поэтому автомат: idle → starting → speaking → cooling. Пока фраза запускается, новый запрос ждёт. */
const STOP = { stop: true };
function cool(ms) {
  phase = 'cooling'; utter = null;
  clearTimeout(watchdog); clearTimeout(coolT);
  try { synth.cancel(); } catch (e) {}
  coolT = setTimeout(() => {
    phase = 'idle';
    const r = pending; pending = null;
    if (r && !r.stop) start(r);
  }, ms);
}
function fail(reason) {
  clearTimeout(watchdog); clearTimeout(coolT);
  utter = null; pending = null; phase = 'idle';
  try { synth.cancel(); } catch (e) {}
  if (reason !== 'not-allowed') setState('failed');   // not-allowed: браузер ждёт действия пользователя, это не поломка
}
function start(req) {
  let u;
  try { u = new SpeechSynthesisUtterance(req.text); } catch (e) { fail('exception'); return; }
  if (voice) { u.voice = voice; u.lang = voice.lang; } else u.lang = 'en-US';
  u.rate = req.rate; u.pitch = 1;
  utter = u; phase = 'starting'; pending = null;        // ссылку держим: без неё Chrome теряет onend
  u.onstart = () => {
    if (u !== utter) return;
    clearTimeout(watchdog); setState('ok'); phase = 'speaking';
    if (pending) cool(200);
  };
  const ended = () => {
    if (u !== utter) return;
    clearTimeout(watchdog); utter = null; phase = 'idle';
    const r = pending; pending = null;
    if (r && !r.stop) start(r);
  };
  u.onend = ended;
  u.onerror = e => {
    if (u !== utter) return;
    if (e.error === 'interrupted' || e.error === 'canceled') { ended(); return; }
    fail(e.error || 'error');
  };
  try { synth.speak(u); if (synth.paused) synth.resume(); } catch (e) { fail('exception'); return; }
  clearTimeout(watchdog);
  watchdog = setTimeout(() => {
    if (u !== utter || phase !== 'starting') return;
    if (!req.retry && state === 'ok') {                   // звук уже работал: одна повторная попытка после паузы
      if (!pending) pending = { text: req.text, rate: req.rate, retry: true };
      cool(400);
    } else fail('timeout');
  }, 3000);
}

function say(text, slow) {
  if (!synth || state === 'none' || state === 'novoice' || state === 'failed') return false;
  const req = { text, rate: slow ? SLOW : NORMAL, retry: false };
  if (phase === 'idle') start(req);
  else { pending = req; if (phase === 'speaking') cool(200); }
  return true;
}
function stop() {
  if (!synth) return;
  if (phase === 'speaking') { pending = null; cool(200); }
  else if (phase === 'starting') pending = STOP;
  else pending = null;
}
function retry() { if (state === 'failed') setState('unknown'); }
function init(cb) {
  if (cb) onchange = cb;
  if (!synth) return;
  loadVoices();
  try { synth.onvoiceschanged = loadVoices; } catch (e) {}
  let tries = 0;
  const poll = setInterval(() => { if (en.length || ++tries > 8) clearInterval(poll); else loadVoices(); }, 250);
  window.addEventListener('pagehide', () => { try { synth.cancel(); } catch (e) {} });
}

return {
  init, say, stop, retry,
  get state() { return state; },
  get usable() { return state === 'unknown' || state === 'ok'; },
  get voiceName() { return voice ? voice.name.replace(/\s*\(.*\)\s*$/, '') : ''; }
};
})();
