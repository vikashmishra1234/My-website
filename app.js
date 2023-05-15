//connecting mongoose with data base ,db
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/contactForm',{useNewUrlParser: true}).then(()=>{
    console.log("connected succesfully with your data base")
}).catch((e)=>{
    console.log("not connected")
})
const bodyparser=require('body-parser');

let formSchema=new mongoose.Schema({
    email:String,
    password:String

});

let contact=mongoose.model('contact',formSchema)



const express = require('express');
const app = express();
const path = require('path');
const port = 80;
app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set("view engine","pug");
app.set('views',path.join(__dirname,'views'));


app.get("/",(req,res)=>{
    res.status(200).render('index.pug');
});
app.get("/index",(req,res)=>{
    res.status(200).render('index.pug');
});

app.get("/contact",(req,res)=>{
    res.status(200).render('contact.pug');
});
app.post("/contact",(req,res)=>{

  
    var myData=new contact(req.body);
    myData.save().then(()=>{
        res.send("your data has been sent to the data base");
    })
   // res.send("your form has been submitted successfully");
   
});
app.get("/about",(req,res)=>{
    res.status(200).render('about.pug');
});


app.listen(port,()=>{
    console.log(`server running at port${port}`);
});