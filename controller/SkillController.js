const conn= require("../db/db")

exports.add= (req, res, next)=>{
    let name= req.body.name
    let percentage= req.body.percentage
    conn.query("insert into skill (name, percentage) values (?, ?)", [name, percentage], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'skill saved successfully!'
            });
        }
    })

}

exports.update=(req, res, next)=>{
    let id= req.body.id
    let name= req.body.name
    let percentage= req.body.percentage
    conn.query("update skill set name=?, percentage= ? where _id= ?", [name, percentage, id], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'skill updated successfully!'
            });
        }
    })
}

exports.delete=(req, res, next)=>{
    let id=req.params.id
    conn.query("delete from skill where _id= ?",  id, (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'skill deleted successfully!'
            });
        }
    })
}

exports.get=(req, res, next)=>{
    conn.query("select * from skill", (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json(JSON.parse(JSON.stringify(results)));
        }
    })
}
