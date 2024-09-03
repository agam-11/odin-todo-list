let todoIdCounter = 0;

function CreateTodo(title, description, dueDate, priority, oldId = null) {
  let completed = false;
  let id;

  if (oldId == null) {
    id = ++todoIdCounter;
  } else {
    id = oldId;
  }

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getCompleted = () => completed;
  const getId = () => id;

  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const setPriority = (newPriority) => {
    priority = newPriority;
  };

  const toggleCompleted = () => {
    completed = true;
  };

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getCompleted,
    getId,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    toggleCompleted,
  };
}

function getTodoById(array, id) {
  return array.find((todo) => {
    return todo.getId() == id;
  });
}

export { CreateTodo, getTodoById };
