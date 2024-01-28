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

/**
 * Represents a todo element.
 * @class TodoElement
 * @memberof todoModel
 * @param {string} title
 * @param {string} description
 * @param {date} dueDate
 * @param {int} priority
 * @property {string} title
 * @property {string} description
 * @property {string} dueDate
 * @property {string} priority
 * @property {boolean} todoChecked
 * @description Represents a todo element.
 *
 */
class TodoElement {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = this.priorityList[priority];
  }

  priorityList = ["Low", "Medium", "High"];

  todoChecked = false;

  toDoProject;

  /**
   * Toggles the todoChecked property.
   */
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
    console.log("Creating todo list project: " + projectName);
    return todoListProject;
  },
  deleteTodoListProject() {},
  changeTodoListProject() {},

  /**
   *
   * @param {string} title
   * @param {string} description
   * @param {string} dueDate
   * @param {int} priority
   * @param {TodoListProject} project
   * @memberof todoModel
   * @description Creates a todo element and adds it to the todo list project.
   * @returns {TodoElement} the todo element
   *
   */
  createTodoElement(title, description, dueDate, priority, project) {
    const todoElement = new TodoElement(title, description, dueDate, priority);
    todoElement.toDoProject = project;

    this.addTodoToProject(todoElement, project);
    console.log("Todo created: ", {
      title,
      description,
      dueDate,
      priority,
      project,
    });
    return todoElement;
  },
  deleteTodoElement(todoElement) {
    const todoListProject = todoElement.toDoProject;
    const todoListElements = todoListProject.todoElements;
    const index = todoListElements.indexOf(todoElement);
    todoListElements.splice(index, 1);
  },
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
