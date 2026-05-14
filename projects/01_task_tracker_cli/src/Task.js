class Task {
  constructor(id, name, description, dueDate) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
  }

  // Convert Task instance to plain object for JSON serialization
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      dueDate: this.dueDate
    };
  }

  // Create Task instance from plain object
  static fromObject(obj) {
    return new Task(obj.id, obj.name, obj.description, obj.dueDate);
  }

  // Return a formatted string representation of the task
  toString() {
    return `[${this.id}] ${this.name} - ${this.description} (Due: ${this.dueDate})`;
  }
}

module.exports = Task;
