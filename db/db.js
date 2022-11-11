const mysql= require("mysql")

var connection= mysql.createConnection({
    host: "eu-mm-auto-dub-03-b.cleardb.net",
    user: "be93498f8c360c",
    password: "4e31ec69",
    database: "heroku_506d14595877abc"
})

connection.connect((err) => {
    if (err) {
      console.log("Error occurred", err);
    } else {
        /*var sql1= "create table adresse (_id int NOT NULL AUTO_INCREMENT, title varchar(255), date varchar(255), place varchar(255), link varchar(255), image text, primary key (_id))";
        var sql2= "create table certification (_id int  NOT NULL AUTO_INCREMENT, title varchar(255), origin varchar(255), url varchar(255), image text, primary key (_id))";
        var sql3= "create table experience (_id int  NOT NULL AUTO_INCREMENT, start varchar(255), end varchar(255), job varchar(255), company varchar(255), description varchar(255), primary key (_id))";
        var sql4= "create table formation (_id int  NOT NULL AUTO_INCREMENT, start varchar(255), end varchar(255), place varchar(255), school varchar(255), subject varchar(255), primary key (_id))";
        var sql5= "create table message (_id int  NOT NULL AUTO_INCREMENT, name varchar(255), contact varchar(255), subject varchar(255), message varchar(255), date varchar(255), primary key (_id))";
        var sql6= "create table projet (_id int  NOT NULL AUTO_INCREMENT, title varchar(255), date varchar(255), place varchar(255), link varchar(255), image text, primary key (_id))";
        var sql7= "create table skill (_id int  NOT NULL AUTO_INCREMENT, name varchar(255), percentage varchar(255), primary key (_id))";
        var sql8= "create table utilisateur (_id int NOT NULL AUTO_INCREMENT, username varchar(255), password varchar(255), primary key (_id))";
        let arr=[sql1,sql2, sql3,sql4, sql5, sql6, sql7, sql8]
        arr.map((a)=>{
          connection.query(a, function (err, result) {
            if (err) {
              console.log(err);
            }
            console.log("created");
          })
        })*/
        
      console.log("Connected to MySQL Server");
    }
});

module.exports= connection


