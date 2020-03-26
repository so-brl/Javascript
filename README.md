# Javascript

Ressource : <br>
https://scrimba.com/g/gintrotojavascript 



index.js 
 
 
 Les élément importants dans le langage Javascript : 
 
 <h2>Les Types de Bases</h2>
 
**Déclaration de variable** : 
```
var nomdelavariable = 123;
```
(toujours mettre var quand on déclare une variable pour la premiere fois )<br>
<br>
<hr>

**Concaténation** : <br>
```
"nom1" + "nom2" => nom1nom2
```
si <br>
```
"1" + 1 => 11 (comprend pas l'addition)
"1" * 1  => 1 (comprend la multiplication)
```
<br>
<hr>

**les tableaux** : <br>
```
var tab = [1 , 2 ,'23']; 
```
Récupérer une valeur : <br>
```
tab[0]; 
```
<br>
Stoker des informations plus complexes : 
Pas possible de changer les index du tableau comme en php <br>
Ne permet uniquement de stoker des listes ordonnés <br>
<hr>

**Les objets** : <br>
ce sont des variables qui permettent de stocker des informations particulières <br>
```
var eleve = {
 nom: 'Jean',
 moyenne: 15
}
```
<br>

Pour récupérer une valeur dans l'objet : 
```
eleve.nom<br>
```
ou
```
 eleve[nom] 
```
Rarement utiliser , sauf pour récupérer une info en fonction d'une variable. 
```
var indice = 'nom'; 
eleve[indice]; 
```
 <h2>Les éléments du languages</h2>
 
 **Les conditions:** 
 <br>
 ```
if (condition) {

} else if (condition){

} else{

}
 ```
**la boucle while** : 
<br>
 ```
while (condition){

break (pour sortir de la boucle)
} 
 ```
**la boucle for** : 
<br>
 ```
for ( var i = 0 ; i < 3 ; i++ ) {

break (pour sortir de la boucle)
}
 ```
**le foreach** : cette bouble n'**existe pas en JS**. <br>
Possibilité de la faire différament avec une boucle for  :
<br>
 ```
for ( var i = 0 ; i < tab.lenght ; i++ ) {

break (pour sortir de la boucle)
}
 ```
**Les fonctions** <br>
Methode arement utiliser 
 ```
function demo () {

}
 ```
Fonction anonyme stocké dans une variable :  
```
var demo = function  (a,b) {

}
demo(1,2)

```
 possibilité d'appelé avec un seu paramètre : 
 ```
 var demo = function  (a,b) {
 if (b == undefined) {
    b = 2
}
 }
 demo(1)
 
 ```