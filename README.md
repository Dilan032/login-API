<pre>
  └── controllers
    └── auth
        ├── loginController.js
        └── registerController.js


/controllers/auth/loginController.js:
--------------------------------------------------------------------------------
 1 | const bcryptjs = require('bcryptjs');
 2 | const db = require('../../connection');
 3 | 
 4 | exports.login = (req, res) => {
 5 |     const { email, password} = req.body;
 6 | 
 7 |     //check the email and password provided
 8 |     if(!email || !password){
 9 |         return res.status(400).render('login',{
10 |             message:'Pleace provide email and password'
11 |         });
12 |         // return res.status(400).json({
13 |         //     message: 'Please fill in all fields',
14 |         // });
15 |     }
16 | 
17 | 
18 |     db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results)=>{
19 |         if(error){
20 |             console.log(error);  
21 |             return res.status(500).render('login', {
22 |                 message: 'Server error, please try again later' 
23 |             });
24 |         }
25 |         if(results.length === 0 ){
26 |             return res.render('register',{
27 |                 message:'the Provide email dose not exsit'
28 |             })
29 |         }
30 | 
31 |         // Compare the password entered with the stored hashed password
32 |         const isMatch = await bcryptjs.compare(password, results[0].password);
33 | 
34 |         // If password doesn't match
35 |         if (!isMatch) {
36 |             return res.status(401).render('login', {
37 |                 message: 'Incorrect password'
38 |                 
39 |             });
40 |         }
41 | 
42 |         // If email and password are correct, log the user in
43 |         res.status(200).redirect("/");
44 |         
45 |     });
46 |     
47 | }


--------------------------------------------------------------------------------
/controllers/auth/registerController.js:
--------------------------------------------------------------------------------
 1 | const bcryptjs = require('bcryptjs');
 2 | const db = require('../../connection');
 3 | 
 4 | 
 5 | exports.register = (req, res) => {
 6 |     console.log(req.body);
 7 | 
 8 |     // const name = req.body.name;
 9 |     // const email = req.body.email;
10 |     // const password = req.body.password;
11 | 
12 |     const { name, email, password} = req.body;
13 | 
14 |     db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results)=>{
15 |         if(error){
16 |             console.log(error);
17 |             return res.status(500).render('register', {
18 |                 message: 'Server error, please try again later' 
19 |             });   
20 |         }
21 |         if(results.length > 0 ){
22 |             return res.render('register',{
23 |                 message:'the email is already in use'
24 |             });
25 |         }
26 | 
27 |         // hashed Password
28 |         let hashedPassword = await bcryptjs.hash(password, 8);
29 |         // console.log(hashedPassword);
30 | 
31 |         //insert data into database
32 |         db.query('INSERT INTO users SET ?', {name:name, email:email, password:hashedPassword}, (error, results) =>{
33 |             if(error){
34 |                 console.log(error);
35 |                 return res.status(500).render('register', {
36 |                     message: 'Server error, please try again later' 
37 |                 }); 
38 | 
39 |             }else{
40 |                 console.log(results);
41 |                 return res.render('login',{
42 |                     message: 'User Registered'
43 |                 });
44 |             }
45 |         })
46 |         
47 |     });
48 |     
49 | }
</pre>
