let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");                    // cache the dom i.e store elements for future use in new elements to avoid using doc.getElementbyId and icrease performance by storing the reference once and for all


function win(user,computer){
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML=computerScore;
    user = user.fontsize(3).sub();
    computer =computer.fontsize(2).sub();
    result_p.innerHTML= `Player${user} beats Computer${computer}. YOU WIN!`;
     
}

function lose(user,computer){
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML=computerScore;
    user = user.fontsize(3).sub();
    computer =computer.fontsize(3).sub();  
    result_p.innerHTML= `Computer${computer} beats Player${user}.YOU LOSE!`;

}

function draw(user,computer){
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML=computerScore;
    user = user.fontsize(3).sub();
    computer =computer.fontsize(3).sub();
    result_p.innerHTML=` Player${user} draw with Computer${computer}. DRAW!`;

}

function getComputerChoice(){
    const choice =["Rock","Paper","Scissors"];
    const randomNumber =Math.floor(Math.random()*3);
    return choice[randomNumber];
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice,computerChoice);
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            lose(userChoice,computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice,computerChoice);
        
    }  
}

rock_div.addEventListener("click",function(){
    game("Rock");

})

paper_div.addEventListener("click",function(){
    game("Paper");

})

scissors_div.addEventListener("click",function(){
    game("Scissors");

})
