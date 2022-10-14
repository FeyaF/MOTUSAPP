const express = require('express')
const app = express()
const port = 5000
const fs = require('fs');
var scores= require('./model/score.json')
var present =0
var score=0
var essai=0



app.use(express.static('www'));


app.get('/getScore', (req,res)=>{
 // console.log(req.body)
})
app.get('/setScore', (req,res)=>{

    //console.log(req.query.score)
    console.log(req.query)
     //update the score of a user present in the database
    
    for (i=0; i <scores.length;i++) {
        if(scores[i]["username"]== req.query.username) 
        {
            scores[i]["score"]=req.query.score
            score=req.query.score
            essai=req.query.essai
            present=present + 1
            console.log("b"+present)
        }
    }
    
   
    if(present == 0) {
        console.log("a")
        score=req.query.score
        essai=req.query.essai
        scores.push(req.query);
    
        
    }       
    
    
    console.log(scores)

    //write file
   fs.writeFileSync('./model/score.json', JSON.stringify(scores));
     
        
    });
 
app.get('/score', (req, res) => {
  res.send(score)
});

app.get('/essai', (req, res) => {
  res.send(essai)
});

app.listen(port, () => {
  console.log(`le serveur score tourne sur le port ${port}`)
});
