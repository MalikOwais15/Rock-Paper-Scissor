let msg = document.querySelector("#msg");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let resetBtn = document.querySelector("button");
const choices = document.querySelectorAll(".choice");

let cScore = 1; 
let uScore = 1; 

let reset = () => {
    msg.innerText = "Play your Move";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
    userScore.innerText = 0;
    compScore.innerText = 0;
    uScore = 1;
    cScore = 1;
};

resetBtn.onclick = () => {
    reset();
}

const draw = () => {
    msg.innerText = "Game is drawn. Play Again";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `Congratulations! Your ${userChoice} beats ${compChoice}!`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        msg.style.textTransform = "capitalize";
        userScore.innerText = uScore++;  
    } else {
        msg.innerText = `Sorry, Comp's ${compChoice} beats your ${userChoice}!`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        msg.style.textTransform = "capitalize";
        compScore.innerText = cScore++;
    }
};

const genCompChoice = () => {
    const options =["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor"? false : true;
        } else {
            userWin = compChoice === "rock"? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});