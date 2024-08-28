function CreateProject(name) {
  const getName = () => name;
  let todos = [];
  const addTodo = (todo) => {
    todos.push(todo);
  };
  const removeTodo = (todo) => {
    todos = todos.filter((value) => value != todo);
  };

  return { getName, addTodo, removeTodo };
}

export { CreateProject };
