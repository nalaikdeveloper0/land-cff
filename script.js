function makebubble() {
    var clutter = "";
    for (var i = 1; i <= 112; i++) {
       var rn= Math.floor(Math.random()*10);
        clutter+=`<div id="bubble">${rn}</div>`
    }
    document.querySelector("#cbtm").innerHTML=clutter;  
}
function runTimer(){
    var timer=60;
    var timerint=setInterval(function(){
        if(timer >0){
            timer--;
        document.querySelector("#timerval").textContent=timer;
        }
    },1000);
    
}
var newhit;
function getnewhit(onclick){
     newhit= Math.floor(Math.random()*10);
    document.querySelector  (".gethit").textContent=newhit;
}

runTimer();
makebubble();