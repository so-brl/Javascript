console.log(`${cities.length} communes chargées`);

console.log ('----------------Exercice 1.1----------------');
/*Affichez dans la console
*le nom et la population des communes de plus de 300 000 habitants,
*sous la forme: "nom (population)".
*/
let maxPop1 = (value) => {
    for (city of cities) {
        if (city.population > value){
            console.log(`la ville de ${city.nom} a une population de ${city.population} habitants`);
        }
    }
};
maxPop1(300000);

console.log ('----------------Exercice 1.2----------------');
/*Affichez les dans l'ordre décroissant.
*Affichez les dans l'ordre décroissant.
*/
let maxPop2 = (value) => {
    let biggerTown = [];
    for (city of cities) {
        if (city.population >value ){
            //console.log(`la ville de ${city.nom} a une population de ${city.population} habitants`);
            biggerTown.push(city);
        }
    }
    return biggerTown.sort(function (a, b){
        return b.population - a.population;
    });
};
console.log(maxPop2(300000));

console.log ('---------------Exercice 2.1-----------------');
/*Trouvez des informations sur les fonctions
*Array.filter et Array.forEach
*et refaire l'exercice en utilisant ces fonctions
*/
cities
    .filter(city => city.population > 300000)
    .sort(function (a, b) {
        return b.population - a.population })
    .forEach(city =>
        console.log(`la ville de ${city.nom} a une population de ${city.population} habitants`));

console.log ('----------------Exercice 2.1----------------');
/*Trouvez des informations sur les fonctions
*Array.filter et Array.forEach
*et refaire l'exercice en utilisant ces fonctions
*/
cities
    .filter(city => city.population > 300000)
    .sort(function (a, b) {
        return b.population - a.population })
    .forEach(city =>
        console.log(`la ville de ${city.nom} a une population de ${city.population} habitants`));

console.log ('----------------Exercice 2.2----------------');
/*Écrivez une fonction getCitiesByDept qui prend
*en paramètre un code de département et retourne
*un tableau avec uniquement les communes de ce département
*/
function getCitiesByDept(departement) {
    return cities
        .filter(city => city.codeDepartement === departement)
}

getCitiesByDept("74")
    .forEach(element => console.log( `${element.nom} est une ville du ${element.codeDepartement}`));

console.log ('----------------Exercice 2.3----------------');
/*Extraire la partie qui formate les données pour l'affichage
*/
function displayCity(city) {
    return ` ${city.codeDepartement} - ${city.nom} `
}

getCitiesByDept("74")
    .forEach(city => console.log(displayCity(city))
    );

console.log ('----------------Exercice 3.1----------------');
/*En utilisant les fonctions getCitiesByDept, Array.map et afficheCommune
stockez dans un tableau cities74 le nom des villes de Haute-Savoie
*/
let cities74 = getCitiesByDept("74");
//Affichez ce tableau dans la console
cities74.map(city => console.log(displayCity(city)));

console.log ('----------------Exercice 3.2----------------');
/*Écrivez une fonction getCityByName qui retourne les infos sur une
*ville à partir de son nom
*/
 function getCityByName(name) {
    return cities
        .find(city => city.nom === name)
}
//Afficher les infos pour "Annecy"
console.log(getCityByName("Annecy"));

console.log ('----------------Exercice 3.3----------------');
/*Pour ne pas oublier l'algo 😉,
*écrire une fonction qui retourne le nombre d'habitants d'un département.
*/
let populationNumber = 0;
getCitiesByDept("74")
    .forEach(element => populationNumber = populationNumber + element.population);

console.log(populationNumber);



