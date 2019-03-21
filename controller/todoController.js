const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'some coding'}];
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })


const db = 'mongodb://jensakrom:manfitin83@ds117806.mlab.com:17806/todoapp';
// connect database mongoDb
mongoose.connect(db, {useNewUrlParser: true})
.then(() => {
    console.log('Database Connected');
},
err => {
 /** handle initial connection error */
 console.log("Error in database connection. ", err);
});

// create Schema 
const todoSchema = new mongoose.Schema({
    item:String
});

const Todo = mongoose.model('Todo', todoSchema);

// const itemOne = Todo({item: 'buy flowers'}).save((err) => {
//     if (err){
//         throw err;
//     }

//     console.log('Item Saved...')

// });

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        Todo.find({}, (err, data) => {
            if(err){
                throw err;
            }
        res.render('todo', {todos: data});
        })
    });
    
    app.post('/todo', urlencodedParser,  (req, res) => {
        const newTodo = Todo(req.body).save((err, data) => {
            if(err){
                throw err;
            }
            res.json(data);
        });
    }); 
    
    app.delete('/todo/:item', (req, res) => {
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne({item: req.params.item},(err,data) => {
            if(err){
                throw err;
            }
            res.json(data);
        });
    });
};