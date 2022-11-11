const conn= require("../db/db")

exports.add= (req, res, next)=>{
    let start=  req.body.start;
    let end=  req.body.end;
    let place= req.body.place;
    let school= req.body.school;
    let subject= req.body.subject
    conn.query("insert into formation (start, end, place, school, subject) values (?,?,?,?,?)", [start, end, place, school, subject], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'formation saved successfully!'
            });
        }
    })
}

exports.update=(req, res, next)=>{
    let start=  req.body.start;
    let end=  req.body.end;
    let place= req.body.place;
    let school= req.body.school;
    let subject= req.body.subject;
    let id= req.body.id
    conn.query("update formation set start=?, end= ?, place= ?, school= ?, subject= ? where _id= ?", [start, end, place, school, subject, id], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'formation updated successfully!'
            });
        }
    })
}

exports.delete=(req, res, next)=>{
    let id=req.params.id
    conn.query("delete from formation where _id= ?",  id, (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'formation deleted successfully!'
            });
        }
    })
}

exports.get=(req, res, next)=>{
    conn.query("select * from formation", (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json(JSON.parse(JSON.stringify(results)));
        }
    })
}
