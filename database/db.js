const mongoose = require('mongoose');
const keys = require('../config/keys');


const db = keys.mongoDB.dbURI;
// connect database mongoDb
mongoose.connect(db, {useNewUrlParser: true})
.then(() => {
    console.log('Database Connected');
},
err => {
 /** handle initial connection error */
 console.log("Error in database connection. ", err);
});

module.exports = db;

