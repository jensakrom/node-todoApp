const express = require('express');
const port = '3000';
const hostname = '127.0.0.1';
const todoController = require('./controller/todoController');

const app = express();

// set up template engine
app.set('view engine', 'ejs');
app.use(express.static('./public'));




// fire controller
todoController(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})