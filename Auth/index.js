const express = require('express');
const app = express(); 
const bodyParser = require('body-parser'); 
const cookieParser = require("cookie-parser");
const lineReader = require('line-reader');
const PORT = 3002; 
const sessions = require('express-session');
const fs = require('fs')

const oneDay = 1000 * 60 * 60 * 24;

app.use(cookieParser());

app.use(express.static('www'));

app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

var session
var user
app.post('/user', (req, res) => {
    lineReader.eachLine('www/users.txt', (line, last) => {
        if(req.body.name==line){
            session=req.session;
            session.userid=req.body.name;
            console.log(req.session)
            res.redirect("http://localhost:3000/")
        }
        else{
            console.log(line);
        }
        


    });
  })

app.listen(PORT, function(){ console.log('Server is running on Port',PORT); });