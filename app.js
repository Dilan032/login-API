const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-login'
});

//check database conected or not
db.connect((error) => {
    if(error){
        console.log(error);
    }else{
        console.log("mysql connected");
    }
})

app.listen(3000,()=>{
    console.log("Sever Start on Port 3000");
});

app.get("/", (req, res) =>{
    res.send("<h1>Home Page</h1>")
});