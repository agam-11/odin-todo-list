import "./styles.css";
import { CreateTodo } from "./todo.js";
import { CreateProject } from "./project.js";
import { addTodoToDom } from "./dom.js";

let testTodo = CreateTodo("title", "desc", new Date("2024-08-28"), 1);

console.log(testTodo.getPriority());

addTodoToDom(testTodo);
