/**
 * @fileoverview todoModel.js
 * @description This file defines the todo list model and the logic.
 * @package
 * @version 1.0.0
 *
 */

/**
 * 
 {
  "todoListProjects": [
    {
      "todoElements": [
        {
          "toDoChecked": false,
          "title": "title",
          "description": "desc",
          "dueDate": "date",
          "priority": "prio"
        }
      ],
      "projectName": "test"
    }
  ]
}
 */
class TodoList {
  todoListProjects = [];

  getTodoProjects() {
    return this.todoListProjects;
  }

  setTodoProjects(projects) {
    this.todoListProjects = projects;
    return this.todoListProjects;
  }
  addTodoProject(project) {
    this.todoListProjects.push(project);
    return this.todoListProjects;
  }
}
class TodoElement {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  todoChecked = false;
  checkTodo() {
    this.checkTodo = !this.checkTodo;
  }
}

/**
 * {
    "todoElements": [
      {
        "toDoChecked": false,
        "title": "title",
        "description": "desc",
        "dueDate": "date",
        "priority": "prio"
      }
    ],
    "projectName": "test"
  }
 */
class TodoListProject {
  constructor(projectName) {
    this.projectName = projectName;
  }

  todoElements = [];

  getTodoElements() {
    return this.todoElements;
  }

  setTodoElements(todoElement) {
    this.todoElements = todoElement;
    return this.todoElements;
  }
}

const todoModel = {
  todoList: new TodoList(),
  getTodoList() {
    return this.todoList;
  },

  createTodoListProject(projectName) {
    const todoListProject = new TodoListProject(projectName);
    this.todoList.addTodoProject(todoListProject);
    return todoListProject;
  },
  deleteTodoListProject() {},
  changeTodoListProject() {},

  createTodoElement(title, description, dueDate, priority, project) {
    const todoElement = new TodoElement(title, description, dueDate, priority);

    this.addTodoToProject(todoElement, project);
    return todoElement;
  },
  deleteTodoElement() {},
  changeTodoElement() {},
  addTodoToProject(todoElement, todoList) {
    todoList.todoElements.push(todoElement);
  },
};

export default todoModel;
