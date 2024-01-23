/**
 * @fileoverview todoView.js
 * @description This file defines the todo list view and handles the dom .
 *
 */

const todoView = {
  render(todoList) {
    const todoListElement = document.getElementById("todo-list");
    todoListElement.innerHTML = "";
    todoList.forEach((todo) => {
      const todoElement = document.createElement("li");
      todoElement.textContent = todo.text;
      todoElement.setAttribute("data-id", todo.id);
      if (todo.isCompleted) {
        todoElement.classList.add("completed");
      }
      todoListElement.appendChild(todoElement);
    });
  },
};

export default todoView;
