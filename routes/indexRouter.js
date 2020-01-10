const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todosController')

router.get('/', todoCtrl.index);
router.post('/', todoCtrl.newTodo);
router.delete('/:id', todoCtrl.deleteTodo);

module.exports = router;
