const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');

// get todo all
router.get('/', todoController.todo_get_all);

// post todo
router.post('/', todoController.todo_post);

// post delete
router.post('/:item', todoController.todo_delete);

module.exports = router;
