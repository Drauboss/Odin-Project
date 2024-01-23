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

    //const project = todoModel.createTodoListProject("Project 1");
    //const project2 = todoModel.createTodoListProject("Project 2");
    //todoModel.createTodoElement("title", "desc", "date", "prio", project);
    //todoModel.createTodoElement("title", "desc", "date", "prio", project2);

    // Call the function to generate test data
    this.generateTestData();

    todoView.renderTodoProjects(todoModel.getTodoList());

    console.log(JSON.stringify(project));
    console.log(JSON.stringify(todoModel.getTodoList()));
  },
  generateTestData() {
    const projects = ["Project 1", "Project 2", "Project 3"];
    const priorities = ["High", "Medium", "Low"];
    const dates = ["2022-01-01", "2022-01-02", "2022-01-03"];

    projects.forEach((project) => {
      const newProject = todoModel.createTodoListProject(project);

      for (let i = 0; i < 5; i++) {
        const title = `Task ${i + 1}`;
        const desc = `Description for Task ${i + 1}`;
        const prio = priorities[Math.floor(Math.random() * priorities.length)];
        const date = dates[Math.floor(Math.random() * dates.length)];

        todoModel.createTodoElement(title, desc, date, prio, newProject);
      }
    });
  },
};

export default todoController;
