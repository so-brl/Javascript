// you can write js here

console.log('exo-4');

let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

console.log(secretMessage.length); // connaitre la taille du tableau

console.log(secretMessage.pop()); // enleve le dernier éléments du tableau
console.log(secretMessage); // afficher le tableau avec l élément en moins

console.log(secretMessage.push('to','program')); // ajouter des éléments à la fin du tableau
console.log(secretMessage); // afficher le tableau avec les éléments en plus

let index = secretMessage.indexOf('easily'); //trouver l'index d'une valeur dans un tableau
console.log(secretMessage.splice(index,1,'right')); //remplacer une valeur à un index précis dans un tableau
console.log(secretMessage); // afficher le tableau avec les éléments modifié


console.log(secretMessage.shift());      //supprimer le premier éléments du tableau
console.log(secretMessage); // afficher le tableau avec les éléments modifié

console.log(secretMessage.unshift("Programming"))//ajouter la chaine "Programming" en début de tableau.
console.log(secretMessage); // afficher le tableau avec les éléments modifié

console.log(secretMessage.splice(5,5,'know'));// remplacer les mots 'get', 'right', 'the', 'first', 'time' par 'know'.
console.log(secretMessage); // afficher le tableau avec les éléments modifié

console.log(secretMessage.join(' '));//afficher le message secret à la console.
console.log(secretMessage); // afficher le tableau avec les éléments modifié