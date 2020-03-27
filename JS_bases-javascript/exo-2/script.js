// you can write js here
console.log('exo-2');


let isInscrit; // variable de type boolean pour si inscrit
let age; // du type entier pour l' age du coureur
const raceNumber = Math.floor(Math.random() * 1000);

//console.log('Le coureur est il inscrit : ' + isInscrit); //Affiche si inscrit
//console.log('Le coureur a : ' + age + 'ans'); //Affiche l'age du coureur
//console.log('Le numéro du joueur sera : ' + raceNumber); //Affiche si le numéro de dossard


let runner1 = ['joe',1];
let runner2 = ['lili',2];
let newrunner = ['what',3];
let allRunner = [ [runner1],[runner2] ];


function addInscrit( variable ) {
    for (var i = 0; i < allRunner.length; i++) {
        if (variable[i] == allRunner[i][0]) {
            console.log('Déja inscrit');
        }
    }
}


addInscrit(newrunner)


function run(isInscrit, age) {
    if (isInscrit == true && age < 18) {
        console.log('You will race at 9:30 am');
    } else if (isInscrit == true || age > 18) {
        console.log('You will race at 11:00 am, votre numéro de dossard sera : ' + raceNumber);
    } else if (isInscrit == false || age < 18) {
        console.log('You will race at 12:30 pm, votre numéro de dossard sera : ' + raceNumber);
    } else {
        console.log('Go see the registration desk');
    }
}

run(true, 17)
run(true, 22)
run(false, 17)
run(false, 22)


