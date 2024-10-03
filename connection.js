const mysql = require("mysql");
// Load environment variables
require('dotenv').config(); 

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: '',
    database: process.env.DATABASE
});

//check database conected or not
db.connect((error) => {
    if(error){
        console.log(error);
    }else{
        console.log("mysql connected");
    }
});

// Exporting the db object
module.exports = db;