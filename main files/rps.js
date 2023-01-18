var url = "http://localhost:3000/post";
var userS =  0;
var computerS = 0;
const usersc = document.getElementById("user");
const comc  = document.getElementById("botr");
var scoreboard=document.querySelector(".score");
const rock =document.getElementById("rock");
const paper =document.getElementById("paper");
const scissor =document.getElementById("scissor");
var output = document.querySelector(".output");
var message = document.getElementById("message")
/*async function userChoice(){
var userChoice = this.id;//Gets the user's choice

var data = [userChoice];//Stores user's choice in an array

/*data is sent to server through POST method and client will await for server response before it proceeds*/


/*const stuff = {
  method: 'POST',
  headers: {
    'Content-Type':'application/json'
  },
  body: 
  JSON.stringify(data)


};
const response = await fetch('/api', stuff);
const respond = await response.json();
  console.log(respond);
};*/
/*Taking the data from the server and translating it so the client can understand*/
/*var userS=response['userS'];
var computerS=response['computerS'];
var gameEnd=response['gameEnd'];
var win = response['win'];

function response(data){
var response = JSON.parse(data);
console.log(data);

if (response['action'] == 'roundEnd'){
        
 
  if (userS){
    userS++;
  }
  else if(userS){
    computerS++;
  }

  else{
    userS=userS;
    computerS=computerS;
  }
  
  
} else if (response['action'] == 'gameEnd'){
  if (gameEnd==true){
    location.href="End.html";
  }
  if (win == true){
    
    alert("Congrats! You won!");
  }
  else{
    
    alert("Oof, that sucks, you lost...");
  }
} else{
  alert("Error!")
}
};*/
function randomComputer(){
  const choices=['rock', 'paper', 'scissor'];
  const random = Math.floor(Math.random()*3);
  return choices[random];
}



function main(userChoice){
  const randomC=randomComputer();
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
}
 
 function victory(user,bot){
  userS = userS +1;
   usersc.innerHTML = userS;
   comc.innerHTML = computerS;
 if(userS == 3){
   message.innerHTML="You win!";
   setTimeout(function(){
 location.href = "End.html";
   }, 1000)
  
 }
 }
 function defeat(user,bot){
  computerS=computerS+1;
  usersc.innerHTML = userS;
   comc.innerHTML = computerS;
 
   if(computerS==3){
    message.innerHTML="You have been defeated";
    setTimeout(function(){
      location.href = "End.html";
        }, 1000)
}
 }
 function choice(){
   rock.addEventListener('click',function(){
     main("rock");
   })
   paper.addEventListener('click',function(){
    main("paper");
  })
  scissor.addEventListener('click',function(){
    main("scissor");
  })
 }
 choice();
 /*function process(){
  $.post(
    url+'?data='+JSON.stringify({
    'action':'evaluate', 
    'attempt_code':attempt_code, 
    'current_attempt_id':current_attempt_id
    }),
    response
);
 //choice();*/