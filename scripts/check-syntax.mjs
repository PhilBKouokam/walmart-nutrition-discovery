import fs from 'node:fs';
import vm from 'node:vm';
import {execFileSync} from 'node:child_process';
for (const f of ['energy.js','fiber.js','layout.js']) execFileSync(process.execPath,['--check',`dist/${f}`]);
let count=0;
for(const f of fs.readdirSync('dist').filter(f=>f.endsWith('.html'))) {
 const text=fs.readFileSync(`dist/${f}`,'utf8');
 for(const match of text.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
  if(/\bsrc=/.test(match[1])||!match[2].trim())continue;
  new vm.Script(match[2],{filename:f});count++;
 }
}
console.log(`Syntax checked: 3 standalone scripts and ${count} inline scripts. No browser or behavioral tests are implied.`);
