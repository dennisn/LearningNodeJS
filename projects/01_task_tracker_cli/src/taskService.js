// taskService.js
const fs = require('node:fs');

function createTaskService(filePath) {
  // Private helper to read and parse the JSON file safely
  const loadTasks = () => {
    if (!fs.existsSync(filePath)) return [];
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data || '[]');
    } catch (error) {
      console.error("Error reading data file, resetting to empty list.");
      return [];
    }
  };

  // Private helper to save the array back to the file
  const saveTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  };

  // The public API returned by the factory
  return {
    add: (name, description, dueDate) => {
      const tasks = loadTasks();
      const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
      
      const newTask = { id, name, description, dueDate };
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