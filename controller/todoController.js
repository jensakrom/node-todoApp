const Todo = require('../model/todoModel');

const todo_get_all = (req, res, next) => {
    Todo.find({}, (err, data) => {
        if(err){
            throw err;
        }
    res.render('todo', {todos: data});
    });
}

const todo_post = (req, res, next) => {
    Todo(req.body).save((err, data) => {
        if(err){
            throw err;
        }
        res.json(data);
    });
}

const todo_delete = (req, res, next) => {
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne({item: req.params.item},(err,data) => {
        if(err){
            throw err;
        }
        res.json(data);
    });
}

module.exports = {
    todo_get_all: todo_get_all,
    todo_post: todo_post,
    todo_delete: todo_delete
}

// module.exports = (app) => {
//     app.get('/todo', (req, res) => {
//         Todo.find({}, (err, data) => {
//             if(err){
//                 throw err;
//             }
//         res.render('todo', {todos: data});
//         })
//     });
    
//     app.post('/todo', urlencodedParser,  (req, res) => {
//         Todo(req.body).save((err, data) => {
//             if(err){
//                 throw err;
//             }
//             res.json(data);
//         });
//     }); 
    
//     app.delete('/todo/:item', (req, res) => {
//         Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne({item: req.params.item},(err,data) => {
//             if(err){
//                 throw err;
//             }
//             res.json(data);
//         });
//     });
// };