const conn= require("../db/db")

exports.add= (req, res, next)=>{
    let start= req.body.start;
    let end= req.body.end;
    let job=req.body.job;
    let company=req.body.company;
    let description=req.body.description
    conn.query("insert into experience (start, end, job, company, description) values (?,?,?,?,?)", [start, end, job, company, description], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'experience saved successfully!'
            });
        }
    })

    conn.end();
}

exports.update=(req, res, next)=>{
    let id= req.body.id
    let start= req.body.start;
    let end= req.body.end;
    let job=req.body.job;
    let company=req.body.company;
    let description=req.body.description
    conn.query("update experience set start=?, end= ?, job= ?, company= ?, description= ? where _id= ?", [start, end, job, company, description, id], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'experience updated successfully!'
            });
        }
    })

    conn.end();
}

exports.delete=(req, res, next)=>{
    let id=req.params.id
    conn.query("delete from experience where _id= ?",  id, (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'experience deleted successfully!'
            });
        }
    })

    conn.end();
}

exports.get=(req, res, next)=>{
    conn.query("select * from experience", (err, results, fields)=>{
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