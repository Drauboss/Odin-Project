/**
 * @fileoverview todoController.js
 * @description This file defines the todo list controller and handles the control logic.
 * @package
 */

import todoModel from "./todoModel";
import todoView from "./todoView";

const todoController = {
  init() {
    todoView.init();

    //const project2 = todoModel.createTodoListProject("Project 2");
    //todoModel.createTodoElement("title", "desc", "date", "prio", project);
    //todoModel.createTodoElement("title", "desc", "date", "prio", project2);

    // Call the function to generate test data
    this.generateTestData();

    // Render the todo list projects
    todoView.renderTodoProjects(todoModel.getTodoList());

    // Add event listeners
    todoView.createTodoModal();
  },
  refresh() {
    todoView.renderTodoProjects(todoModel.getTodoList());
    console.log("refreshed", todoModel.getTodoList());
  },
  generateTestData() {
    const projects = ["Project 1", "Project 2", "Project 3"];
    const priorities = ["High", "Medium", "Low"];
    const dates = ["2022-01-01", "2022-01-02", "2022-01-03"];

    projects.forEach((project) => {
      const newProject = todoModel.createTodoListProject(project);

      todoModel.createTodoElement(
        "titaaaaaaaaaaaaaaaaaaale",
        "deaaaassssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasc",
        "date",
        "0",
        newProject
      );
      for (let i = 0; i < 5; i++) {
        const title = `Task ${i + 1}`;
        const desc = `Description for Task ${i + 1}`;
        const prio = Math.floor(Math.random() * priorities.length);
        const date = dates[Math.floor(Math.random() * dates.length)];

        const todolement = todoModel.createTodoElement(
          title,
          desc,
          date,
          prio,
          newProject
        );
      }
    });
  },
  currentProject: null,
  handleAddTodoButton(todoListProject) {
    console.log("Add todo button clicked");
    todoView.showTodoModal();
    this.currentProject = todoListProject;
  },
  handleFormSubmit(title, description, priority, dueDate) {
    console.log("Form submitted");
    todoModel.createTodoElement(
      title,
      description,
      dueDate,
      priority,
      this.currentProject
    );

    todoView.renderTodoProjects(todoModel.getTodoList());
  },
  handleDeleteTodoButton(todoElement) {
    console.log("Delete todo button clicked");
    todoModel.deleteTodoElement(todoElement);
    this.refresh();
  },
};

export default todoController;
