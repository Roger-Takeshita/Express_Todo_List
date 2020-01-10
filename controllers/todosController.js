const todoDB = require('../data/todoDB');

function index (req, res) {
   res.render('index', { 
      title: 'To Do List',
      todos: todoDB.allTodos() 
   });
};

function newTodo (req, res) {
   todoDB.newTodo({
      todo: req.body.text,
      done: false
   });
   res.redirect('/')
};

function deleteTodo (req, res) {
   console.log(req.params.id);
   todoDB.deleteOneTodo(req.params.id);
   res.redirect('/');
}

module.exports = {
   index,
   newTodo,
   deleteTodo
}