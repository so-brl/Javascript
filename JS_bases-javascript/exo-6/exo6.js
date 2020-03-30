// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
// var joeInfo = {
//     name: "Joe's house",
//     rooms: 5,
//     garage: false,
//     bathrooms: 1 + 2,
//     cars: ['Clio', 'Van'],
// };

// // afficher le nombre de voitures de Joe
// console.log(joeInfo.cars.length);
// console.log(joeInfo);
// // changer le nombre de salle de bains de Joe : il n'en possède au'une.
// console.log(joeInfo.bathrooms = 1);
// console.log(joeInfo);
//
// // Joe vient d'acquérir un garage changer la structure pour le refléter.
// console.log(joeInfo.garage = true);
// console.log(joeInfo);

let team = {
    _games: [
        {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 2
        }
],
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        }
    ]
};


function addPlayers(firstName,lastName,age) {
    let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    team._players.push(player);
}

function addGames(opponent,teamPoints,opponentPoints) {
    let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
    };
    team._games.push(game);
}


addPlayers('Sonia', 'Brunel', 33);
addPlayers('Aurélie', 'Wonder', 20);
addPlayers('Linda', 'Phi', 43);
console.log(team._players);


addGames('TeamCorona',290,2);
addGames('Simplon',290,2);
addGames('OClock',290,2);
console.log(team._games);

//somme des points de votre équipe sur tous les matchs joués
function sumPoints(valeur) {
    let sumTeam =0;
    for (let i = 0; i< team._games.length ; i++){
        sumTeam=sumTeam+team._games[i][valeur];
    } return sumTeam;
}
console.log (sumPoints(valeur = 'teamPoints'));

//moyenne des points de l'équipe adverse sur tous les matchs
console.log (sumPoints(valeur = 'opponentPoints')/team._games.length);

//fonction qui permet de trouver le joueur le plus agé.
function higherAge() {
    let searchAge =0;
    let nameAge='string';
    for (let i = 0; i< team._players.length ; i++){
        if (team._players[i].age >searchAge){
            searchAge=team._players[i].age;
            nameAge=team._players[i].firstName;
        }
    } return nameAge;
}
console.log (higherAge());

//Trier les joueurs par ordre alphabétique.
function orderByAlphabet() {
    let tableauFirstName = [];
    for (let i = 0; i< team._players.length ; i++){
        tableauFirstName[i] = team._players[i].firstName;
        }return tableauFirstName;
    }

console.log(orderByAlphabet().sort());