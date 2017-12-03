function getId(todos) {
  return todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
}

export default (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [{
        text: action.text,
        completed: false,
        id: getId(todos),
      }, ...todos];
    case 'COMPLETE_TODO':
      return todos.map(todo => (todo.id === action.id ?
        Object.assign({}, todo, { completed: !todo.completed }) : todo));
    case 'DELETE_TODO':
      return todos.filter(todo => todo.id !== action.id);
    default:
      return todos;
  }
};
