const bcryptjs = require('bcryptjs');
const db = require('../../connection');

exports.login = (req, res) => {
    const { email, password} = req.body;

    //check the email and password provided
    if(!email || !password){
        return res.status(400).render('login',{
            message:'Pleace provide email and password'
        });
        // return res.status(400).json({
        //     message: 'Please fill in all fields',
        // });
    }


    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results)=>{
        if(error){
            console.log(error);  
            return res.status(500).render('login', {
                message: 'Server error, please try again later' 
            });
        }
        if(results.length === 0 ){
            return res.render('register',{
                message:'the Provide email dose not exsit'
            })
        }

        // Compare the password entered with the stored hashed password
        const isMatch = await bcryptjs.compare(password, results[0].password);

        // If password doesn't match
        if (!isMatch) {
            return res.status(401).render('login', {
                message: 'Incorrect password'
                
            });
        }

        // If email and password are correct, log the user in
        res.status(200).redirect("/");
        
    });
    
}