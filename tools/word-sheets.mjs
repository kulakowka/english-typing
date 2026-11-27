#!/usr/bin/env node
/* Печатает запросы для генерации картинок: по одному листу 3×3 на девять слов.
   node tools/word-sheets.mjs            — все листы, JSON
   Листы потом режутся на картинки: tools/slice-sheet.sh */
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'words');
const ctx = vm.createContext({}); ctx.window = ctx; ctx.DECKS = [];
for (const f of readdirSync(dir).filter(f => f.endsWith('.js')).sort()) vm.runInContext(readFileSync(join(dir, f), 'utf8'), ctx);

/* studio — предметы на одном тёмном фоне; scene — обычные фотографии со своим фоном. */
const SCENE = { 'w-animals': [0, 1, 2, 3], 'w-city': [0, 1, 2], 'w-nature': [0, 1, 2, 3], 'w-home': [2] };
const TAIL = 'No grid lines, no borders, no frames, no text, no letters, no numbers, no labels, no watermarks. Real photography, natural colors and textures, not illustration, not 3D render.';
const studio = rows => `A contact sheet of nine separate photorealistic studio product photographs arranged in a strict 3 by 3 grid of equal square cells. Every cell has the same solid dark charcoal seamless backdrop (#212124) and soft even studio lighting. One object per cell, the whole object visible, centered, sharp focus, with empty margin around it, not touching the cell edges. ${rows} ${TAIL}`;
const scene = rows => `A contact sheet of nine separate photorealistic photographs arranged in a strict 3 by 3 grid of equal square cells, edge to edge, each cell a complete square photo. One subject per cell, the whole subject visible and centered, sharp focus, softly blurred natural background. ${rows} ${TAIL}`;

const out = [];
for (const d of ctx.DECKS) {
  for (let s = 0; s * 9 < d.words.length; s++) {
    const w = d.words.slice(s * 9, s * 9 + 9).map(x => x[2]);
    const rows = [0, 1, 2].map(r => `Row ${r + 1}: ${w.slice(r * 3, r * 3 + 3).join(', ')}.`).join(' ');
    const isScene = (SCENE[d.id] || []).includes(s);
    out.push({ deck: d.id, sheet: s, prompt: (isScene ? scene : studio)(rows) });
  }
}
console.log(JSON.stringify(out.map((o, i) => ({ index: i, deck: o.deck, sheet: o.sheet, prompt: o.prompt })), null, 0));
