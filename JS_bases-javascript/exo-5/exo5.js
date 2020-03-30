// you can write js here

console.log('exo-5');

let input = 'Aurpentine and turtles' ; //Phrase à traduire en paler Baleine (spécial KacDédi à Dorine)

const  vowels = ['a', 'e', 'i', 'o', 'u', 'y']; //Tableau des voyelles de l'alphabet

let resultArray = [] ; // stocker la phrase traduite

for ( i = 0 ; i <input.length ; i++) { // trouver toutes les voyelles dans notre chaine initiale
    console.log(`la lettre à l'indice ${i} et ${input[i]}`);
    if (vowels.indexOf(input[i].toLowerCase()) >= 0 ){
        resultArray.push(input[i]); // stocker les voyelle dans le tableauresultArray
        console.log(`et c'est une voyelle`);
        console.log(resultArray);
    }
}

console.log((resultArray.join('')).toUpperCase());