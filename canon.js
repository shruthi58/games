const top1 =document.getElementById("top");
const rotate_div =document.getElementById("rotate");
//const heli =document.getElementById("img");
const root =document.getElementById("root");
const heli=document.getElementById("addpeople");
const middle =document.getElementById("middle");
const helipad =document.getElementById("helipad");
const start =document.getElementById("start");
const down=document.getElementById("description");
const hit=document.getElementById("hit");
const miss=document.getElementById("miss");


var flag=true;
var i=0;
var count=0;
var hit1 =0;
var s=0;
var p=0;
var x=0;
var bullright =0,bullleft =0,bulltop =0,bullbottom =0;
var pepright=0,pepleft=0,peptop=0,pepbottom=0;
var w=0,z=0;
var people1;
start.addEventListener("click",function(event){
     down.style.display="none";
     setInterval(moveheli,150); 
     setInterval(randomNumber,2000);
});

window.addEventListener("keydown",function(event){
   const key = event.key;
   switch (event.key) {
    case "ArrowLeft":      
        leftmove();
        break;
    case "ArrowRight":
        rightmove();
        break;
    case " ":
        randshoot();
        break;
}
});

window.addEventListener("load",function(e){
    heli.style.transform="rotateY(180deg)";  
})

function moveheli(){
    if(flag==true){
       x = heli.offsetLeft;
       console.log(x);
       heli.style.left=(heli.offsetLeft+15)+"px";
       if(heli.offsetLeft > (root.offsetLeft+420)){
           heli.style.transform="rotateY(360deg)";
        flag =false;
       }
    }
     else if(flag==false){
        x = heli.offsetLeft;
        heli.style.left=(heli.offsetLeft-15)+"px";
        if(heli.offsetLeft < (root.offsetLeft-180)){
            heli.style.transform="rotateY(180deg)";
            flag=true;
        }
    }
    
} 

function leftmove(){
        if(i<81){
           i +=4;
           rotate_div.style.transform=`rotate(${i}deg)`;
        }
}

function rightmove(){
        if(i> -81){
            i-=4;
        rotate_div.style.transform=`rotate(${i}deg)`;
    }

}

function randshoot(){
    var shoot =document.createElement("span");
    shoot.setAttribute("class","bullet");
    var bulletWrap = document.createElement("div");
    bulletWrap.setAttribute("class","bullwrap");
    bulletWrap.style.transform=`rotate(${i}deg)`;
  // bulletWrap.style.backgroundColor="red";

    middle.appendChild(bulletWrap);
    var shift =bulletWrap.offsetTop;
    bulletWrap.appendChild(shoot);
    setInterval(function(){
        shift+=30;
        if(shift<450){
        shoot.style.top = `${-shift}px`;
        var shobul =document.getElementsByClassName("bullet");
        for(var h=0;h<shobul.length;h++){
        var bulls =shobul[h].getBoundingClientRect();
        bullleft =bulls.left;
        bullright=bulls.right;
        bulltop=bulls.top;
        bullbottom=bulls.bottom;
        if(x <340 &&((pepleft>= bullleft && bullright <= pepright)&&(pepbottom >= bulltop && peptop<= bullbottom))){
            hit1 += 1;
            hit.textContent="HIT ="+hit1;
            people1.remove();
            shoot.remove();
      }

       if((x>315 && x<360)&&((pepbottom  >= bulltop && peptop  <= bullbottom)||( pepleft>= bullleft && bullright <= pepright))){
        hit1 += 1;
        hit.textContent="HIT ="+hit1;
        people1.remove();
        shoot.remove();
      }
      if(x>360 &&(pepbottom >= bulltop && peptop <= bullbottom)){
      hit1 += 1;
      hit.textContent="HIT ="+hit1;
      people1.remove();
      shoot.remove();
        }
        }
        }
        if(shift >450){
        shoot.remove();
        }
    },150);
    
}



function createPeople(){
    var people = document.createElement("img");
    people.setAttribute("src","para2.jpg");
    people.setAttribute("class","people");
    people1=people;

    var statscreen = document.createElement("div");
    statscreen.setAttribute("class","screen");
    statscreen.style.left=(x+40)+"px";
    //console.log("x is"+ x);
    //statscreen.style.backgroundColor="red";

    helipad.appendChild(statscreen);
    statscreen.appendChild(people);
    setInterval(function(){
        var shift =people.offsetTop+15;
        if(people.offsetTop <360){
         people.style.top = `${shift}px`;
         let peopleClass =document.getElementsByClassName("people");
         for(var k=0;k<peopleClass.length;k++){
        var peeps  =peopleClass[k].getBoundingClientRect();
        pepbottom=peeps.bottom ;
        pepleft=peeps.left ;
        pepright=peeps.right ;
        peptop =peeps.top;
      }
        } 
        if(people.offsetTop >320){
            people.remove();
            statscreen.remove(); 
            count+=1;
            miss.textContent ="MISS ="+count;
        }    
    },150);
    if(count>3){
       alert("Game Over!!");
        window.location.reload();
    }
}
function randomNumber() {   
    createPeople();
}  

