#!/usr/bin/env node

import { getAllTasks } from '../index.js';

const tasks = getAllTasks();
console.log('\n\x1b[1m\x1b[34m=== SMART HOME MAINTENANCE SCHEDULE ===\x1b[0m');
console.log('\x1b[36mPrevent costly repairs before they happen.\x1b[0m\n');

tasks.forEach((t, i) => {
  console.log(`\x1b[1m\x1b[33m${i + 1}. [${t.category}] ${t.task}\x1b[0m`);
  console.log(`   - \x1b[37mFrequency:\x1b[0m Every ${t.intervalMonths} month(s) (${t.season})`);
  console.log(`   - \x1b[32mSavings Potential:\x1b[0m ${t.estimatedSavings}`);
});

console.log(`\n\x1b[35mDetailed DIY cost guides & step-by-step checklists:\x1b[0m`);
console.log(`\x1b[4mhttps://www.fixcosthome.com\x1b[0m\n`);

