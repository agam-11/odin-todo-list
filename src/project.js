let projectIdCounter = 0;

function CreateProject(name, oldId = null) {
  let id;
  if (oldId == null) {
    id = ++projectIdCounter;
  } else {
    id = oldId;
  }
  const getName = () => name;
  const getId = () => id;
  let todos = [];
  const addTodo = (todo) => {
    todos.push(todo);
  };
  const getTodos = () => todos;
  const removeTodo = (todo) => {
    todos = todos.filter((value) => value != todo);
  };

  return { getName, getId, addTodo, getTodos, removeTodo };
}

function getProjectById(array, id) {
  return array.find((project) => {
    return project.getId() == id;
  });
}

export { CreateProject, getProjectById };
