const bcrypt= require("bcrypt");
const conn= require("../db/db")
const jwt = require('jsonwebtoken');


exports.login= (req, res, next)=>{
    let username= req.body.username
    let password= req.body.password
    console.log(req)
    conn.query("select * from utilisateur where username = ?", username, (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            let user = JSON.parse(JSON.stringify(results))[0];
            bcrypt.compare(password, user.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: 'Incorrect password!'
                        });
                    }
                    const token = jwt.sign(
                        { userId: user._id },
                        'ADRIAN',
                        { expiresIn: '24h' }
                    );
                    res.status(200).json({
                        user: user,
                        token: token
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    })
}

exports.logout=(req, res, next)=>{
    
}

exports.signin=(req, res, next)=>{
    bcrypt.hash(req.body.password, 10).then(
        (hash)=>{
            conn.query("insert into utilisateur (username, password) values (?, ?) ", [req.body.username, hash], (err, results, fields)=>{
                if(err){
                    res.status(400).json({
                        error: err
                    });
                }else{
                    res.status(201).json({
                        message: 'user saved successfully!'
                    });
                }
            })
        }
    )
}

exports.delete= (req, res, next)=>{
    let id=req.params.id
    conn.query("delete from utilisateur where _id= ?",  id, (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'user deleted successfully!'
            });
        }
    })
}
