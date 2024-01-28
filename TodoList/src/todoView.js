/**
 * @fileoverview todoView.js
 * @description This file defines the todo list view and handles the dom .
 *
 */

import todoController from "./todoController";
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
    const todoListProject_dom = document.getElementById(
      `todo-list-elements-${todoListProject.projectName}`
    );

    //get the array for all the todo elements
    const todoListElements = todoListProject.getTodoElements();
    todoListElements.sort((a, b) => {
      return a.todoChecked - b.todoChecked;
    });

    todoListElements.forEach((todoListElement) => {
      todoListProject_dom.appendChild(this.createTodoElement(todoListElement));
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
    const todoList_dom = document.getElementById("todo-list");
    todoList_dom.innerHTML = "";
    //get the array for all the todo projects
    const todoListProjects = todoListObject.getTodoProjects();

    //for each project create a div for it with corresponding id and render the todo elements in it
    todoListProjects.forEach((todoListProject) => {
      this.createTodoProject(todoListProject);
    });
  },
  createTodoModal() {
    // Get the modal
    const modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    // Get the form element
    const form = document.getElementById("form");

    // Add an event listener for the submit event
    form.addEventListener("submit", function (event) {
      // Prevent the form from submitting normally
      event.preventDefault();

      // Get the form data
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const priority = document.querySelector(
        'input[name="priority"]:checked'
      ).value;
      const dueDate = document.getElementById("dueDate").value;

      // Validate the form data
      if (!title || !description || !priority || !dueDate) {
        alert("All fields are required!");
        return;
      }

      modal.style.display = "none";

      form.reset();
      // Call a function in your controller with the form data
      todoController.handleFormSubmit(title, description, priority, dueDate);
    });

    return null;
  },

  showTodoModal() {
    // Get the modal
    const modal = document.getElementById("myModal");

    modal.style.display = "block";
  },
  /**
   *
   * @param {TodoElement} todo
   * @returns  {HTMLDivElement} the todo element
   * @memberof todoView
   * @description Creates a todo element and returns it.
   *
   */
  createTodoElement(todo) {
    // Create the main div for the todo element
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-element");
    todoElement.id = `todo-element-${todo.title}`;

    // Create the title element
    const titleElement = document.createElement("h3");
    titleElement.textContent = todo.title;
    titleElement.classList.add("todo-title");

    // Create the description element
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = todo.description;
    descriptionElement.classList.add("todo-description");

    // Create the complete checkbox
    const completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.classList.add("todo-complete-checkbox");
    completeCheckbox.checked = todo.todoChecked; // Assuming your todo object has a 'completed' property
    completeCheckbox.addEventListener("change", () => {
      // Add your logic for completing the todo here
      if (completeCheckbox.checked) {
        // Remove the move up transition
        todoElement.classList.remove("todo-move-up");

        todoElement.classList.add("todo-move-down");

        todo.checkTodo();
        // Add the move down transition
        titleElement.classList.add("completed");
        titleElement.classList.remove("uncompleted");
        descriptionElement.classList.add("completed");
        descriptionElement.classList.remove("uncompleted");
        console.log("checked:", {
          todo: todo,
        });
      } else {
        // Remove the move down transition
        todoElement.classList.remove("todo-move-down");

        todoElement.classList.add("todo-move-up");

        todo.checkTodo();
        //todoController.refresh();
        titleElement.classList.add("uncompleted");
        titleElement.classList.remove("completed");
        descriptionElement.classList.add("uncompleted");
        descriptionElement.classList.remove("completed");
        console.log("unchecked:", {
          todo: todo,
        });
      }
      // Move the todoElement to the end of the list if it's completed
      if (todo.todoChecked) {
        // Move the todoElement to the end of the list
        setTimeout(() => {
          todoElement.parentElement.appendChild(todoElement);
        }, 200); // The timeout should be the same as the transition duration
      }
      // Move the todoElement to the top of the list if it's unchecked
      if (!todo.todoChecked) {
        // Move the todoElement to the top of the list
        setTimeout(() => {
          todoElement.parentElement.prepend(todoElement);
        }, 200); // The timeout should be the same as the transition duration
      }
    });

    // Create the priority element
    const priorityElement = document.createElement("p");
    priorityElement.textContent = todo.priority;
    priorityElement.classList.add("todo-priority");

    // Create the due date element
    const dueDateElement = document.createElement("p");
    dueDateElement.textContent = todo.dueDate;
    dueDateElement.classList.add("todo-due-date");

    // Create the delete button
    const deleteButton = document.createElement("button");

    deleteButton.classList.add("todo-delete-button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener("click", () => {
      // Add the delete animation
      todoElement.classList.add("todo-delete-animation");

      // Remove the todoElement after the animation is finished
      setTimeout(() => {
        todoController.handleDeleteTodoButton(todo);
        // Add your logic for deleting the todo here
      }, 500); // The timeout should be the same as the animation duration
    });

    todoElement.appendChild(completeCheckbox);
    todoElement.appendChild(titleElement);
    todoElement.appendChild(descriptionElement);
    todoElement.appendChild(priorityElement);
    todoElement.appendChild(dueDateElement);
    todoElement.appendChild(deleteButton);

    return todoElement;
  },
  createTodoProject(todoListProject) {
    //get the dom element for all the todo list projects
    const todoList_dom = document.getElementById("todo-list");

    const todoListProject_dom = document.createElement("div");
    todoListProject_dom.classList.add("todo-list-project");
    todoListProject_dom.id = `todo-list-project-${todoListProject.projectName}`;
    todoListProject_dom.innerHTML = "";
    todoList_dom.appendChild(todoListProject_dom);

    const todoListProjectTitle_dom = document.createElement("h2");
    todoListProjectTitle_dom.textContent = todoListProject.projectName;
    todoListProjectTitle_dom.classList.add("todo-list-project-title");
    todoListProject_dom.appendChild(todoListProjectTitle_dom);

    const todoListElements_dom = document.createElement("div");
    todoListElements_dom.classList.add("todo-list-elements");
    todoListElements_dom.id = `todo-list-elements-${todoListProject.projectName}`;
    todoListProject_dom.appendChild(todoListElements_dom);

    this.renderTodoElements(todoListProject);

    const addTodoButton_dom = document.createElement("button");
    addTodoButton_dom.textContent = "Add Todo";
    addTodoButton_dom.classList.add("add-todo-button");
    addTodoButton_dom.id = `add-todo-button-${todoListProject.projectName}`;
    addTodoButton_dom.addEventListener("click", () => {
      todoController.handleAddTodoButton(todoListProject);
    });
    todoListProject_dom.appendChild(addTodoButton_dom);
  },
};

export default todoView;
