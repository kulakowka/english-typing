(() => {
'use strict';
const { norm, buildVariants, trapFor, wordSpans, esc, md } = window.Core;
const Speech = window.Speech, Keyboard = window.Keyboard;
const $ = id => document.getElementById(id);
const isMac = /Mac|iPhone|iPad/.test(navigator.platform || '');
document.querySelectorAll('kbd.mod').forEach(k => { k.textContent = (isMac ? '⌘' : 'Ctrl+') + k.textContent; });
document.querySelectorAll('kbd.mod2').forEach(k => { k.textContent = (isMac ? '⌘' : 'Alt+') + k.textContent; });

/* ---------- колоды ---------- */
/* Два типа тем: фразы (русская фраза → английская) и слова (картинка → слово).
   Слова приводятся к тому же виду, что и фразы, плюс img. */
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const DECKS = window.DECKS.map(d => Object.assign({}, d, {
  phrases: d.kind === 'words'
    ? d.words.map(([en, ru, pic, note]) => {
      const list = en.split('|'), s = slug(list[0]);
      return { id: d.id + '-' + s, en: list, ru, ctx: d.title.toLowerCase(), note: note || '', img: 'img/' + d.id + '/' + s + '.webp', vars: buildVariants(list) };
    })
    : d.phrases.map(p => Object.assign({}, p, { vars: buildVariants(p.en) }))
}));

/* ---------- хранилище ---------- */
const KEY = 'english.v1';
const DEBUG = location.hash === '#debug';       // #debug добавляет на итоговый экран перемотку дней
let S = { cards: {}, days: {}, words: {}, deck: DECKS[0].id, sound: true, kb: true, offset: 0 };
try { const v = JSON.parse(localStorage.getItem(KEY)); if (v && typeof v === 'object' && v.cards) S = Object.assign(S, v); } catch (e) {}
if (!DECKS.some(d => d.id === S.deck)) S.deck = DECKS[0].id;
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5) + (S.offset || 0);
const deck = () => DECKS.find(d => d.id === S.deck);

const IV = [0, 1, 3, 7, 16, 35];                // ступени: через сколько дней фраза вернётся
const STEP_NAMES = ['новые', '1 день', '3 дня', '7 дней', '16 дней', '35 дней'];
const isWords = () => deck().kind === 'words';
const sessionSize = () => isWords() ? 9 : 6;    // карточек в сессии: слова короче, их больше
const newMax = () => isWords() ? 6 : 4;         // из них новых, не больше
const unit = n => isWords() ? plural(n, 'слово', 'слова', 'слов') : plural(n, 'фраза', 'фразы', 'фраз');
const BLIND_FROM = 2;                           // с этой ступени чёрточек нет
const TRAP_MAX = 4;                             // фраз в раунде ловушек

/* ---------- утилиты ---------- */
const plural = (n, a, b, c) => { const m = n % 10, h = n % 100; return m === 1 && h !== 11 ? a : m >= 2 && m <= 4 && (h < 12 || h > 14) ? b : c; };
const fmt = s => Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
const rel = d => d <= 0 ? 'сегодня' : d === 1 ? 'завтра' : 'через ' + d + ' ' + plural(d, 'день', 'дня', 'дней');
const pipsHtml = box => [1, 2, 3, 4, 5].map(i => '<i' + (i <= box ? ' class="on"' : '') + '></i>').join('');
const ROWS = ['1234567890', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
const ADJ = {};
ROWS.forEach((r, ri) => [...r].forEach((k, i) => {
  const a = [r[i - 1], r[i + 1]];
  [ROWS[ri - 1], ROWS[ri + 1]].forEach(o => { if (o) a.push(o[i - 1], o[i], o[i + 1]); });
  ADJ[k] = a.filter(Boolean).join('');
}));

/* ---------- сессия ---------- */
/* Очередь из карточек. Виды: intro — знакомство (списать), recall — по памяти, retry — ещё раз после подсмотренной,
   trap — раунд ловушек в конце (вписать только слова, на которых споткнулся). */
let Q = [], qi = 0, A = null, ended = false, extra = false, trapsBuilt = false, gesture = false;
let results = [], sessTraps = new Map();
let cleanCh = 0, hintCh = 0, keysOk = 0, keysBad = 0, t0 = 0, secs = 0, timer = 0, nudge = 0;

function plan() {
  const t = today(), ps = deck().phrases, SESSION = sessionSize(), NEW_MAX = newMax();
  const due = ps.filter(p => S.cards[p.id] && S.cards[p.id].due <= t).sort((a, b) => S.cards[a.id].due - S.cards[b.id].due);
  const fresh = ps.filter(p => !S.cards[p.id]);
  const dueN = Math.min(due.length, SESSION), freshN = Math.min(fresh.length, SESSION - dueN, NEW_MAX);
  let items = due.slice(0, dueN).map(p => ({ p, kind: 'recall' })).concat(fresh.slice(0, freshN).map(p => ({ p, kind: 'intro' })));
  let ex = false;
  if (!items.length) {
    ex = true;
    items = ps.filter(p => S.cards[p.id]).sort((a, b) => S.cards[a.id].due - S.cards[b.id].due).slice(0, SESSION).map(p => ({ p, kind: 'recall' }));
  }
  return { items, extra: ex, due: dueN, fresh: freshN };
}
function newSession() {
  const b = plan();
  Q = b.items; extra = b.extra; qi = 0; ended = false; trapsBuilt = false;
  results = []; sessTraps = new Map();
  cleanCh = hintCh = keysOk = keysBad = 0; t0 = 0; secs = 0; clearInterval(timer);
  Speech.stop();
  Q.forEach(it => { if (it.p.img) new Image().src = it.p.img; });      // картинки сессии грузим заранее
  $('end').hidden = true; $('card').hidden = false; $('legend').hidden = false;
  document.body.classList.remove('ended');
  startCard(); stats();
}
function startTimer() { if (t0) return; t0 = Date.now(); timer = setInterval(() => { secs = (Date.now() - t0) / 1000; stats(); }, 500); }

function startCard() {
  const item = Q[qi], p = item.p, rec = S.cards[p.id], now = performance.now(), kind = item.kind;
  const locked = kind === 'intro' || kind === 'trap';
  const cur = kind === 'trap' ? item.v : p.vars[0];
  A = { p, item, kind, rec, vars: locked ? [cur] : p.vars, cur, n: 0, ok: [], hint: [], miss: [], pause: {}, ghost: 0, glvl: 0, level: 0,
    revealed: false, wrong: '', msg: null, done: false, misses: 0, hinted: 0, slip: {}, trapped: false, lastT: now, shownAt: Date.now(), doneAt: 0,
    gaps: null, words: null, endable: null, ruShown: false, blind: kind === 'recall' && !!rec && rec.box >= BLIND_FROM };
  if (kind === 'intro') A.ghost = cur.norm.length;
  if (kind === 'trap') { A.gaps = item.gaps; A.n = item.gaps[0].s; }
  $('pic').hidden = !p.img;
  if (p.img && $('picImg').getAttribute('src') !== p.img) $('picImg').src = p.img;
  $('ctx').textContent = p.ctx;
  $('kind').textContent = kind === 'intro' ? (p.img ? 'новое слово' : 'новая фраза') : kind === 'retry' ? 'ещё раз' : kind === 'trap' ? 'ловушки' : extra ? 'вне расписания' : rec ? 'повтор' : 'по памяти';
  $('blindChip').hidden = !A.blind;
  const box = rec ? rec.box : 0;
  $('pips').innerHTML = pipsHtml(box);
  $('pipLabel').textContent = rec ? 'ступень ' + box + ' из 5' : 'ещё не в памяти';
  $('after').hidden = true; $('after').innerHTML = '';
  $('card').className = 'card' + (p.img ? ' word' : '') + (document.hasFocus() ? '' : ' blurred');
  if (kind === 'intro' && gesture) listen(false);
  armNudge(); render();
}
function armNudge() {
  clearTimeout(nudge);
  if (!A || A.kind === 'intro') return;
  nudge = setTimeout(() => { if (A && !A.done && !ended && (!A.msg || A.msg.kind === 'idle')) { A.msg = { kind: 'idle', html: A.kind === 'trap' ? 'Застрял? <b>Tab</b> откроет слово.' : 'Застрял? <b>Tab</b> откроет следующую букву.' }; renderMsg(); } }, 9000);
}
const setMsg = (kind, html) => { A.msg = { kind, html }; };
/* Запятая необязательна: варианты сравниваются без запятых (v.key), а в тексте она встаёт сама.
   «No ice please» и «No ice, please» — один и тот же набор клавиш. */
const keyLen = (norm, i) => { let k = 0; for (let j = 0; j < i; j++) if (norm[j] !== ',') k++; return k; };                              // сколько клавиш до позиции i
const charPos = (norm, k) => { for (let j = 0; j < norm.length; j++) if (norm[j] !== ',' && k-- === 0) return j; return norm.length; };  // позиция k-й клавиши в тексте
const nextPos = (norm, k) => k === 0 ? 0 : charPos(norm, k - 1) + 1;                                                                    // позиция сразу после k клавиш
const candidates = keys => A.vars.filter(v => v.key.startsWith(keys));
const gapAt = i => A.gaps ? A.gaps.find(g => i >= g.s && i < g.e) : null;
const graded = () => A.kind === 'recall' || A.kind === 'retry';

/* Перейти на другой вариант, сохранив набранное: позиции пересчитываются через клавиши, без запятых. */
function rebase(next) {
  if (next === A.cur) return;
  const old = A.cur.norm, nw = next.norm, L = keyLen(old, A.n);
  const move = src => {
    const out = Array.isArray(src) ? [] : {};
    for (const i in src) { const j = +i; if (j <= A.n && old[j] !== ',' && src[i] !== undefined) out[charPos(nw, keyLen(old, j))] = src[i]; }
    return out;
  };
  const ok = move(A.ok), n = nextPos(nw, L);
  for (let j = 0; j < n; j++) if (nw[j] === ',') ok[j] = true;
  A.hint = move(A.hint); A.miss = move(A.miss); A.pause = move(A.pause); A.slip = move(A.slip);
  A.ghost = A.revealed ? nw.length : A.ghost > A.n ? nextPos(nw, keyLen(old, A.ghost)) : 0;
  A.ok = ok; A.n = n; A.cur = next;
}

/* ---------- набор ---------- */
function type(ch) {
  if (!A || A.done || ended) return;
  if (/[а-яё]/i.test(ch)) { A.wrong = ''; setMsg('warn', 'Раскладка русская. Переключись на <b>EN</b>, это не ошибка.'); render(); return; }
  startTimer(); armNudge();
  const c = norm(ch), typed = A.cur.norm.slice(0, A.n), keys = typed.replace(/,/g, '');
  if (A.gaps && c === ' ' && A.cur.norm[A.n] !== ' ') return;         // в раунде ловушек пробелы между словами уже стоят
  let add = c, cand;
  if (c === ',') cand = candidates(keys).filter(v => v.norm[nextPos(v.norm, keys.length)] === ',');
  else {
    cand = candidates(keys + c);
    if (!cand.length && (c === '.' || c === '!')) { const o = c === '.' ? '!' : '.'; cand = candidates(keys + o); if (cand.length) add = o; }   // точка и восклицательный равнозначны
  }
  const ok = cand.length > 0;
  if (ok) accept(add, cand); else reject(c, typed, keys);
  render(); stats();
  Keyboard.press(ch, ok);
}
function accept(add, cand) {
  const now = performance.now();
  let switched = false;
  if (!cand.includes(A.cur)) { rebase(cand[0]); switched = true; }
  if (add !== ',' && A.cur.norm[A.n] === ',') add = ',' + add;        // запятая встаёт сама
  for (let k = 0; k < add.length; k++) {
    const i = A.n;
    A.ok[i] = true;
    A.hint[i] = A.kind !== 'intro' && i < A.ghost;
    if (graded() && A.cur.norm[i] !== ' ' && A.cur.norm[i] !== ',') { if (A.hint[i]) hintCh++; else cleanCh++; }
    if (i === 0 || A.cur.norm[i - 1] === ' ') A.pause[i] = now - A.lastT;
    A.n++;
  }
  keysOk++; A.lastT = now; A.level = 0; A.wrong = '';
  if (switched) setMsg('ok', 'Другой вариант, тоже верно. Продолжай.');
  else if (!(A.msg && (A.msg.kind === 'trap' || A.msg.kind === 'ok') && add.indexOf(' ') < 0)) A.msg = null;
  if (A.gaps) {
    if (!gapAt(A.n)) {
      const nextGap = A.gaps.find(g => g.s >= A.n);
      if (nextGap) A.n = nextGap.s; else complete();
    }
    return;
  }
  /* Набранное уже совпало с коротким вариантом, но есть и длиннее («I agree» и «I agree with you»):
     не обрываем фразу, а даём выбор — Enter или дописать. */
  const L = keyLen(A.cur.norm, A.n);
  const full = A.n >= A.cur.norm.length ? A.cur : cand.find(v => v.key.length === L);
  A.endable = null;
  if (full && !cand.some(v => v.key.length > L)) complete();
  else if (full) { A.endable = full; setMsg('ok', 'Так уже верно: <b>Enter</b>. Или допиши фразу до конца.'); }
}
function endHere() {
  if (!A || A.done || !A.endable) return;
  rebase(A.endable); A.endable = null;
  complete(); render(); stats();
}
function reject(c, typed, keys) {
  keysBad++; A.wrong = c;
  const L = keys.length, cand = candidates(keys), exp = new Set(cand.map(v => v.key[L]));
  const trap = graded() ? trapFor(A.p.traps, typed, c) : null;
  const marks = [...exp].filter(Boolean);
  if (marks.length && marks.every(m => '.?!'.includes(m))) {                 // фраза дописана, остался знак: память тут ни при чём
    setMsg('idle', marks.includes('?') ? 'Это вопрос: в конце нужен <b>?</b>' : 'Фраза дописана. Осталась точка.');
  }
  else if (c === ',') setMsg('idle', 'Запятая здесь не нужна.');
  else if (trap) { memMiss(); A.miss[A.n]++; A.trapped = true; setMsg('trap', md(trap.say)); }
  else if (cand.some(v => v.key[L] === "'" && v.key[L + 1] === c)) setMsg('idle', 'Здесь нужен апостроф.');
  else if (!A.slip[A.n] && /[a-z0-9]/.test(c) && [...exp].some(e => e && (ADJ[e] || '').indexOf(c) >= 0)) { A.slip[A.n] = 1; setMsg('idle', 'Похоже на опечатку: соседняя клавиша. Не считается.'); }
  else {
    const auto = memMiss();
    if (auto) setMsg('hint', 'Три промаха подряд: открыл букву.');
    else if (c === ' ' && !exp.has(' ')) setMsg('bad', 'Слово ещё не закончилось.');
    else if (exp.size === 1 && exp.has(' ')) setMsg('bad', 'Здесь слово уже закончилось: пробел.');
    else setMsg('bad', A.kind === 'intro' ? 'Не та буква. Смотри на образец.' : 'Не та буква. Она не введена, пробуй ещё.');
  }
}
function memMiss() {
  A.miss[A.n] = (A.miss[A.n] || 0) + 1; A.misses++;
  if (A.kind !== 'intro' && A.miss[A.n] >= 3 && A.ghost <= A.n) { A.ghost = A.n + 1; A.glvl = 1; return true; }
  return false;
}
function hint() {
  if (!A || A.done || ended) return;
  if (A.kind === 'intro') { setMsg('idle', A.p.img ? 'Слово уже на экране: спиши его.' : 'Фраза уже на экране: спиши её.'); render(); return; }
  if (A.p.img && !A.ruShown) {                  // у слов первая подсказка — перевод: картинку можно понять по-разному
    A.ruShown = true; setMsg('idle', 'Показал перевод. Это не считается подсказкой.'); render(); return;
  }
  startTimer(); armNudge();
  const t = A.cur.norm, len = t.length, gap = gapAt(A.n);
  let we = t.indexOf(' ', A.n + 1); if (we < 0) we = len;
  if (gap) we = gap.e;
  A.wrong = '';
  if (gap) {                                    // в раунде ловушек подсказка одна: открыть слово
    A.ghost = we; A.glvl = 2;
    setMsg('hint', 'Открыл слово. Напечатай его: пальцы тоже должны запомнить.');
    render(); return;
  }
  const word = !!A.p.img;
  let lvl = Math.min(3, A.level + 1);
  if (lvl === 1 && A.ghost > A.n) lvl = 2;
  if (word && lvl === 2) lvl = 3;               // у слова после буквы открывается сразу всё
  A.level = lvl;
  if (lvl === 1) { A.ghost = A.n + 1; A.glvl = 1; setMsg('hint', word ? 'Открыл букву. Слово уже не «по памяти»: вернётся завтра.' : 'Открыл букву. Фраза уже не «по памяти»: вернётся завтра.'); }
  else if (lvl === 2) {
    if (A.ghost >= we) setMsg('hint', 'Слово уже открыто. Ещё раз <b>Tab</b> — вся фраза.');
    else { A.ghost = we; setMsg('hint', 'Открыл слово. Ещё раз <b>Tab</b> — вся фраза.'); }
    A.glvl = Math.max(A.glvl, 2);
  } else { A.ghost = len; A.glvl = 3; A.revealed = true; setMsg('hint', word ? 'Открыл слово. Перепечатай его: спрошу ещё раз через пару карточек.' : 'Открыл фразу. Перепечатай её: спрошу ещё раз через пару фраз.'); }
  render();
}
function skipIntro() {
  if (!A || A.kind !== 'intro' || A.n) return;
  A.item.kind = 'recall';
  Speech.stop();
  startCard();
}
function wordInfo() {
  return wordSpans(A.cur.norm).map(({ s, e }) => {
    let h = 0, m = 0;
    for (let k = s; k < e; k++) { if (A.hint[k]) h++; m += A.miss[k] || 0; }
    const c = h / (e - s) > .5 ? 'r' : (h || m >= 2) ? 'y' : 'g';
    return { s, e, c, m, slow: c === 'g' && (s ? (A.pause[s] || 0) > 3000 : qi > 0 && (A.pause[0] || 0) > 9000) };
  });
}
/* Слова, на которых споткнулся: их и спросим в раунде ловушек. Знаки препинания в пропуск не входят. */
function trapGaps() {
  const t = A.cur.norm;
  let ws = A.words.filter(w => w.c !== 'g');
  if (!ws.length) ws = A.words.filter(w => w.m > 0);
  return ws.map(w => {
    let s = w.s, e = w.e;
    while (s < e && !/[a-z0-9]/.test(t[s])) s++;
    while (e > s && !/[a-z0-9]/.test(t[e - 1])) e--;
    return { s, e };
  }).filter(g => g.e > g.s);
}
/* Учёт ловушек по словам: споткнулся — слово в списке, два чистых набора — ушло. */
function noteWords() {
  const t = A.cur.text, day = today();
  const clean = w => t.slice(w.s, w.e).replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, '');
  A.words.forEach((w, i) => {
    const raw = clean(w);
    if (!raw) return;
    const key = A.p.id + ':' + norm(raw), old = S.words[key];
    if (w.c !== 'g') {
      const prev = i ? clean(A.words[i - 1]) : '';
      S.words[key] = { t: raw.length <= 3 && prev ? prev + ' ' + raw : raw, n: (old ? old.n : 0) + 1, ok: 0, last: day };
    } else if (old) { old.ok = (old.ok || 0) + 1; if (old.ok >= 2) delete S.words[key]; }
  });
}
function complete() {
  A.done = true; A.doneAt = Date.now(); clearTimeout(nudge);
  const t = A.cur.norm, day = today();
  if (A.kind === 'intro') {
    A.item.grade = 'n';
    Q.splice(Math.min(Q.length, qi + 2), 0, { p: A.p, kind: 'recall', viaIntro: true });
    renderAfter(); listen(false);
    return;
  }
  if (A.kind === 'trap') {
    let dirty = false;
    A.gaps.forEach(g => { for (let i = g.s; i < g.e; i++) if (A.hint[i] || A.miss[i]) dirty = true; });
    A.grade = A.item.grade = dirty ? 'y' : 'g';
    const r = results.find(x => x.p === A.p);
    if (r && !dirty) r.fixed = true;
    renderAfter(); listen(false);
    return;
  }
  let letters = 0, hinted = 0;
  for (let i = 0; i < t.length; i++) if (t[i] !== ' ') { letters++; if (A.hint[i]) hinted++; }
  A.hinted = hinted;
  A.grade = hinted / letters > .4 ? 'r' : (hinted || A.trapped || A.misses > 2) ? 'y' : 'g';
  A.words = wordInfo();
  A.item.grade = A.grade;
  let again = false;
  if (A.grade === 'r' && A.kind === 'recall') {       // подсмотрел: та же фраза ещё раз через пару карточек
    Q.splice(Math.min(Q.length, qi + 3), 0, { p: A.p, kind: 'retry' });
    again = true;
  }
  if (A.grade === 'y') { const gaps = trapGaps(); if (gaps.length) sessTraps.set(A.p.id, { p: A.p, v: A.cur, gaps }); }
  else sessTraps.delete(A.p.id);
  if (A.kind === 'recall') {
    const rec = A.rec, fresh = !rec, wasDue = fresh || rec.due <= day;
    let box = rec ? rec.box : 0, due;
    if (A.grade === 'g') {
      if (fresh) box = A.item.viaIntro ? 1 : 2;       // только что списал — завтра; знал и без знакомства — через три дня
      else if (wasDue) box = Math.min(5, box + 1);
      due = wasDue ? day + IV[box] : rec.due;
    } else { box = A.grade === 'y' && !fresh ? Math.max(1, box - 1) : 1; due = day + 1; }
    S.cards[A.p.id] = { box, due, seen: (rec ? rec.seen : 0) + 1, last: day, g: A.grade };
    const d = S.days[day] || (S.days[day] = { g: 0, y: 0, r: 0 }); d[A.grade]++;
    if (A.grade !== 'r') noteWords();
    save();
    results.push({ p: A.p, grade: A.grade, text: A.cur.text, tail: A.cur.tail, words: A.words, hinted, fixed: false });
  }
  renderAfter(again); listen(false);
}
function renderAfter(again) {
  const el = $('after'), noteHtml = A.p.note ? '<div class="note">' + md(A.p.note) + '</div>' : '';
  if (A.kind === 'intro') {
    el.innerHTML = '<div class="verdict"><i class="dot n"></i>Познакомились. <small>Скоро спрошу ' + (A.p.img ? 'его' : 'её') + ' по памяти.</small></div>' + noteHtml;
  } else if (A.kind === 'trap') {
    el.innerHTML = '<div class="verdict"><i class="dot ' + A.grade + '"></i>' + (A.grade === 'g' ? 'Теперь чисто.' : 'Пока сыро.') +
      ' <small>' + (A.p.img ? 'Слово' : 'Фраза') + ' вернётся ' + rel(S.cards[A.p.id].due - today()) + '.</small></div>';
  } else {
    const rec = S.cards[A.p.id], d = rec.due - today(), g = A.grade, retry = A.kind === 'retry';
    const trapLater = sessTraps.has(A.p.id);
    const back = again ? 'Спрошу ещё раз через пару карточек, потом ' + rel(d) + '.'
      : trapLater ? (A.p.img ? 'В конце сессии спрошу ещё раз. Слово вернётся ' : 'В конце сессии спрошу слова, на которых ты споткнулся. Фраза вернётся ') + rel(d) + '.'
      : 'Вернётся ' + rel(d) + '.';
    const head = g === 'g' ? (retry ? 'Вот теперь по памяти.' : A.rec ? 'По памяти.' : 'По памяти с первого раза.')
      : g === 'y' ? (A.hinted ? 'С подсказкой.' : A.trapped ? 'Попался в ловушку.' : 'С промахами.') : 'Пока не в памяти.';
    const alts = A.p.en.filter(e => norm(e) !== A.cur.norm).slice(0, 3);
    const slow = A.words.filter(w => w.slow).map(w => A.cur.text.slice(w.s, w.e));
    el.innerHTML =
      '<div class="verdict"><i class="dot ' + g + '"></i>' + head + ' <small>' + back + '</small></div>' + noteHtml +
      (slow.length ? '<div class="alts">Задумался на: ' + slow.map(w => '<code>' + esc(w) + '</code>').join('') + '</div>' : '') +
      (alts.length ? '<div class="alts">Так тоже можно: ' + alts.map(a => '<code>' + esc(a) + '</code>').join('') + '</div>' : '');
    $('pips').innerHTML = pipsHtml(rec.box); $('pipLabel').textContent = 'ступень ' + rec.box + ' из 5';
  }
  el.hidden = false;
  A.msg = null;
}
function next() {
  if (!A || !A.done || ended) return;
  Speech.stop();
  qi++;
  if (qi >= Q.length && !trapsBuilt) {
    trapsBuilt = true;
    [...sessTraps.values()].slice(0, TRAP_MAX).forEach(x => Q.push({ p: x.p, kind: 'trap', v: x.v, gaps: x.gaps }));
  }
  if (qi >= Q.length) finish(); else { startCard(); stats(); }
}

/* ---------- звук ---------- */
const soundOn = () => S.sound && Speech.usable;
function listen(slow) {
  if (!A || !soundOn()) return;
  Speech.say(A.cur.text + (A.cur.tail || ''), slow);
}
function renderSound() {
  const b = $('soundBtn'), none = Speech.state === 'none' || Speech.state === 'novoice';
  b.classList.toggle('off', !soundOn());
  b.title = none ? 'В этом браузере нет английского голоса' : Speech.state === 'failed' ? 'Звук не запустился. Нажми, чтобы попробовать снова'
    : S.sound ? 'Озвучка включена' + (Speech.voiceName ? ': ' + Speech.voiceName : '') : 'Озвучка выключена';
  if (A) $('listenBtn').hidden = !A.done || !soundOn();
}
function toggleSound() {
  if (Speech.state === 'failed') { Speech.retry(); S.sound = true; }
  else S.sound = !S.sound;
  if (!S.sound) Speech.stop();
  save(); renderSound();
  if (S.sound && A && A.done) listen(false);
}

function toggleKb() { S.kb = !S.kb; save(); Keyboard.toggle(!S.kb); }

/* ---------- отрисовка ---------- */
function render() {
  if (!A) return;
  const v = A.cur, t = v.text, n = A.n, done = A.done, intro = A.kind === 'intro';
  const wOf = {}; if (done && A.words) A.words.forEach(w => { for (let i = w.s; i < w.e; i++) wOf[i] = w; });
  let h = '', open = false, need = 0, have = 0;
  const badge = () => A.wrong ? '<em class="wrong">' + (A.wrong === ' ' ? '␣' : esc(A.wrong)) + '</em>' : '';
  for (let i = 0; i < t.length; i++) {
    const ch = t[i], given = !!A.gaps && !gapAt(i), typed = !given && !!A.ok[i];
    const isCur = !done && i === n, ghost = !given && !typed && i < A.ghost;
    const hidden = !given && !typed && !ghost && A.blind;
    if (!given && ch !== ' ') { need++; if (typed) have++; }
    if (hidden && !isCur) continue;
    let cls = 'c', body;
    if (ch === ' ') {
      if (open) { h += '</span>'; open = false; }
      cls += ' sp'; body = ghost && isCur ? '␣' : ' ';
      if (ghost) cls += intro ? ' v' : ' g';
    } else {
      if (!open) { const w = wOf[i]; h += '<span class="w' + (w ? ' w' + w.c + (w.slow ? ' slow' : '') : '') + '">'; open = true; }
      if (given) { cls += ' pre'; body = esc(ch); }
      else if (typed) { cls += ' t' + (A.hint[i] && !done ? ' h' : '') + (A.gaps ? ' fix' : ''); body = esc(ch); }
      else if (ghost) { cls += intro ? ' v' : ' g'; body = esc(ch); }
      else if (hidden) body = '&nbsp;';
      else if (/[A-Za-z0-9]/.test(ch)) { cls += ' s'; body = '&nbsp;'; }
      else { cls += ' pn'; body = esc(ch); }
    }
    if (isCur) cls += ' cur' + (A.wrong ? ' miss shake' : '');
    h += '<span class="' + cls + '">' + (isCur ? badge() : '') + body + '</span>';
  }
  if (open) h += '</span>';
  if (v.tail && (done || intro || A.gaps)) h += '<span class="tail">' + esc(v.tail) + '</span>';
  $('line').innerHTML = h;
  const bar = $('progress').firstElementChild, g = A.grade;
  bar.style.width = (need ? 100 * have / need : 0) + '%';
  bar.style.background = done && g ? (g === 'g' ? 'var(--acc)' : g === 'y' ? 'var(--hint)' : 'var(--bad)') : '';
  ['g', 'y', 'r'].forEach(k => $('card').classList.toggle('done-' + k, done && g === k));
  const lvl = done || A.ghost <= n ? 0 : A.glvl;
  const word = !!A.p.img, showRu = !word || A.ruShown || done || intro;
  $('ru').textContent = showRu ? A.p.ru : 'перевод: Tab';
  $('ru').classList.toggle('muted', !showRu);
  const labels = word ? ['перевод', 'буква', 'слово'] : ['буква', 'слово', 'фраза'];
  document.querySelectorAll('#steps i').forEach((e, i) => {
    e.textContent = labels[i];
    e.classList.toggle('on', word ? (i === 0 ? A.ruShown && !done : i <= lvl) : i + 1 <= lvl);
  });
  const ladder = !done && graded();
  $('hintBtn').hidden = done || intro; $('steps').hidden = !ladder; $('cost').hidden = !ladder;
  $('skipBtn').hidden = !(intro && !done && n === 0);
  $('nextBtn').hidden = !done;
  renderMsg(); renderTrack(); renderSound(); renderKb();
}
/* Клавишу подсвечиваем заранее, только когда буква и так на экране: в знакомстве и под открытой подсказкой. */
function renderKb() {
  if (!A || A.done) { Keyboard.guide(null, ''); return; }
  const known = A.kind === 'intro' || A.n < A.ghost;
  Keyboard.guide(known ? A.cur.text[A.n] : null, 'По памяти клавишу заранее не подсвечиваю. Палец покажу после нажатия.');
}
function renderMsg() {
  const m = $('msg');
  if (A.done) { m.className = ''; m.innerHTML = ''; return; }
  if (A.msg) { m.className = A.msg.kind; m.innerHTML = A.msg.html; return; }
  m.className = '';
  if (A.n && A.kind !== 'trap') { m.innerHTML = ''; return; }
  if (A.p.img) {
    m.innerHTML = A.kind === 'intro' ? 'Новое слово. Спиши его, глядя на образец. Уже знаешь? <b>Enter</b> — сразу по памяти.'
      : A.kind === 'trap' ? 'Раунд ловушек: впиши слово ещё раз.'
      : A.kind === 'retry' ? 'То же слово ещё раз. Теперь без подсказок.'
      : 'Что на картинке? Печатай по-английски. <b>Tab</b> покажет перевод.';
    return;
  }
  m.innerHTML = A.kind === 'intro' ? 'Новая фраза. Спиши её, глядя на образец. Уже знаешь? <b>Enter</b> — сразу по памяти.'
    : A.kind === 'trap' ? (A.n === A.gaps[0].s ? 'Раунд ловушек: впиши только пропущенные слова.' : '')
    : A.kind === 'retry' ? 'Та же фраза ещё раз. Теперь без подсказок.'
    : A.blind ? 'Эта фраза уже без чёрточек: печатай вслепую.'
    : A.item.viaIntro ? 'Та же фраза, теперь по памяти. Чёрточки — её буквы.'
    : 'Чёрточки — буквы английской фразы. Печатай её по памяти.';
}
function renderTrack() {
  $('track').innerHTML = Q.map((it, i) => '<i class="' + (it.kind === 'recall' ? '' : 'small ') +
    (i < qi || (i === qi && A && A.done) ? it.grade || '' : i === qi ? 'now' : '') + '"></i>').join('');
}
function streak() {
  let d = today(), n = 0;
  if (!S.days[d]) d--;
  while (S.days[d]) { n++; d--; }
  return n;
}
function stats() {
  const tot = cleanCh + hintCh, keys = keysOk + keysBad;
  $('sMem').textContent = tot ? Math.round(100 * cleanCh / tot) + '%' : '—';
  $('sAcc').textContent = keys ? Math.round(100 * keysOk / keys) + '%' : '100%';
  $('sTime').textContent = fmt(secs);
  $('sPos').textContent = !Q.length ? '—' : ended ? Q.length + '/' + Q.length : (qi + 1) + '/' + Q.length;
  const s = streak();
  $('sStreak').textContent = s ? s + ' ' + plural(s, 'день', 'дня', 'дней') : '—';
}

/* ---------- итог сессии ---------- */
const wordsHtml = r => r.words.map(w => '<span class="w w' + w.c + (w.slow ? ' slow' : '') + '">' + esc(r.text.slice(w.s, w.e)) + '</span>').join(' ') + esc(r.tail || '');
function finish() {
  ended = true; clearInterval(timer); clearTimeout(nudge);
  if (t0) secs = (Date.now() - t0) / 1000;
  renderEnd(false);
}
function renderEnd(idle) {
  ended = true; A = null;
  $('card').hidden = true; $('legend').hidden = true; $('end').hidden = false;
  document.body.classList.add('ended'); Keyboard.guide(null, '');
  $('track').innerHTML = '';
  const t = today(), ps = deck().phrases;
  if (idle) {
    $('eBig').innerHTML = 'На сегодня всё';
    $('eSub').textContent = (isWords() ? 'Все слова темы' : 'Все фразы темы') + ' на своих ступенях. Лучшее, что можно сделать для памяти сейчас, — подождать.';
    $('eRecap').hidden = true;
  } else {
    const g = results.filter(r => r.grade === 'g').length, n = results.length;
    const hl = results.reduce((a, r) => a + r.hinted, 0), keys = keysOk + keysBad;
    $('eBig').innerHTML = '<b>' + g + '</b>из ' + n + ' по памяти';
    $('eSub').textContent = (extra ? 'Вне расписания · ' : '') + deck().title + ' · точность ' + (keys ? Math.round(100 * keysOk / keys) : 100) + '% · ' + fmt(secs) +
      ' · открыто подсказкой: ' + hl + ' ' + plural(hl, 'буква', 'буквы', 'букв');
    $('eRecap').hidden = false;
    $('eRecap').innerHTML = results.map(r => {
      const rec = S.cards[r.p.id];
      return '<div class="rrow"><i class="dot ' + r.grade + '"></i><div class="rw">' + (r.p.img ? '<img class="thumb" src="' + esc(r.p.img) + '" alt="">' : '') +
        '<div><div class="ren">' + wordsHtml(r) + '</div><div class="rru">' + esc(r.p.ru) +
        (r.fixed ? ' · <em>в конце уже чисто</em>' : '') + '</div></div></div>' +
        '<div class="rdue"><span>' + rel(rec.due - t) + '</span><span class="pips">' + pipsHtml(rec.box) + '</span></div></div>';
    }).join('') + '<div class="rlegend"><span><i class="dot g"></i>по памяти</span><span><i class="dot y"></i>с подсказкой или ловушкой</span><span><i class="dot r"></i>подсмотрел</span><span><u>пунктир</u> — задумался</span></div>';
  }
  // лестница
  const boxes = STEP_NAMES.map(() => ({ g: 0, y: 0, r: 0, n: 0 }));
  ps.forEach(p => { const c = S.cards[p.id]; boxes[c ? c.box : 0][c ? c.g : 'n']++; });
  const sum = c => c.g + c.y + c.r + c.n;
  const bmax = Math.max(1, ...boxes.slice(1).map(sum));          // масштаб по выученным: столбец «новые» обрезается сверху
  $('eLadder').innerHTML = boxes.map((c, b) => '<div class="step"><div class="stack">' +
    ['g', 'y', 'r', 'n'].map(k => c[k] ? '<i class="' + k + '" style="height:' + Math.min(100, 100 * c[k] / bmax) + '%"></i>' : '').join('') +
    '</div><b>' + sum(c) + '</b><span>' + STEP_NAMES[b] + '</span></div>').join('');
  // неделя
  const max = Math.max(1, ...[0, 1, 2, 3, 4, 5, 6].map(i => { const d = S.days[t - i]; return d ? d.g + d.y + d.r : 0; }));
  const WD = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  let wk = '';
  for (let i = 6; i >= 0; i--) {
    const day = t - i, d = S.days[day] || { g: 0, y: 0, r: 0 };
    wk += '<div class="day' + (i ? '' : ' today') + '"><div class="col">' + ['g', 'y', 'r'].map(k => d[k] ? '<i class="' + k + '" style="height:' + (100 * d[k] / max) + '%"></i>' : '').join('') +
      '</div><span>' + WD[new Date(day * 864e5).getUTCDay()] + '</span></div>';
  }
  $('eWeek').innerHTML = wk;
  // что дальше
  const seen = ps.map(p => S.cards[p.id]).filter(Boolean), later = seen.filter(c => c.due > t), nx = plan();
  const known = seen.filter(c => c.box >= 3).length, s = streak();
  let line = 'Серия: ' + s + ' ' + plural(s, 'день', 'дня', 'дней') + '. Надолго в памяти: ' + known + ' из ' + ps.length + '. ';
  if (later.length) { const m = Math.min(...later.map(c => c.due)), k = later.filter(c => c.due === m).length; line += 'Ближайший повтор ' + rel(m - t) + ': ' + k + ' ' + unit(k) + '.'; }
  $('eNext').textContent = line;
  // ловушки по словам
  const words = Object.values(S.words).sort((a, b) => b.n - a.n || b.last - a.last).slice(0, 14);
  $('eWordsBox').hidden = !words.length;
  $('eWords').innerHTML = words.map(w => '<span class="chip">' + esc(w.t) + (w.n > 1 ? '<small>×' + w.n + '</small>' : '') + '</span>').join('');
  $('againBtn').innerHTML = (nx.extra ? 'Потренировать вне расписания' : 'Ещё раунд: ' + nx.items.length + ' ' + unit(nx.items.length) +
    (nx.fresh ? ', новых ' + nx.fresh : '')) + ' <kbd>Enter</kbd>';
  $('ffBtn').hidden = !DEBUG;
  if (DEBUG) { const delta = ffDelta(); $('ffBtn').innerHTML = 'Отладка: +' + delta + ' ' + plural(delta, 'день', 'дня', 'дней') + ' <kbd>D</kbd>'; }
  stats();
}
function ffDelta() {
  const t = today(), later = Object.values(S.cards).map(c => c.due).filter(d => d > t);
  return later.length ? Math.min(...later) - t : 1;
}
function fastForward() { S.offset = (S.offset || 0) + ffDelta(); save(); newSession(); }
function boot() {
  $('deckName').textContent = deck().title;
  const first = plan();
  if (first.extra) { Q = []; results = []; renderEnd(true); } else newSession();
  stats();
}

/* ---------- выбор темы ---------- */
let sel = 0;
const modalOpen = () => !$('modal').hidden;
function drawDecks() {
  const t = today();
  let last = '';
  $('deckGrid').innerHTML = DECKS.map((d, i) => {
    const words = d.kind === 'words', n = d.phrases.length;
    const seen = d.phrases.filter(p => S.cards[p.id]), due = seen.filter(p => S.cards[p.id].due <= t).length;
    const head = (words ? 'Слова по картинкам' : 'Фразы') !== last ? '<div class="gh">' + (last = words ? 'Слова по картинкам' : 'Фразы') + '</div>' : '';
    return head + '<button class="dk' + (i === sel ? ' sel' : '') + '" data-i="' + i + '"><b>' + esc(d.title) + '</b><span>' + esc(d.sub) + '</span>' +
      '<em>' + n + ' ' + (words ? plural(n, 'слово', 'слова', 'слов') : plural(n, 'фраза', 'фразы', 'фраз')) + ' · в памяти ' + seen.length +
      (due ? ' · <u>сегодня ' + due + '</u>' : '') + '</em></button>';
  }).join('');
  const s = $('deckGrid').querySelector('.sel');
  if (s && s.scrollIntoView) s.scrollIntoView({ block: 'nearest' });
}
function openModal() { sel = Math.max(0, DECKS.findIndex(d => d.id === S.deck)); drawDecks(); $('modal').hidden = false; }
function closeModal() { $('modal').hidden = true; }
function pickDeck(i) {
  const d = DECKS[i]; if (!d) return;
  closeModal();
  if (d.id === S.deck && !ended) return;
  S.deck = d.id; save(); boot();
}

/* ---------- клавиши ---------- */
document.addEventListener('keydown', e => {
  gesture = true;
  $('card').classList.remove('blurred');
  const mod = isMac ? e.metaKey : e.ctrlKey, mod2 = isMac ? e.metaKey : e.altKey;
  if (mod && e.code === 'KeyK') { e.preventDefault(); if (modalOpen()) closeModal(); else openModal(); return; }
  if (mod2 && e.code === 'KeyJ') { e.preventDefault(); toggleKb(); return; }
  if (mod2 && e.code === 'KeyU') { e.preventDefault(); toggleSound(); return; }
  if (modalOpen()) {
    if (e.key === 'Escape') { e.preventDefault(); closeModal(); }
    else if (e.key === 'Enter') { e.preventDefault(); pickDeck(sel); }
    else if (e.key.startsWith('Arrow') || e.key === 'Tab') {
      e.preventDefault();
      const n = DECKS.length;
      if (e.key === 'ArrowDown') sel = sel + 2 < n ? sel + 2 : sel;
      else if (e.key === 'ArrowUp') sel = sel - 2 >= 0 ? sel - 2 : sel;
      else sel = (sel + (e.key === 'ArrowLeft' || (e.key === 'Tab' && e.shiftKey) ? n - 1 : 1)) % n;
      drawDecks();
    }
    return;
  }
  if (e.metaKey || e.ctrlKey) return;
  if (ended) {
    if (e.key === 'Enter') { e.preventDefault(); newSession(); }
    else if (DEBUG && e.code === 'KeyD') { e.preventDefault(); fastForward(); }
    return;
  }
  if (!A) return;
  if (e.key === 'Tab') { e.preventDefault(); if (!e.repeat) hint(); return; }
  if (A.done) {
    if (e.key === 'Enter' && !e.repeat && Date.now() - A.doneAt > 250) { e.preventDefault(); next(); }
    else if (e.key === ' ') { e.preventDefault(); if (!e.repeat) listen(e.shiftKey); }
    return;
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    if (A.kind === 'intro' && A.n === 0) { if (!e.repeat && Date.now() - A.shownAt > 400) skipIntro(); return; }
    if (A.endable) { if (!e.repeat) endHere(); return; }
    A.wrong = ''; setMsg('idle', /^[.?!]$/.test(A.cur.norm.slice(A.n)) ? 'Остался знак в конце фразы.' : 'Enter сработает, когда всё дописано. Застрял — <b>Tab</b>.'); render(); return;
  }
  if (e.key === 'Backspace') { e.preventDefault(); A.wrong = ''; setMsg('idle', 'Стирать нечего: неверные буквы не вводятся.'); render(); return; }
  if (e.altKey || e.key.length !== 1) return;
  e.preventDefault(); type(e.key);
});
/* экранная клавиатура телефона: буквы приходят через скрытое поле */
$('mob').addEventListener('input', () => { const v = $('mob').value; $('mob').value = ''; gesture = true; for (const ch of v) type(ch); });
$('body').addEventListener('click', () => { if (window.matchMedia && matchMedia('(pointer:coarse)').matches) $('mob').focus({ preventScroll: true }); });
const on = (id, fn) => { $(id).onclick = e => { gesture = true; e.currentTarget.blur(); fn(); }; };
on('hintBtn', hint); on('nextBtn', next); on('skipBtn', skipIntro); on('listenBtn', () => listen(false));
on('againBtn', newSession); on('ffBtn', fastForward); on('soundBtn', toggleSound);
on('deckBtn', openModal); on('deckBtn2', openModal); on('kbBtn', toggleKb);
$('modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); const b = e.target.closest('.dk'); if (b) pickDeck(+b.dataset.i); });
let resetArmed = 0;
$('resetBtn').onclick = () => {
  if (Date.now() - resetArmed > 4000) { resetArmed = Date.now(); $('resetBtn').textContent = 'точно стереть весь прогресс?'; setTimeout(() => { $('resetBtn').textContent = 'сбросить прогресс'; }, 4000); return; }
  resetArmed = 0; $('resetBtn').textContent = 'сбросить прогресс';
  S = { cards: {}, days: {}, words: {}, deck: S.deck, sound: S.sound, kb: S.kb, offset: 0 }; save(); boot();
};
document.querySelectorAll('button').forEach(b => b.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') e.preventDefault(); }));
window.addEventListener('blur', () => $('card').classList.add('blurred'));
window.addEventListener('focus', () => $('card').classList.remove('blurred'));

/* Для проверки колод в /#debug: открыть карточку любой фразы. */
if (DEBUG) window.__card = (id, kind) => {
  const p = DECKS.flatMap(d => d.phrases).find(x => x.id === id);
  clearInterval(timer); Speech.stop();
  Q = [{ p, kind: kind || 'recall' }]; qi = 0; ended = false; trapsBuilt = true; results = []; sessTraps = new Map();
  $('end').hidden = true; $('card').hidden = false; document.body.classList.remove('ended');
  startCard();
};

/* ---------- старт ---------- */
Speech.init(renderSound);
Keyboard.toggle(!S.kb);
boot();
})();
