var bframe = document.querySelector("#bframe");
var timer = document.querySelector("#timer");
var score = document.querySelector("#score");
var hitval = document.querySelector("#hitval");
var timerNum = 60;
var hitrn;
var setScore = 0;


function makeBubble(){
var culter = "";
for(let i = 1; i<120; i++){
    var rn = Math.floor(Math.random()*10);
    culter +=`<div class="bubble">${rn}</div>`
}
bframe. innerHTML = culter;
}

function runTimer(){
        set = setInterval(function(){
            if(timerNum > 0){
            timerNum--;
            timer.textContent = timerNum;
            }
           else{
            clearInterval(set);
            bframe.innerHTML = "<h1>game over</h1>"
            hitval.textContent = "0";
            setScore
           }
        },1000)
}

function scoreInt(){
        setScore += 10;
        score.textContent = setScore;
}

function hitelem(){
    hitrn  = Math.floor(Math.random()*10);
    hitval.textContent = hitrn;
}

bframe.addEventListener("click", function(event){
    if(hitrn === Number(event.target.textContent)){
        scoreInt();
        makeBubble();
        hitelem()
    }
    else{

    }
})

runTimer();
makeBubble();
hitelem()
