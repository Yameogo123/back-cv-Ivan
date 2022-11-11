const express= require("express")
const bodyParser= require("body-parser")

const app= express()

app.use(express.json({limit: '50mb'}))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const router= require("./routing/router")

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Content");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTIONS");
    next();
})

app.use("/", router);

module.exports= app
