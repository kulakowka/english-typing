#!/usr/bin/env node
/* Проверка колод: node tools/check-phrases.mjs [id колоды — показать только её ошибки]
   Ловит то, что сломает тренажёр или запутает ученика: дубли id, недостижимые ловушки,
   символы, которых нет на клавиатуре, слишком длинные фразы. */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const ctx = vm.createContext({});
ctx.window = ctx;
ctx.DECKS = [];
const load = f => vm.runInContext(readFileSync(f, 'utf8'), ctx, { filename: f });
load(join(root, 'core.js'));
const only = process.argv[2] || '';
const errors = [], warns = [];
for (const sub of ['phrases', 'words']) {
  const dir = join(root, sub);
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter(f => f.endsWith('.js')).sort()) {
    try { load(join(dir, f)); } catch (e) { errors.push(`[${f.replace(/\.js$/, '')}] файл не загрузился: ${e.message}`); }
  }
}
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const { norm, buildVariants, MAX_VARIANTS } = ctx.Core;
const ids = new Set(), rus = new Map(), targets = new Map();
const MAX_LEN = 64, MIN_WORDS = 2, MAX_WORDS = 11;

for (const deck of ctx.DECKS) {
  const where = `[${deck.id}]`;
  for (const k of ['id', 'title', 'sub']) if (!deck[k] || typeof deck[k] !== 'string') errors.push(`${where} у колоды нет поля ${k}`);

  /* Тема со словами: строка ['слово|варианты', 'перевод', 'что на картинке'], у каждого слова есть картинка. */
  if (deck.kind === 'words') {
    if (!Array.isArray(deck.words) || !deck.words.length) { errors.push(`${where} нет слов`); continue; }
    for (const w of deck.words) {
      const at = `${where} ${Array.isArray(w) ? w[0] : JSON.stringify(w)}`, err = m => errors.push(`${at}: ${m}`);
      if (!Array.isArray(w) || w.length < 3 || w.slice(0, 3).some(x => typeof x !== 'string' || !x.trim())) { err('нужна строка из трёх частей: слово, перевод, описание картинки'); continue; }
      const list = w[0].split('|'), id = deck.id + '-' + slug(list[0]);
      if (ids.has(id)) err('слово повторяется в теме'); ids.add(id);
      if (rus.has(w[1])) err(`перевод «${w[1]}» уже есть в ${rus.get(w[1])}`); rus.set(w[1], id);
      for (const e of list) {
        if (e !== e.trim() || /\s\s/.test(e) || !e) err(`«${e}»: лишние пробелы`);
        if (/[^A-Za-z0-9 '-]/.test(e)) err(`«${e}»: в слове только буквы, цифры, пробел, дефис и апостроф`);
        if (e.split(' ').length > 3) err(`«${e}»: больше трёх слов`);
        const k = norm(e);
        if (targets.has(k)) err(`«${e}» уже есть в ${targets.get(k)}`); else targets.set(k, id);
      }
      if (!existsSync(join(root, 'img', deck.id, slug(list[0]) + '.webp'))) err(`нет картинки img/${deck.id}/${slug(list[0])}.webp`);
    }
    continue;
  }
  if (!Array.isArray(deck.phrases) || !deck.phrases.length) { errors.push(`${where} нет фраз`); continue; }

  for (const p of deck.phrases) {
    const at = `${where} ${p.id || JSON.stringify(p.ru)}`;
    const err = m => errors.push(`${at}: ${m}`), warn = m => warns.push(`${at}: ${m}`);

    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.id || '')) err('id должен быть вида g-send-file: строчные латинские буквы, цифры, дефисы');
    if (ids.has(p.id)) err('id повторяется'); ids.add(p.id);
    for (const k of ['ru', 'ctx', 'note']) if (!p[k] || typeof p[k] !== 'string' || !p[k].trim()) err(`нет поля ${k}`);
    if (p.ru) { if (rus.has(p.ru)) err(`русская фраза повторяется (уже есть в ${rus.get(p.ru)})`); rus.set(p.ru, p.id); }
    if (p.ctx && p.ctx.length > 28) warn('ctx длиннее 28 символов');
    if (p.note && p.note.length > 170) warn(`note длинная: ${p.note.length} символов`);
    if (p.note && (p.note.match(/\*/g) || []).length % 2) err('в note непарная звёздочка');

    if (!Array.isArray(p.en) || !p.en.length) { err('нет вариантов en'); continue; }
    const seen = new Set();
    p.en.forEach((e, i) => {
      if (typeof e !== 'string' || !e.trim()) return err(`en[${i}] пустой`);
      if (e !== e.trim() || /\s\s/.test(e)) err(`en[${i}]: лишние пробелы`);
      if (/[^A-Za-z0-9 ,.?!'-]/.test(e)) err(`en[${i}] «${e}»: символ, которого нет в наборе (разрешены буквы, цифры, пробел, запятая, апостроф ', дефис и знак в конце)`);
      if (/[.?!]/.test(e.replace(/[.?!]+$/, ''))) err(`en[${i}] «${e}»: точка или вопрос в середине. Одна фраза — одно предложение`);
      if (!/[.?!]$/.test(e)) err(`en[${i}] «${e}»: нет знака в конце`);
      const k = norm(e.replace(/[.?!]+$/, ''));
      if (seen.has(k)) err(`en[${i}] «${e}»: повтор варианта`); seen.add(k);
    });
    const target = p.en[0], words = target.trim().split(/\s+/).length;
    const tk = norm(target);
    if (targets.has(tk)) err(`целевая фраза «${target}» уже есть в ${targets.get(tk)}`); else targets.set(tk, p.id);
    if (target.length > MAX_LEN) err(`целевая фраза длиннее ${MAX_LEN} символов (${target.length})`);
    if (words < MIN_WORDS || words > MAX_WORDS) err(`в целевой фразе ${words} слов, нужно от ${MIN_WORDS} до ${MAX_WORDS}`);
    if (!/^[A-Z0-9]/.test(target)) err('целевая фраза начинается не с заглавной буквы');

    const vars = buildVariants(p.en);
    if (vars.length >= MAX_VARIANTS) warn(`вариантов с учётом сокращений ${vars.length}: достигнут предел, часть не попала`);

    for (const [ti, t] of (p.traps || []).entries()) {
      const tw = `ловушка ${ti + 1}`;
      if (!t || typeof t.say !== 'string' || !t.say.trim()) { err(`${tw}: нет поля say`); continue; }
      if ((t.say.match(/\*/g) || []).length % 2) err(`${tw}: непарная звёздочка в say`);
      if (typeof t.keys !== 'string' || !t.keys) { err(`${tw}: keys должен быть строкой из неверных клавиш`); continue; }
      if (t.keys !== norm(t.keys)) err(`${tw}: keys в нижнем регистре`);
      const afters = Array.isArray(t.after) ? t.after : [t.after];
      if (afters.some(a => typeof a !== 'string')) { err(`${tw}: after должен быть строкой или массивом строк`); continue; }
      if (afters.some(a => a === '') && !t.start) err(`${tw}: пустой after допустим только со start: true`);
      for (const key of t.keys) {
        let fires = false;
        for (const a of afters) {
          const an = norm(a);
          for (const v of vars) {
            for (let i = 0; i < v.norm.length && !fires; i++) {
              const prefix = v.norm.slice(0, i);
              if (t.start ? prefix !== an : !prefix.endsWith(an)) continue;
              const accepted = vars.some(u => u.norm.startsWith(prefix) && u.norm[i] === key);
              if (!accepted) fires = true;
            }
            if (fires) break;
          }
          if (fires) break;
        }
        if (!fires) err(`${tw}: клавиша «${key}» после ${JSON.stringify(t.after)} никогда не сработает — такого места нет или эта клавиша там верная`);
      }
    }
  }
}

const size = d => (d.kind === 'words' ? d.words : d.phrases || []).length;
const total = ctx.DECKS.filter(d => d.kind !== 'words').reduce((n, d) => n + size(d), 0);
const totalWords = ctx.DECKS.filter(d => d.kind === 'words').reduce((n, d) => n + size(d), 0);
const mine = line => !only || line.startsWith(`[${only}]`);
for (const w of warns.filter(mine)) console.log('! ' + w);
for (const e of errors.filter(mine)) console.log('✗ ' + e);
console.log(`\n${ctx.DECKS.map(d => `${d.id}: ${size(d)}`).join(', ')} · фраз ${total}, слов ${totalWords} · ошибок ${errors.filter(mine).length}${only ? ` в ${only} (во всех колодах ${errors.length})` : ''} · предупреждений ${warns.filter(mine).length}`);
process.exit(errors.filter(mine).length ? 1 : 0);
