const fs = require('node:fs');
const path = require('node:path');

const createTaskService = require('./taskService');

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
//console.log('Next step: add commands such as add, update, delete, and list.');

const taskService = createTaskService(dataFile);

// Grab the command and arguments from the terminal
const [,, command, ...args] = process.argv;

switch (command) {
  case 'add':
    // Expecting: node cli.js add "Task Name" "Task Desc" "2026-12-31"
    const [name, description, dueDate] = args;
    if (!name) {
      console.error('Error: Task name is required.');
      process.exit(1);
    }
    const created = taskService.add(name, description || '', dueDate || 'No due date');
    console.log(`✅ Task added successfully! (ID: ${created.id})`);
    break;

  case 'list':
    // Expecting: node cli.js list
    const tasks = taskService.list();
    if (tasks.length === 0) {
      console.log('No tasks found. Your schedule is clear!');
    } else {
      console.log('\n--- Your Tasks ---');
      tasks.forEach(task => {
        console.log(task.toString());
      });
      console.log('------------------\n');
    }
    break;

  case 'delete':
    // Expecting: node cli.js delete 1
    const [id] = args;
    if (!id) {
      console.error('Error: Please specify a task ID to delete.');
      process.exit(1);
    }
    taskService.delete(id);
    console.log(`❌ Task ${id} removed.`);
    break;

  default:
    console.log(`
Usage:
  node src/cli.js add "<name>" "<description>" "<dueDate>"
  node src/cli.js list
  node src/cli.js delete <id>
    `);
}