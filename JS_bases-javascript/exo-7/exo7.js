console.log("exo-7");

//console.log(jsonDatas);


//Parcourir les items fournis pour les afficher un à un dans la console
// jsonDatas.forEach(function(data) {
//     console.log(data);
// });

// for (let i = 0 ; i < jsonDatas.length ; i++) {
//         console.log(jsonDatas[i]);
// }

// objet qui servira à traduire les types.
let trad={
    car:'Voiture',
    house:'Maison',
    game:'jeux',
    videoGame:'Jeux Vidéos',
    show:'Spectacle'
};
console.log(trad);

//Ajouter une nouvelle clé aux objets existants pour sotcker le type traduit
jsonDatas.forEach(function(data) {
    data.displayType=trad[data.type];
});

jsonDatas.forEach(function(data) {
    console.log(data);
});

//n'affiche que les articles que du type écrit.

function affiche(){
    let inputType = document.getElementById('type').value;
    jsonDatas.forEach(function(data) {
        console.log(data);
    });
}