const todos = [];

function newTodo(newT) {
   todos.push(newT);
}

function allTodos() {
   return todos;
}

function deleteOneTodo(id) {
   todos.splice(id, 1);
}

module.exports = {
   allTodos,
   newTodo,
   deleteOneTodo
};
 
