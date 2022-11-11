const conn= require("../db/db")

exports.add= (req, res, next)=>{
    let name= req.body.name
    let contact= req.body.contact
    let subject= req.body.subject
    let message= req.body.message
    let date= req.body.date
    conn.query("insert into message (name, contact, subject, message, date) values (?,?,?,?,?)", [name, contact, subject, message, date], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'message saved successfully!'
            });
        }
    })

    conn.end();
}

exports.upcontact=(req, res, next)=>{
    let id= req.body.id
    let name= req.body.name
    let contact= req.body.contact
    let subject= req.body.subject
    let message= req.body.message
    let date= req.body.date
    conn.query("update message set name=?, contact= ?, subject= ?, message= ?, date= ? where _id= ?", [name, contact, subject, message, date, id], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'message updated successfully!'
            });
        }
    })

    conn.end();
}

exports.delete=(req, res, next)=>{
    let id=req.params.id
    conn.query("delete from message where _id= ?",  id, (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'message deleted successfully!'
            });
        }
    })

    conn.end();
}

exports.get=(req, res, next)=>{
    conn.query("select * from message", (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json(JSON.parse(JSON.stringify(results)));
        }
    })

    conn.end();
}
