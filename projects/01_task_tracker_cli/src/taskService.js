// taskService.js
const fs = require('node:fs');
const Task = require('./Task');

function createTaskService(filePath) {
  // Private helper to read and parse the JSON file safely
  const loadTasks = () => {
    if (!fs.existsSync(filePath)) return [];
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const taskObjects = JSON.parse(data || '[]');
      return taskObjects.map(obj => Task.fromObject(obj));
    } catch (error) {
      console.error("Error reading data file, resetting to empty list.");
      return [];
    }
  };

  // Private helper to save the array back to the file
  const saveTasks = (tasks) => {
    const taskObjects = tasks.map(task => 
      task instanceof Task ? task.toJSON() : task
    );
    fs.writeFileSync(filePath, JSON.stringify(taskObjects, null, 2));
  };

  // The public API returned by the factory
  return {
    add: (name, description, dueDate) => {
      const tasks = loadTasks();
      const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
      
      const newTask = new Task(id, name, description, dueDate);
      tasks.push(newTask);
      saveTasks(tasks);
      return newTask;
    },

    list: () => {
      return loadTasks();
    },

    delete: (id) => {
      const tasks = loadTasks();
      const filtered = tasks.filter(task => task.id !== parseInt(id, 10));
      saveTasks(filtered);
    }
  };
}

module.exports = createTaskService;