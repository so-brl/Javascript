console.log(`${cities.length} communes chargées`);

console.log('----------------Exercice 1.1----------------');
/*Affichez dans la console
*le nom et la population des communes de plus de 300 000 habitants,
*sous la forme: "nom (population)".
*/
let maxPop1 = (value) => {
    for (city of cities) {
        if (city.population > value) {
            console.log(`la ville de ${city.nom} a une population de ${city.population} habitants`);
        }
    }
};
maxPop1(300000);

console.log('----------------Exercice 1.2----------------');
/*Affichez les dans l'ordre décroissant.
*Affichez les dans l'ordre décroissant.
*/
let maxPop2 = (value) => {
    let biggerTown = [];
    for (city of cities) {
        if (city.population > value) {
            //console.log(`la ville de ${city.nom} a une population de ${city.population} habitants`);
            biggerTown.push(city);
        }
    }
    return biggerTown.sort(function (a, b) {
        return b.population - a.population;
    });
};
console.log(maxPop2(300000));

console.log('---------------Exercice 2.1-----------------');
/*Trouvez des informations sur les fonctions
*Array.filter et Array.forEach
*et refaire l'exercice en utilisant ces fonctions
*/
cities
    .filter(city => city.population > 300000)
    .sort(function (a, b) {
        return b.population - a.population
    })
    .forEach(city =>
        console.log(`la ville de ${city.nom} a une population de ${city.population} habitants`));

console.log('----------------Exercice 2.1----------------');
/*Trouvez des informations sur les fonctions
*Array.filter et Array.forEach
*et refaire l'exercice en utilisant ces fonctions
*/
cities
    .filter(city => city.population > 300000)
    .sort(function (a, b) {
        return b.population - a.population
    })
    .forEach(city =>
        console.log(`la ville de ${city.nom} a une population de ${city.population} habitants`));

console.log('----------------Exercice 2.2----------------');

/*Écrivez une fonction getCitiesByDept qui prend
*en paramètre un code de département et retourne
*un tableau avec uniquement les communes de ce département
*/
function getCitiesByDept(departement) {
    return cities
        .filter(city => city.codeDepartement === departement)
}

getCitiesByDept("74")
    .forEach(element => console.log(`${element.nom} est une ville du ${element.codeDepartement}`));

console.log('----------------Exercice 2.3----------------');

/*Extraire la partie qui formate les données pour l'affichage
*/
function displayCity(city) {
    return ` ${city.codeDepartement} - ${city.nom} `
}

getCitiesByDept("74")
    .forEach(city => console.log(displayCity(city))
    );

console.log('----------------Exercice 3.1----------------');
/*En utilisant les fonctions getCitiesByDept, Array.map et afficheCommune
stockez dans un tableau cities74 le nom des villes de Haute-Savoie
*/
const cities74 = getCitiesByDept("74")
    .map(displayCity);
//Affichez ce tableau dans la console
console.log(cities74);

console.log('----------------Exercice 3.2----------------');

/*Écrivez une fonction getCityByName qui retourne les infos sur une
*ville à partir de son nom
*/
function getCityByName(name) {
    return cities
        .find(city => city.nom === name)
}

//Afficher les infos pour "Annecy"
console.log(getCityByName("Annecy"));

console.log('----------------Exercice 3.3----------------');

/*Pour ne pas oublier l'algo 😉,
*écrire une fonction qui retourne le nombre d'habitants d'un département.
*/
function getPopulationNumber(departement) {
    let populationNumber = 0;
    getCitiesByDept(departement)
        .forEach(element => populationNumber = populationNumber + element.population);
    return populationNumber;
}

console.log(getPopulationNumber("74"));

console.log('----------------Exercice 4.1----------------');
// 1- Copiez/collez ce code dans la console. Est-ce le résultat attendu ?

// // crée en mémoire une structure de données pour stocker un div
// const el = document.createElement('div');
// el.innerHTML =  'Je suis un div';
// // insère le div dans le DOM (cela l'affiche)
// document.body.appendChild(el);

// Je suis une Div, apparaît dans le HTML

function ready(callback) {
    if (document.readyState != 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

// insérer votre code ci-dessous

/* 2- Maintenant copiez/collez ce code dans le ficher script.js
* après le code déjà présent. Est-ce le résultat attendu ?
*/

// // crée en mémoire une structure de données pour stocker un div
// const el = document.createElement('div');
// el.innerHTML =  'Je suis un div';
// // insère le div dans le DOM (cela l'affiche)
// document.body.appendChild(el);

/* Retourne une erreur : TypeError: document.body is null
*Car le script est dans le header et donc le fichier script est
*lu avant que la page HTML se construise.
*/

/* 3- La fonction ready du fichier script.js prend en paramètre une
* fonction qui sera appelée quand le navigateur sera prêt.
* Déplacez le code ci-dessus dans une fonction appelée main et utilisez ready
* pour que cette fonction soit appelée.
*/
// function main() {
//   const el = document.createElement('div');
//   el.innerHTML =  'Je suis un div';
// // insère le div dans le DOM (cela l'affiche)
//   document.body.appendChild(el);
// }
//
// ready(main);

//4- Expliquez pourquoi certains cas fonctionnent et pas d'autres.

/*Cas du 1
* Fonctionne car on colle la fonction dans la console une fois que tous est chargé
*/
/*Cas du 2
* Ne fonctionne pas car le script est dans le header et donc le fichier script est
*lu avant que la page HTML se construise.
*/
/*Cas du 3
* Fonctionne car la fonction ready permet d'attendre que la page HTML soit chargé avant d'appeler Main.
* Dans ce car Main peut trouver les div et donc fonctionner.
*/

console.log('----------------Exercice 4.2----------------');
//Affichez dans la page HTML la liste des villes du 74 sous forme de div

// function main() {
//   const el = document.createElement('div');
//   el.innerHTML =  cities74 ;
// // insère le div dans le DOM (cela l'affiche)
//   document.body.appendChild(el);
// }

//ready(main);

console.log('----------------Exercice 4.3----------------');
//Modifiez l'exercice précédent pour afficher un select et ses options
// avec ces mêmes villes.

// function main() {
//     const select = document.createElement('select');
//     cities74.forEach(city => {
//             const option = document.createElement('option');
//             option.innerHTML = city;
//             select.appendChild(option);
//         }
//     );
//     // for (let i = 0; i < cities74.length; i++) {
//     //     const option = document.createElement('option');
//     //     option.innerHTML = cities74[i];
//     //     select.appendChild(option);
//     //}
//     document.body.appendChild(select);
// }
//
// ready(main);

console.log('----------------Exercice 4.4----------------');
/* 1- Modifiez votre code, pour faire une fonction qui va
 * générer un select à partir d'une liste d'objets de la forme {label, value}.
 */

function main() {
  const select = document.createElement('select');
  cities74.forEach(city => {
        const option = document.createElement('option');
        option.innerHTML = city;
        select.appendChild(option);
      }
  );
  // for (let i = 0; i < cities74.length; i++) {
  //     const option = document.createElement('option');
  //     option.innerHTML = cities74[i];
  //     select.appendChild(option);
  //}
  document.body.appendChild(select);
}

ready(main);
