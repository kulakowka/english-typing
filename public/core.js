/* Чистая логика без DOM: нормализация, варианты ответа, ловушки.
   Работает и в браузере (window.Core), и в tools/check-phrases.mjs. */
(function (root) {
'use strict';

/* Сокращение -> полная форма принимается всегда. Обратно — только там, где это безопасно в любом месте фразы. */
const EXPAND = [
  ["I'm", 'I am'], ["I'll", 'I will'], ["I've", 'I have'], ["it's", 'it is'], ["that's", 'that is'], ["there's", 'there is'],
  ["what's", 'what is'], ["we're", 'we are'], ["you're", 'you are'], ["they're", 'they are'], ["we'll", 'we will'],
  ["you'll", 'you will'], ["they'll", 'they will'], ["it'll", 'it will'], ["we've", 'we have'], ["you've", 'you have'],
  ["don't", 'do not'], ["doesn't", 'does not'], ["didn't", 'did not'], ["can't", 'cannot'], ["couldn't", 'could not'],
  ["won't", 'will not'], ["wouldn't", 'would not'], ["shouldn't", 'should not'], ["isn't", 'is not'], ["aren't", 'are not'],
  ["wasn't", 'was not'], ["weren't", 'were not'], ["haven't", 'have not'], ["hasn't", 'has not']
];
const CONTRACT = [
  ['I am', "I'm"], ['I will', "I'll"], ['we are', "we're"], ['you are', "you're"], ['they are', "they're"], ['we will', "we'll"],
  ['do not', "don't"], ['does not', "doesn't"], ['did not', "didn't"], ['cannot', "can't"], ['could not', "couldn't"],
  ['will not', "won't"], ['would not', "wouldn't"], ['should not', "shouldn't"], ['is not', "isn't"], ['are not', "aren't"],
  ['was not', "wasn't"], ['were not', "weren't"], ['have not', "haven't"], ['has not', "hasn't"]
];
const MAX_VARIANTS = 60;

const norm = s => String(s).toLowerCase().replace(/[’‘ʼ`]/g, "'");
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/* Заменяет первое вхождение from целым словом, сохраняя заглавную букву. */
function swap(text, from, to) {
  const m = new RegExp("(^|[^A-Za-z'])" + escRe(from) + "(?=$|[^A-Za-z'])", 'i').exec(text);
  if (!m) return null;
  const at = m.index + m[1].length, old = text.slice(at, at + from.length);
  const rep = old[0] !== old[0].toLowerCase() ? to[0].toUpperCase() + to.slice(1) : to;
  return text.slice(0, at) + rep + text.slice(at + from.length);
}

/* Авторский список + равнозначные сокращения. Первый вариант — целевой.
   Возвращает [{ text, norm, key }]: key — то, что нужно нажать (запятые необязательны).
   Знак в конце — часть фразы, его тоже печатают. */
function buildVariants(list) {
  const out = [], seen = new Set();
  const add = t => { const k = norm(t); if (!seen.has(k) && out.length < MAX_VARIANTS) { seen.add(k); out.push(t); } };
  list.forEach(add);
  for (let i = 0; i < out.length; i++) {
    for (const [a, b] of EXPAND) {
      // «it's been» — это has, а «don't you» в вопросе не разворачивается в «do not you»
      const tail = a.endsWith("'s") ? '(been|got)' : a.endsWith("n't") ? '(i|you|we|they|he|she|it)' : '';
      if (tail && new RegExp(escRe(a) + ' ' + tail + "(?=$|[^A-Za-z'])", 'i').test(out[i])) continue;
      const r = swap(out[i], a, b); if (r) add(r);
    }
    for (const [a, b] of CONTRACT) { const r = swap(out[i], a, b); if (r) add(r); }
  }
  return out.map(full => { const n = norm(full); return { text: full, norm: n, key: n.replace(/,/g, ''), tail: '' }; });
}

/* Ловушка срабатывает, когда набранное заканчивается на after, а неверная клавиша входит в keys. */
function trapFor(traps, typed, key) {
  for (const t of traps || []) {
    if (t.keys.indexOf(key) < 0) continue;
    const afters = Array.isArray(t.after) ? t.after : [t.after];
    for (const a of afters) {
      const an = norm(a);
      if (t.start ? typed === an : an && typed.endsWith(an)) return t;
    }
  }
  return null;
}

/* Границы слов в нормализованной строке: [{ s, e }]. */
function wordSpans(text) {
  const out = []; let s = 0;
  for (let i = 0; i <= text.length; i++) if (i === text.length || text[i] === ' ') { if (i > s) out.push({ s, e: i }); s = i + 1; }
  return out;
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
/* Разметка заметок: *так* выделяется жирным. */
const md = s => esc(s).replace(/\*([^*]+)\*/g, '<b>$1</b>');

root.Core = { norm, swap, buildVariants, trapFor, wordSpans, esc, md, MAX_VARIANTS };
})(typeof window !== 'undefined' ? window : globalThis);
