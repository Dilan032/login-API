const express = require("express");
// const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const db = require('./connection');



const app = express();

// Set the view engine
app.set('view engine', 'hbs');

// Parse application/json
app.use(bodyParser.json()); 

// dotenv.config({path: './.env'}); 

// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: '',
//     database: process.env.DATABASE
// });

//check database conected or not
// db.connect((error) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("mysql connected");
//     }
// })


const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false}));
// parse JOSON bodies (as sent by API clients)
app.use(express.json());



app.listen(3000,()=>{
    console.log("Sever Start on Port 3000");
});

//define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
