// you can write js here
console.log('exo-2');



let isInscrit ; // variable de type boolean pour si inscrit
let age; // du type entier pour l' age du coureur
const raceNumber = Math.floor(Math.random() * 1000);

//console.log('Le coureur est il inscrit : ' + isInscrit); //Affiche si inscrit
//console.log('Le coureur a : ' + age + 'ans'); //Affiche l'age du coureur
//console.log('Le numéro du joueur sera : ' + raceNumber); //Affiche si le numéro de dossard


function run(isInscrit, age) {
    if (isInscrit == true && age < 18) {
        console.log('You will race at 9:30 am');
    } else if (isInscrit == true || age > 18) {
        console.log('You will race at 11:00 am, votre numéro de dossard sera : ' + raceNumber);
    }else if (isInscrit == false || age < 18) {
        console.log('You will race at 12:30 pm, votre numéro de dossard sera : ' + raceNumber);
    } else {
        console.log('Go see the registration desk');
    }
}

run(true, 17)
run(true, 22)
run(false, 17)
run(false, 22)


