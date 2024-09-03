import { CreateProject } from "./project";
import { CreateTodo } from "./todo";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function storeProjects(projectArray) {
  if (storageAvailable("localStorage")) {
    // localStorage.setItem("projects", JSON.stringify(projectArray));
    let projectStorageArray = [];

    projectArray.forEach((project) => {
      let todoStorageArray = [];
      let projectName = project.getName();
      let projectId = project.getId();

      let allTodos = project.getTodos();
      allTodos.forEach((todo) => {
        let todoTitle = todo.getTitle();
        let todoDescription = todo.getDescription();
        let todoDueDate = todo.getDueDate();
        let todoPriority = todo.getPriority();
        let todoCompleted = todo.getCompleted();
        let todoId = todo.getId();
        let todoDetails = {
          todoTitle,
          todoDescription,
          todoDueDate,
          todoPriority,
          todoCompleted,
          todoId,
        };
        todoStorageArray.push(todoDetails);
      });
      let projectDetails = { projectName, projectId, todoStorageArray };
      projectStorageArray.push(projectDetails);
    });
    localStorage.setItem("projects", JSON.stringify(projectStorageArray));
  } else {
    console.log("awwww, no storage for us :(");
  }
}

function retrieveProjects() {
  projectsArray = JSON.parse(localStorage.getItem("projects")) || [];

  recreatedProjectsArray = [];

  projectsArray.forEach((project) => {
    let projectName = project.projectName;
    let projectId = project.projectId;
    let allTodos = project.todoStorageArray;
    project = CreateProject(projectName, projectId);
    allTodos.forEach((todo) => {
      let todoTitle = todo.todoTitle;
      let todoDescription = todo.todoDescription;
      let todoDueDate = todo.todoDueDate;
      let todoPriority = todo.todoPriority;
      let todoCompelted = todo.todoCompleted;
      let todoId = todo.todoId;

      todo = CreateTodo(
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority,
        todoCompelted,
        todoId
      );
      project.addTodo(todo);
    });
    recreatedProjectsArray.push(project);
  });

  return recreatedProjectsArray;
}
