const express = require('express');
const port = '3000';
const hostname = '127.0.0.1';
const db = require('./database/db');
const app = express();
const bodyParser = require('body-parser');
const todoRoutes = require('./route/todoRoute');


// const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// set up template engine
app.set('view engine', 'ejs');
app.use(express.static('./public'));

// fire controller
// todoController(app);
// Router



app.use('/todo', todoRoutes);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})