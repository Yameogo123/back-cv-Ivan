const conn= require("../db/db")

exports.add= (req, res, next)=>{
    let title= req.body.title;
    let date= req.body.date;
    let place= req.body.place;
    let link= req.body.link;
    let image= req.body.image;
    conn.query("insert into adresse (title, date, place, link, image) values (?,?,?,?,?)", [title, date, place, link, image], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'Adresse saved successfully!'
            });
        }
    })

    conn.end();
}

exports.update=(req, res, next)=>{
    let _id= req.body.id;
    let title= req.body.title;
    let date= req.body.date;
    let place= req.body.place;
    let link= req.body.link;
    let image= req.body.image;
    conn.query("update adresse set title=?, date= ?, place= ?, link=?, image= ? where _id= ?", [title, date, place, link, image, _id], (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(201).json({
                message: 'Adresse updated successfully!'
            });
        }
    })

    conn.end();
    
}

exports.get=(req, res, next)=>{
    conn.query("select * from adresse", (err, results, fields)=>{
        if(err){
            res.status(400).json({
                error: err
            });
        }else{
            res.status(200).json(JSON.parse(JSON.stringify(results)));
        }
    })

    conn.end();
    
}