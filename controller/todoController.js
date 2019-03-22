// const bodyParser = require('body-parser');
const Todo = require('../model/todoModel');

exports.todo_get_all = (req, res, next) => {
    Todo.find({}, (err, data) => {
        if(err){
            throw err;
        }
    res.render('todo', {todos: data});
    });
}

exports.todo_post = (req, res, next) => {
    Todo(req.body).save((err, data) => {
        if(err){
            throw err;
        }
        res.json(data);
    });
}

exports.todo_delete = (req, res, next) => {
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne({item: req.params.item.replace(/\-/g, " ")},(err,data) => {
        if(err){
            throw err;
        }
        res.json(data);
    }); 
}

// module.exports = {
//     todo_get_all: todo_get_all,
//     todo_post: todo_post, 
//     todo_delete: todo_delete
// }