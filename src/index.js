import "./styles.css";
import { CreateTodo, getTodoById } from "./todo.js";
import { CreateProject, getProjectById } from "./project.js";
import {
  addTodoToDom,
  projectTodosInit,
  showTodoInDom,
  removeTodoFromDom,
  addProjectToDom,
  removeProjectFromDom,
} from "./dom.js";
import { retrieveProjects, storeProjects } from "./localStroage.js";

// initialization starts
let newProjectButton = document.querySelector(".new-project-button");
let newTodoButton = document.querySelector(".new-todo-button");
let newTodoForm = document.querySelector("form");
let body = document.querySelector("body");
let createTodoDialog = document.querySelector("#create-todo-dialog");

let projectArray = retrieveProjects();

projectArray.forEach((smth) => {
  addProjectToDom(smth);
});

let currentProject = projectArray[0];

projectTodosInit(currentProject.getTodos());

// tesing storage starts
// testing storage ends
// initialization ends

newProjectButton.addEventListener("click", () => {
  if (document.querySelector("#new-project-input").value.trim() != "") {
    let projectName = document.querySelector("#new-project-input").value;
    let project = CreateProject(projectName);
    projectArray.push(project);
    storeProjects(projectArray);
    addProjectToDom(project);
  }
});

newTodoButton.addEventListener("click", () => {
  createTodoDialog.showModal();
});

newTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.querySelector("#title-input-form").value;
  let description = document.querySelector("#description-input-form").value;
  let dueDate = document.querySelector("#due-date-input-form").value;
  let priority = document.querySelector(
    'input[name="priority-input"]:checked'
  ).value;

  let todo = CreateTodo(title, description, dueDate, priority);
  currentProject.addTodo(todo);
  storeProjects(projectArray);
  addTodoToDom(todo);
  newTodoForm.reset();
  createTodoDialog.close();
});

body.addEventListener("click", (e) => {
  let todoCard = e.target.closest(".todo-card");
  if (todoCard) {
    let todoId = todoCard.getAttribute("data-id");
    let todo = getTodoById(currentProject.getTodos(), todoId);

    showTodoInDom(todo);
  }

  let projectCard = e.target.closest(".project-card");
  if (projectCard) {
    let projectId = projectCard.getAttribute("data-id");
    let project = getProjectById(projectArray, projectId);
    currentProject = project;
    const projectTodos = currentProject.getTodos();

    projectTodosInit(projectTodos, projectCard);
  }
});
