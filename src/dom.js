import { CreateTodo } from "./todo.js";

function addTodoToDom(todo) {
  const mainContainerDiv = document.querySelector("#main-container");
  const todoCard = document.createElement("div");
  const todoCardTitle = document.createElement("h3");
  const todoCardDueDate = document.createElement("p");
  const todoCardCheck = document.createElement("div");

  todoCard.classList.add("todo-card");
  todoCardTitle.classList.add("todo-card-title");
  todoCardDueDate.classList.add("todo-card-due-date");
  todoCardCheck.classList.add("todo-card-check");

  todoCardTitle.textContent = todo.getTitle();
  todoCardDueDate.textContent = todo.getDueDate();

  todoCard.append(todoCardTitle, todoCardDueDate, todoCardCheck);
  mainContainerDiv.append(todoCard);
}

function removeTodoFromDom(todo) {}

export { addTodoToDom };
