/**
 * @fileoverview todoController.js
 * @description This file defines the todo list controller and handles the control logic.
 * @package
 */

import todoModel from "./todoModel";
import todoView from "./todoView";

const todoController = {
  body: document.querySelector("body"),
  todoList: document.createElement("div"),
  todoListData: [
    {
      id: 1,
      text: "Finish homework",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Go grocery shopping",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Exercise",
      isCompleted: false,
    },
  ],
  init() {
    this.todoList.innerHTML = "";
    this.todoList.classList.add("todo-list");
    this.todoList.id = "todo-list";

    this.body.appendChild(this.todoList);

    todoView.render(todoModel.);
  },
};

export default todoController;
