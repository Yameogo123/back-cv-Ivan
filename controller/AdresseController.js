const conn= require("../db/db")

exports.add= (req, res, next)=>{
    let mail= req.body.mail;
    let phone= req.body.phone;
    let country= req.body.country;
    let town= req.body.town;
    let adress= req.body.adress;
    conn.query("insert into adresse (mail, phone, country, town, adress) values (?,?,?,?,?)", [mail, phone, country, town, adress], (err, results, fields)=>{
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
    let mail= req.body.mail;
    let phone= req.body.phone;
    let country= req.body.country;
    let town= req.body.town;
    let adress= req.body.adress;
    conn.query("update adresse set mail=?, phone= ?, country= ?, town=?, adress= ? where _id= ?", [mail, phone, country, town, adress, _id], (err, results, fields)=>{
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
