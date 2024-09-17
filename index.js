const express = require ("express");
const app = express();
const port = 3003
const router =require("./routes/router")
const db = require("./config/db");

app.set('view engine', 'ejs');
app.use(express.static("public"));


app.use('/',router);

app.listen(port,(req,res)=>{
    console.log(`server start ${port}`);
    
})