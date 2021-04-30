var timer=60;
var guessNumber;
var score=0;
var timerelem=document.querySelector("#timerelem")
var hitelem=document.querySelector("#hitelem")
var btmpnl=document.querySelector("#btmpnl")
var scoreelem=document.querySelector("#scoreelem")

setInterval(function(){
    if(timer>0)
    {
    --timer;
    timerelem.textContent=timer;
}
else{
    checkTimer();
}
},1000)

function makeBubbles(){
    for(var i=0;i<120;i++){
        var randomNumber= Math.floor(Math.random()*10)
        var template=`<div class="bubble">${randomNumber}</div>`;
        btmpnl.innerHTML+=template;
    }
}

function getNewGuess(){
   guessNumber= Math.floor(Math.random()*10)
   hitelem.textContent=guessNumber;
}

function checkTimer(){
    if(timer==0){
        btmpnl.innerHTML='<h1 id="center" >Game Over</h1>'
    }
}

btmpnl.addEventListener('click',function(details){
    var clickedBblValue=details.target.textContent;
    if(clickedBblValue==guessNumber){
        score=score+10;
        console.log(score)
        scoreelem.textContent=score;
        getNewGuess();
        btmpnl.innerHTML=""
        makeBubbles();
    }
    else{
        btmpnl.innerHTML='<h1 id="center" >Game Over</h1>'
    }
    

})

getNewGuess();
makeBubbles();
