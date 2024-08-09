let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSc = document.querySelector("#user-score");
const compSc = document.querySelector("#comp-score");


const drawGame =()=>{
    console.log("The game was draw!");
    msg.innerText = "The game was draw!";
    msg.style.backgroundColor = "#ffc300" ;
    msg.style.color = "#540b0e" ;
};

const ShowWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userSc.innerText = userScore ;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#a7c957";
        msg.style.color = "#606c38";
    }
    else{
        compScore++;
        compSc.innerText = compScore ;
        console.log("Uh-oh! Computer Wins!");
        msg.innerText =`You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#d00000";
        msg.style.color = "#edf5fc"
    }

};

const generateCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    //rock ,paper , scissors
    let compIdx = Math.floor(Math.random()*3);
    return options[compIdx];
};

const playGame = (userChoice)=>{
    console.log("User choice = ",userChoice);
    //generate computer choice
    const compChoice = generateCompChoice();
    console.log("computer choice = ",compChoice);
    if (userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true ;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }
        else if (userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true ;
        }
        ShowWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
});