var codes = {}; // an empty JS object, later it's going to store the code for each end-user

const express = require('express');
const app = express();
app.listen(3000, () => console.log("Server is running!"))

//1. Serve the rps web pages
app.use(express.static('public'));
app.use(express.json({limit: '5mb'}));

//2. Receive information from the rps client and compare then respond.
app.post('/api', (request, response) => {
    console.log(request.body);
    console.log('new request');
    console.log(JSON.parse(request.query['data']));
    var z = JSON.parse(request.query['data']);
   
var userS =  0;

if (z['action'] == 'roundOver'){

  const randomC=randomComputer();
{
      switch(userChoice + randomC){
      case "rockscissor":
      case "paperrock":
      case "scissorpaper":
        victory(userChoice, randomC);
        break;
      case "rockpaper":
      case "paperscissor":
      case "scissorrock":
        defeat(userChoice, randomC);
        break;
      case "rockrock":
      case "scissorscissor":
      case "paperpaper":
        draw(userChoice, randomC);
        break;
      }
var jsontext = JSON.stringify({
   'action':'roundOver',
    'userS':userS,
    'computerS':computerS
    
  });
   
        console.log(jsontext);
            response.send(jsontext); 
}}
else if (z['action'] == 'gameOver'){
var gameEnd = false;
  if (userS==3||randomC==3) gameEnd = true;
var win = false;
  if (userS==3) win = true;
/* the response will have 2 parts: request action, whether won or not */
var jsontext = JSON.stringify({
'action':'gameOver',
'gameEnd':gameEnd,
'win':win
});
    console.log(jsontext);
        response.send(jsontext);

};


function draw(user,bot){
  userS=userS;
  computerS=computerS;
   }
  
 function victory(user,bot){
    userS = userS +1;

   }
  
 function defeat(user,bot){
    computerS=computerS+1;
 }
});