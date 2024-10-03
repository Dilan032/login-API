const mysql = require("mysql");
const jsonwebtoken = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: '',
    database: process.env.DATABASE
});

exports.register = (req, res) => {
    console.log(req.body);

    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;

    const { name, email, password} = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results)=>{
        if(error){
            console.log(error);   
        }
        if(results.length > 0 ){
            return res.render('register',{
                message:'the email is already in use'
            })
        }

        // hashed Password
        let hashedPassword = await bcryptjs.hash(password, 8);
        console.log(hashedPassword);

        //insert data into database
        db.query('INSERT INTO users SET ?', {name:name, email:email, password:hashedPassword}, (error, results) =>{
            if(error){
                console.log(error);

            }else{
                console.log(results);
                return res.render('register',{
                    message: 'User Registered'
                });
            }
        })
        
    });

    // res.send("Form submitted");
    
}