/**
 * @fileoverview todoView.js
 * @description This file defines the todo list view and handles the dom .
 *
 */

/**
 * @namespace todoView
 * @description Represents the view for a todo list.
 */
const todoView = {
  body: document.querySelector("body"),
  todoList: document.createElement("div"),

  init() {
    this.todoList.innerHTML = "";
    this.todoList.classList.add("todo-list");
    this.todoList.id = "todo-list";

    this.body.appendChild(this.todoList);
  },
  //TODO: add the remaining parameters of a todo element
  /**
   *
   * @param {TodoListProject} todoListProject
   * @memberof todoView
   * @description renders all the todo elements of a todo list project
   * @returns {void}
   *
   */
  renderTodoElements(todoListProject) {
    //get the dom element for the todo list project
    const todoListElement_dom = document.getElementById(
      `todo-list-project-${todoListProject.projectName}`
    );

    //get the array for all the todo elements
    const todoListElements = todoListProject.getTodoElements();

    //for each todo element create a li element and render it
    todoListElements.forEach((todoListElement) => {
      const todoElement_dom = document.createElement("li");
      todoElement_dom.textContent = todoListElement.title;
      if (todoListElement.todoChecked) {
        todoElement_dom.classList.add("completed");
      } else {
        todoElement_dom.classList.add("uncompleted");
      }
      todoListElement_dom.appendChild(todoElement_dom);
    });
  },

  /**
   *
   * @param {TodoList} todoListObject
   * @memberof todoView
   * @description renders all the todo list projects
   * @returns {void}
   *
   */
  renderTodoProjects(todoListObject) {
    //get the dom element for all the todo list projects
    const todoList_dom = document.getElementById("todo-list");
    todoList_dom.innerHTML = "";

    //get the array for all the todo projects
    const todoListProjects = todoListObject.getTodoProjects();

    //for each project create a div for it with corresponding id and render the todo elements in it
    todoListProjects.forEach((todoListProject) => {
      const todoListProject_dom = document.createElement("div");
      todoListProject_dom.classList.add("todo-list-project");
      todoListProject_dom.id = `todo-list-project-${todoListProject.projectName}`;
      todoListProject_dom.innerHTML = "";
      todoList_dom.appendChild(todoListProject_dom);

      const todoListProjectTitle_dom = document.createElement("h2");
      todoListProjectTitle_dom.textContent = todoListProject.projectName;
      todoListProjectTitle_dom.classList.add("todo-list-project-title");
      todoListProject_dom.appendChild(todoListProjectTitle_dom);

      this.renderTodoElements(todoListProject);
    });
  },
};

export default todoView;
