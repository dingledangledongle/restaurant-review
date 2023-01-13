var mysql = require('mysql')

//CREATING CONNECTION
var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'92786385',
    database:'restaurant_review'
})

//CONNECTING
connection.connect(err =>  {
    if (err) throw err;
    console.log('Connected to DB')
})

module.exports = connection;