# Manipulation de données/tableaux en JS

>**Objectif pédagogique:**
> Les exercices suivants ont pour but d'apprendre à utiliser les méthodes natives des tableaux en JS.

## Exercice 2.1

Vous avez probablement, dans l'exercice 1, utilisé une boucle `for` pour itérer sur le tableau et un `if` pour parvenir au résultat demandé. Et, afin de trier, copié les données dans un tableau intermédiaire.

Trouvez des informations sur les fonctions `Array.filter` et `Array.forEach` et refaire l'exercice en utilisant ces fonctions.

_En cas de difficulté, commencez par afficher la liste non triée._

[Array.filter sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter)
[Array.forEach sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach)

> **Note:** Ce style de programmation s'appelle la programmation fonctionnelle. Nous n'allons qu'effleurer le sujet, mais cela nous permettra d'écrire du code beaucoup plus court et compréhensible et donc, au final, plus facile à maintenir.


## Exercices 2.2

Il est important, pour la clarté du code, de créer des petites fonctions autonomes qui ne font qu'une chose mais bien.

Nous allons donc commencer par extraire la partie qui parcourt la liste filtrée.

1. Écrivez une fonction `getCitiesByDept` qui prend en *paramètre* un code de département et retourne un tableau avec uniquement les communes de ce département
2. Utilisez cette fonction pour afficher dans la console le nom des villes de Haute-Savoie


## Exercice 2.3

Maintenant nous allons extraire la partie qui formate les données pour l'affichage.

1. Écrivez une fonction `displayCity` qui prend en paramètre les données d'une commune, c'est à dire un élément du tableau `cities` ou `getCitiesByDept`, et retourne sous forme de chaîne de caractères `"xx - nom de la ville"`.
2. En utilisant les fonctions précédentes, affichez la liste de villes de Haute-Savoie dans la console.



## Ensuite...

Faire valider par le formateur.

Copiez-coller les méthodes `getCommungetCitiesByDeptesByDept` et `displayCity`, vous en aurez besoin pour les exercices suivants.

# Manipulation de données/tableaux en JS

>**Objectif pédagogique:**
> Les exercices suivants ont pour but d'apprendre à utiliser les méthodes natives des tableaux en JS.

## Exercice 3.1

La fonction [`Array.map`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map) permet de d'appliquer une fonction sur chaque élément d'un tableau et retourne un tableau de résultats.

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

1. En utilisant les fonctions `getCitiesByDept`, `Array.map` et `afficheCommune` stockez dans un tableau `cities74` le nom des villes de Haute-Savoie
2. Affichez ce tableau dans la console

## Exercice 3.2

Si la fonction `Array.filter` retourne TOUS les éléments pour lesquels la fonction de test (appelée prédicat) renvoie vrai, la fonction [`Array.find`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find) retourne uniquement le premier.

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

1. Écrivez une fonction `getCityByName` qui retourne les infos sur une ville à partir de son nom
2. Afficher les infos pour "Annecy"

## Exercice 3.3 - bonus

Pour ne pas oublier l'algo 😉, écrire une fonction qui retourne le nombre d'habitants d'un département.


## Ensuite

Faire valider par le formateur.

Pour continuer, basculez sur la branche `exo-4`
