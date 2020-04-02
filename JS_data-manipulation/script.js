console.log(`${cities.length} communes chargées`);
//Exercice 2.1
//---------------------------------------------
/*Trouvez des informations sur les fonctions
* Array.filter et Array.forEach
* et refaire l'exercice en utilisant ces fonctions
*/

cities
    .filter(city => city.population > 300000)
    .sort(function (a, b) {
        return b.population - a.population })
    .forEach(city =>
        console.log(`la ville de ${city.nom} a une population de ${city.population} habitants`));

//Exercice 2.2
//---------------------------------------------
/*Écrivez une fonction getCitiesByDept qui prend
* en paramètre un code de département et retourne
* un tableau avec uniquement les communes de ce département
*/
function getCitiesByDept(departement) {
    return cities
        .filter(city => city.codeDepartement === departement)
}

getCitiesByDept("74")
    .forEach(element => console.log( `${element.nom} est une ville du ${element.codeDepartement}`));


//Exercice 2.3
//---------------------------------------------
/*Extraire la partie qui formate les données pour l'affichage

*/

function displayCity(city) {
    return ` ${city.codeDepartement} - ${city.nom} `
}

getCitiesByDept("74")
    .forEach(city => console.log(displayCity(city))
    );
