// you can write js here
console.log('exo-3');
let userInput = prompt("Quelle est votre choix ? \n Choisissez entre :  \n - rock \n - paper \n - scissors  "); // variable qui demande son choix a l'utilisateur
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const bomb = 'bomb';
const tied = `Vous êtes à égalité`;
const won = `Vous avez gangé`;
const lost = `Vous avez perdu`;

//Récupérer le choix de l'utilisateur
function getUserChoice(variable) {
    if (variable === rock || variable === paper || variable === scissors || variable === bomb) {
        variable.toLowerCase();
        console.log(`Le choix de l'utilisateur est : ${variable}`);
        return variable;
    }
    let userRetryInput = prompt("Nous n'avons pas compris votre choix. \n Vous devez choisir parmis les réponses suivantes :  \n - rock \n - paper \n - scissors  ");
    getUserChoice(userRetryInput);

}

//Récupérer le choix du programme.
function getComputerChoice() {
    let computerChoice = Math.random(2);
    if (computerChoice === 0) {
        console.log(`Le choix de l'ordinateur est : ${rock}`);
        return rock;
    } else if (computerChoice === 1) {
        console.log(`Le choix de l'ordinateur est : ${paper}`);
        return paper;
    } else {
        console.log(`Le choix de l'ordinateur est : ${scissors}`);
        return scissors;
    }
}

// Comparer les choix //Annoncer le gagnant.
function determineWinner(userChoice, computerChoice) {
    if (userChoice === bomb){
        console.log(`Vous avez gangé`);
        return won;
    } else if (computerChoice === userChoice) {
        console.log(`Vous êtes à égalité`);
        return tied;
    } else if (userChoice === rock) {
        if (computerChoice === scissors) {
            console.log(`Vous avez gangé`);
            return won;
        } else if (computerChoice === paper) {
            console.log(`Vous avez perdu`);
            return lost;
        }
    } else if (userChoice === paper && computerChoice === scissors) {
        console.log(`Vous avez perdu`);
        return lost;
    } else if (userChoice === scissors) {
        if (computerChoice === paper) {
            console.log(`Vous avez gangé`);
            return won;
        }
        if (computerChoice === rock) {
            console.log(`Vous avez perdu`);
            return lost;
        }
    }
}




// commencer le jeux

function playGame() {
    let uChoice = getUserChoice(userInput);
    console.log (uChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    determineWinner(uChoice, computerChoice);

}


//let userChoice = getUserChoice(userInput);
//let computerChoice = getComputerChoice();
playGame();
//determineWinner(userChoice, computerChoice);