/**
 * @fileoverview todoModel.js
 * @description This file defines the todo list model and the logic.
 * @package
 * @version 1.0.0
 *
 */
class TodoElement {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  toDoChecked = false;
  checkTodo() {
    this.checkTodo = !this.checkTodo;
  }
}

class TodoList {
  constructor(projectName) {
    this.projectName = projectName;
  }

  todoElements = {};
}

const todoModel = {
  createTodoList(projectName) {
    const todoList = new TodoList(projectName);
  },
  deleteTodoList() {},
  changeTodoList() {},
  getTodoList() {
    return;
  },
  createTodo(title, description, dueDate, priority) {
    const todoElement = new TodoElement(title, description, dueDate, priority);

    return todoElement;
  },
  deleteTodo() {},
  changeTodo() {},
  addTodoToProject(todoElement, todoList) {
    todoList.todoElements.push(todoElement);
  },
};

export default todoModel;
