import { CreateTodo } from "./todo.js";
import { CreateProject } from "./project.js";

function addTodoToDom(todo) {
  const mainContainerDiv = document.querySelector("#main-container");
  const todoCard = document.createElement("div");
  const todoCardTitle = document.createElement("h3");
  const todoCardDueDate = document.createElement("p");
  const todoCardCheck = document.createElement("div");

  todoCard.classList.add("todo-card");
  todoCard.setAttribute("data-id", todo.getId());
  todoCardTitle.classList.add("todo-card-title");
  todoCardDueDate.classList.add("todo-card-due-date");
  todoCardCheck.classList.add("todo-card-check");
  todoCardTitle.textContent = todo.getTitle();
  todoCardDueDate.textContent = todo.getDueDate();

  todoCard.append(todoCardTitle, todoCardDueDate, todoCardCheck);
  mainContainerDiv.append(todoCard);
}

function projectTodosInit(todoArray, projectCard) {
  const mainContainerDiv = document.querySelector("#main-container");

  if (projectCard != null) {
    const allProjects = document.querySelectorAll(".project-card");
    allProjects.forEach(
      (project) => (project.style.backgroundColor = "bisque")
    );
    projectCard.style.backgroundColor = "red";
  } else if (projectCard == null) {
    const mainProject = document.querySelector(".project-card");
    mainProject.style.backgroundColor = "red";
  }

  mainContainerDiv.innerHTML = "";
  // alert("its ok");
  if (todoArray.length > 0) {
    todoArray.forEach((todo) => {
      const todoCard = document.createElement("div");
      const todoCardTitle = document.createElement("h3");
      const todoCardDueDate = document.createElement("p");
      const todoCardCheck = document.createElement("div");

      todoCard.classList.add("todo-card");
      todoCard.setAttribute("data-id", todo.getId());
      todoCardTitle.classList.add("todo-card-title");
      todoCardDueDate.classList.add("todo-card-due-date");
      todoCardCheck.classList.add("todo-card-check");
      todoCardTitle.textContent = todo.getTitle();
      todoCardDueDate.textContent = todo.getDueDate();

      todoCard.append(todoCardTitle, todoCardDueDate, todoCardCheck);
      mainContainerDiv.append(todoCard);
    });
  }
}

function showTodoInDom(todo) {
  const showTodoDialog = document.querySelector("#show-todo-dialog");
  showTodoDialog.innerHTML = "";
  const showTodoDialogTitle = document.createElement("h3");
  const showTodoDialogDescription = document.createElement("p");
  const showTodoDialogDueDate = document.createElement("p");
  const closeButton = document.createElement("button");

  showTodoDialogTitle.textContent = todo.getTitle();
  showTodoDialogDescription.textContent = todo.getDescription();
  showTodoDialogDueDate.textContent = todo.getDueDate();
  closeButton.textContent = "close";

  closeButton.addEventListener("click", () => {
    showTodoDialog.close();
  });

  showTodoDialog.append(
    showTodoDialogTitle,
    showTodoDialogDescription,
    showTodoDialogDueDate,
    closeButton
  );
  showTodoDialog.showModal();
}

function removeTodoFromDom(todo) {
  const todoCard = document.querySelector(
    `.todo-card[data-id="${todo.getId()}"]`
  );

  todoCard.remove();
}

function addProjectToDom(project) {
  const sidebarContainerDiv = document.querySelector("#sidebar-container");
  const projectCard = document.createElement("div");
  const projectCardName = document.createElement("h2");

  projectCard.classList.add("project-card");
  projectCard.setAttribute("data-id", project.getId());
  projectCardName.classList.add("project-card-name");

  projectCardName.textContent = project.getName();
  projectCard.appendChild(projectCardName);
  sidebarContainerDiv.append(projectCard);
}

function removeProjectFromDom(project) {
  const projectCard = document.querySelector(
    `.project-card[data-id="${project.getId()}"]`
  );

  projectCard.remove();
}

export {
  addTodoToDom,
  projectTodosInit,
  showTodoInDom,
  removeTodoFromDom,
  addProjectToDom,
  removeProjectFromDom,
};
