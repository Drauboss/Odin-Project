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
    this.todoChecked = !this.todoChecked;
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

/**
 * Represents a todo model.
 * @namespace todoModel
 */
const todoModel = {
  todoList: new TodoList(),
  /**
   *
   * @returns {TodoList} the todo list
   * @memberof todoModel
   * @description Returns the todo list.
   *
   */
  getTodoList() {
    return this.todoList;
  },

  /**
   *
   * @param {string} projectName
   * @returns {TodoListProject} the todo list project
   * @memberof todoModel
   * @description Creates a todo list project and adds it to the todo list.
   *
   */
  createTodoListProject(projectName) {
    const todoListProject = new TodoListProject(projectName);
    this.todoList.addTodoProject(todoListProject);
    return todoListProject;
  },
  deleteTodoListProject() {},
  changeTodoListProject() {},

  /**
   *
   * @param {string} title
   * @param {string} description
   * @param {string} dueDate
   * @param {string} priority
   * @param {TodoListProject} project
   * @memberof todoModel
   * @description Creates a todo element and adds it to the todo list project.
   * @returns {TodoElement} the todo element
   *
   */
  createTodoElement(title, description, dueDate, priority, project) {
    const todoElement = new TodoElement(title, description, dueDate, priority);

    this.addTodoToProject(todoElement, project);
    return todoElement;
  },
  deleteTodoElement() {},
  changeTodoElement() {},

  /**
   *
   * @param {TodoElement} todoElement
   * @param {TodoListProject} todoListProject
   * @memberof todoModel
   * @description Adds a todo element to a todo list project.
   * @returns {void}
   *
   */
  addTodoToProject(todoElement, todoListProject) {
    todoListProject.todoElements.push(todoElement);
  },
};

export default todoModel;
