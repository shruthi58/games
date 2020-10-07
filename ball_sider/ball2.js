const hoverbox =document.getElementById("hoverbox");
const slider =document.getElementById("slider");
const ball =document.getElementById("ball");
const body =document.getElementById("gameinfo");
const button=document.getElementById("button");
const level =document.getElementById("level");
const point =document.getElementById("point");
const timer =document.getElementById("timer");
const reset =document.getElementById("reset");
const moving =document.getElementById("moving");
var x =0;
var up = true;
var level1 =0;
var score1 =0;
var hoverheight=100;
var hoverwidth=150;
var ballsize=40;
var decsize=0;
var initialmargin=moving.offsetLeft;
var speedup;

reset.addEventListener("click",event =>{
    window.location.reload();
});
window.addEventListener("load" , event =>{
    body.style.display="block";  
});
button.addEventListener("click",event=>{
    body.style.display="none";
    var timeleft = 20;
    var time= setInterval(function(){
    timeleft--;
    timer.textContent = "Timer:"+timeleft+"s";
    if(timeleft == 0){
      alert("Game over!");
      clearInterval(time);
      window.location.reload();
    }   
    },1000);
      speedup =setInterval(chbox.bind(null,20),150);

});
function chbox(decsize){
    if(up==true){
         hoverbox.style.left = (hoverbox.offsetLeft + decsize) +"px";
         if(hoverbox.offsetLeft >(document.getElementById("root").offsetLeft+640)){
             up =false;      
         }
     } 
     else if (up ==false){
         hoverbox.style.left = `${hoverbox.offsetLeft - decsize}px`;  
         if(hoverbox.offsetLeft <=document.getElementById("root").offsetLeft+40){
          up =true;
        }
    }
        
}
moving.addEventListener("mousemove",function(e){
    x = e.clientX; 
    x =x-document.getElementById("root").offsetLeft
    slider.style.left = `${x}px`;
    console.log(x);
    if( x>700) 
          slider.style.left = `695px`;
});

moving.addEventListener("click",event=>{
       ball.style.top= `${-300}px`;
       setTimeout(function(){ ball.style.top="0px"},100);   
       collide= distance();
       if(collide){
             level1++;
             score1++;
             level.textContent=`Level : ${level1}`;
             point.textContent=`Score : ${score1}`;  
             nextlevel();
    }
     });
     function nextlevel(){
     hoverheight -= 10;
     hoverwidth -= 10;
     ballsize -= 3;
     if(hoverheight >=10 && hoverwidth>=10){
     hoverbox.style.width = `${hoverwidth}px` ;
     hoverbox.style.height = `${hoverheight}px`;   
     }
     if(hoverbox.offsetWidth <100){
            clearInterval(speedup);
            setInterval(chbox.bind(null,25),100);
     }
     if(ballsize >=5){
     ball.style.height = `${ballsize}px`;
     ball.style.width = `${ballsize}px`;   
     }
  }
function distance(){
    box = hoverbox.getBoundingClientRect();
    shoot = ball.getBoundingClientRect();
     return(box.right >= shoot.left &&
        box.left <= shoot.right); // &&(box.bottom >= shoot.top && box.top <= shoot.bottom);
}                                                                                                                                                                 
