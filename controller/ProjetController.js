const conn= require("../db/db")

exports.add= (req, res, next)=>{
    let title= req.body.title
    let date= req.body.date
    let place= req.body.place
    let link= req.body.link
    let image= req.body.image
    conn.query("insert into projet (title, date, place, link, image) values (?, ?, ?, ?, ?)", [title, date, place, link, image], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'projet saved successfully!'
            });
        }
    })
}

exports.update=(req, res, next)=>{
    let title= req.body.title
    let date= req.body.date
    let place= req.body.place
    let link= req.body.link
    let image= req.body.image
    let id= req.body.id
    conn.query("update projet set title=?, date= ?, place= ?, link= ?, image= ? where _id= ?", [title, date, place, link, image, id], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'projet updated successfully!'
            });
        }
    })
}

exports.delete=(req, res, next)=>{
    let id=req.params.id
    conn.query("delete from projet where _id= ?",  id, (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'projet deleted successfully!'
            });
        }
    })
}

exports.get=(req, res, next)=>{
    conn.query("select * from projet", (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json(JSON.parse(JSON.stringify(results)));
        }
    })
}
