/* Экранная клавиатура с пальцами, как в code_typing.
   guide(ch) — подсветить клавишу заранее: только когда буква и так видна (знакомство, открытая подсказка).
   press(ch, ok) — показать палец уже после нажатия: в наборе по памяти подсветка заранее выдала бы ответ. */
window.Keyboard = (() => {
'use strict';
const $ = id => document.getElementById(id);
const esc = window.Core.esc;
const FC = { L5: '#ff7eb6', L4: '#ffb86c', L3: '#ffd23f', L2: '#7ee787', T: '#9aa0a6', R2: '#4fd1c5', R3: '#82aaff', R4: '#c792ea', R5: '#ff6e6e' };
const FN = { L5: 'левый мизинец', L4: 'левый безымянный', L3: 'левый средний', L2: 'левый указательный', T: 'большой палец', R2: 'правый указательный', R3: 'правый средний', R4: 'правый безымянный', R5: 'правый мизинец' };
const FI = { L5: 'левым мизинцем', R5: 'правым мизинцем' };
const ROWS = [
  [['`~', 'L5'], ['1!', 'L5'], ['2@', 'L4'], ['3#', 'L3'], ['4$', 'L2'], ['5%', 'L2'], ['6^', 'R2'], ['7&', 'R2'], ['8*', 'R3'], ['9(', 'R4'], ['0)', 'R5'], ['-_', 'R5'], ['=+', 'R5'], ['BS', 'R5', '⌫', 'w15']],
  [['TAB', 'L5', 'Tab', 'w15'], ['q', 'L5'], ['w', 'L4'], ['e', 'L3'], ['r', 'L2'], ['t', 'L2'], ['y', 'R2'], ['u', 'R2'], ['i', 'R3'], ['o', 'R4'], ['p', 'R5'], ['[{', 'R5'], [']}', 'R5'], ['\\|', 'R5']],
  [['CAPS', 'L5', 'Caps', 'w2'], ['a', 'L5'], ['s', 'L4'], ['d', 'L3'], ['f', 'L2'], ['g', 'L2'], ['h', 'R2'], ['j', 'R2'], ['k', 'R3'], ['l', 'R4'], [';:', 'R5'], ["'\"", 'R5'], ['\n', 'R5', 'Enter', 'w2']],
  [['LS', 'L5', 'Shift', 'w25'], ['z', 'L5'], ['x', 'L4'], ['c', 'L3'], ['v', 'L2'], ['b', 'L2'], ['n', 'R2'], ['m', 'R2'], [',<', 'R3'], ['.>', 'R4'], ['/?', 'R5'], ['RS', 'R5', 'Shift', 'w25']],
  [[' ', 'T', '', 'sp']]
];
const KEYMAP = {};
ROWS.forEach(r => {
  const row = document.createElement('div'); row.className = 'row';
  r.forEach(([k, f, label, w]) => {
    const el = document.createElement('div');
    el.className = 'key' + (w ? ' ' + w : '') + (/^[fj]$/.test(k) ? ' home' : '');
    el.style.setProperty('--fc', FC[f]);
    if (label !== undefined) el.textContent = label;
    else if (k.length === 2) el.innerHTML = '<small>' + esc(k[1]) + '</small>' + esc(k[0]);
    else el.textContent = k.toUpperCase();
    const info = { el, f };
    if (label !== undefined || k.length === 1) {
      KEYMAP[k] = info;
      if (/[a-z]/.test(k)) KEYMAP[k.toUpperCase()] = { el, f, shift: true };
    } else { KEYMAP[k[0]] = info; KEYMAP[k[1]] = { el, f, shift: true }; }
    row.appendChild(el);
  });
  $('kb').appendChild(row);
});
$('kb').addEventListener('animationend', e => e.target.classList.remove('wrongkey'));
const FINGERS = {}, H = { L5: 42, L4: 56, L3: 64, L2: 58, T: 28, R2: 58, R3: 64, R4: 56, R5: 42 };
[['L5', 'L4', 'L3', 'L2', 'T'], ['T', 'R2', 'R3', 'R4', 'R5']].forEach((h, hi) => {
  const d = document.createElement('div'); d.className = 'hand';
  h.forEach(f => {
    const e = document.createElement('div'); e.className = 'fg'; e.style.setProperty('--fc', FC[f]); e.style.height = H[f] + 'px';
    if (f === 'T') e.style.width = '28px';
    FINGERS[f + hi] = e; d.appendChild(e);
  });
  $('hands').appendChild(d);
});
const fingerEls = f => f === 'T' ? [FINGERS.T0, FINGERS.T1] : [FINGERS[f + (f[0] === 'L' ? 0 : 1)]];
const shiftFor = k => KEYMAP[k.f[0] === 'L' ? 'RS' : 'LS'];
const name = ch => ch === ' ' ? 'пробел' : ch === "'" ? 'апостроф' : ch === ',' ? 'запятая' : ch === '-' ? 'дефис' : ch.toUpperCase();

let guided = false, idle = '', hitT = 0;
const clear = cls => document.querySelectorAll('#kb .' + cls + ', #hands .' + cls).forEach(e => e.classList.remove(cls));
function mark(k, cls) {
  k.el.classList.add(cls); fingerEls(k.f).forEach(e => e.classList.add(cls));
  if (!k.shift) return '';
  const s = shiftFor(k);
  s.el.classList.add(cls); fingerEls(s.f).forEach(e => e.classList.add(cls));
  return ' + Shift ' + FI[s.f];
}
const dot = k => '<span class="dot" style="background:' + FC[k.f] + '"></span>';

/* Подсветить следующую клавишу. ch = null — подсветки нет, в подписи idleText. */
function guide(ch, idleText) {
  clear('on');
  idle = idleText || '';
  const k = ch != null ? KEYMAP[ch] : null;
  guided = !!k;
  if (k) { clearTimeout(hitT); clear('hit'); $('finger').className = ''; $('finger').innerHTML = dot(k) + FN[k.f] + mark(k, 'on'); }
  else if (!document.querySelector('#kb .hit')) { $('finger').className = 'idle'; $('finger').textContent = idle; }
}
/* Нажатие: верная клавиша — показать, каким пальцем её берут; неверная — мигнуть красным. */
function press(ch, ok) {
  const k = KEYMAP[ch];
  if (!k) return;
  if (!ok) { k.el.classList.remove('wrongkey'); void k.el.offsetWidth; k.el.classList.add('wrongkey'); return; }
  if (guided) return;
  clearTimeout(hitT); clear('hit');
  const shift = mark(k, 'hit');
  $('finger').className = '';
  $('finger').innerHTML = dot(k) + '<b>' + esc(name(ch)) + '</b> — ' + FN[k.f] + shift;
  hitT = setTimeout(() => { clear('hit'); if (!guided) { $('finger').className = 'idle'; $('finger').textContent = idle; } }, 1100);
}
function toggle(off) { document.body.classList.toggle('nokb', off); }

return { guide, press, toggle };
})();
