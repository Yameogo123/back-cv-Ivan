const conn= require("../db/db")

exports.add= (req, res, next)=>{
    let title= req.body.title;
    let origin= req.body.origin;
    let url= req.body.url;
    let image= req.body.image;
    conn.query("insert into certification (title, origin, url, image) values (?,?,?,?)", [title, origin, url, image], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'Certification saved successfully!'
            });
        }
    })

    conn.end();
}

exports.update=(req, res, next)=>{
    let title= req.body.title;
    let origin= req.body.origin;
    let url= req.body.url;
    let image= req.body.image;
    let _id= req.body.id;
    conn.query("update certification set title=?, origin= ?, url= ?, image= ? where _id= ?", [title, origin, url, image, _id], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'certification updated successfully!'
            });
        }
        conn.end();
    })
}

exports.delete=(req, res, next)=>{
    let id=req.params.id
    conn.query("delete from certification where _id= ?",  id, (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'certification deleted successfully!'
            });
        }
    })

    conn.end();
}

exports.get=(req, res, next)=>{
    conn.query("select * from certification", (err, results, fields)=>{
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
