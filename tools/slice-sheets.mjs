#!/usr/bin/env node
/* Режет листы 3×3 на картинки слов: node tools/slice-sheets.mjs <папка с листами>
   Лист называется <id колоды>-<номер листа>.png, слова берутся из public/words по порядку.
   Нужен ffmpeg с libwebp. */
import { existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const src = process.argv[2];
if (!src) { console.error('Укажи папку с листами'); process.exit(1); }
const ctx = vm.createContext({}); ctx.window = ctx; ctx.DECKS = [];
for (const f of readdirSync(join(root, 'words')).filter(f => f.endsWith('.js')).sort()) vm.runInContext(readFileSync(join(root, 'words', f), 'utf8'), ctx);
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const SIZE = 512, INSET = 0.012;        // отступ от края клетки, чтобы не захватить соседнюю

let made = 0, missing = [];
for (const d of ctx.DECKS) {
  mkdirSync(join(root, 'img', d.id), { recursive: true });
  for (let s = 0; s * 9 < d.words.length; s++) {
    const sheet = join(src, `${d.id}-${s}.png`);
    if (!existsSync(sheet)) { missing.push(`${d.id}-${s}`); continue; }
    const probe = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', sheet]).toString().trim().split(',').map(Number);
    const cw = probe[0] / 3, ch = probe[1] / 3, ix = Math.round(cw * INSET), iy = Math.round(ch * INSET);
    d.words.slice(s * 9, s * 9 + 9).forEach((w, i) => {
      const x = Math.round((i % 3) * cw) + ix, y = Math.round(Math.floor(i / 3) * ch) + iy;
      const out = join(root, 'img', d.id, slug(w[0].split('|')[0]) + '.webp');
      execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', sheet, '-vf', `crop=${Math.round(cw) - 2 * ix}:${Math.round(ch) - 2 * iy}:${x}:${y},scale=${SIZE}:${SIZE}:flags=lanczos`, '-c:v', 'libwebp', '-quality', '80', out]);
      made++;
    });
  }
}
console.log(`картинок: ${made}` + (missing.length ? ` · нет листов: ${missing.join(', ')}` : ''));
