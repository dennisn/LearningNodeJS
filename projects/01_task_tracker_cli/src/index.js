const fs = require('node:fs');
const path = require('node:path');

const dataDir = path.join(__dirname, '..', 'data');
const dataFile = path.join(dataDir, 'tasks.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, '[]\n');
}

console.log('Task Tracker CLI starter');
console.log(`Data file: ${dataFile}`);
console.log('Next step: add commands such as add, update, delete, and list.');
