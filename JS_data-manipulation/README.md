# Manipulation de données/tableaux en JS



> **Objectif pédagogique:**
> Les deux exercices suivants ont pour but de se rappeler comment on parcourt un tableau et de préparer les exercices suivants, qui vont introduire une autre logique pour faire la même chose.


## Exercice 1.1

Affichez dans la console le nom et la population des communes de plus de 300 000 habitants, sous la forme: "nom (population)".


## Exercice 1.2

Affichez les dans l'ordre décroissant.

Voir [Array.sort sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort)



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



>**Objectif pédagogique:**
> Les exercices suivants ont pour but de commencer à générer du HTML coté client.

## Exercice 4.1

La console c'est sympa 5 minutes, mais nous ce que l'on veut c'est envoyer du HTML !

Pour insérer des balises HTML dans la page, nous allons utiliser des fonctions **natives** du navigateur:

```js
// crée en mémoire une structure de données pour stocker un div
const el = document.createElement('div');
el.innerHTML =  'Je suis un div';
// insère le div dans le DOM (cela l'affiche)
document.body.appendChild(el);
```

1. Copiez/collez ce code dans la console. Est-ce le résultat attendu ?
2. Maintenant copiez/collez ce code dans le ficher `script.js` après le code déjà présent. Est-ce le résultat attendu ?
3. La fonction `ready` du fichier `script.js` prend en paramètre une fonction qui sera appelée quand le navigateur sera prêt. Déplacez le code ci-dessus dans une fonction appelée `main` et utilisez `ready` pour que cette fonction soit appelée.
4. Expliquez pourquoi certains cas fonctionnent et pas d'autres.

## Exercice 4.2

Affichez dans la page HTML la liste des villes du 74 sous forme de div

## Exercice 4.3

Modifiez l'exercice précédent pour afficher un `select` et ses `option`s avec ces mêmes villes.

## Exercice 4.4 - bonus

1. Modifiez votre code, pour faire une fonction qui va générer un `select` à partir d'une liste d'objets de la forme `{label, value}`.
2. Utilisez la fonction `Array.map` pour mettre les donnée de l'exercice 4.3 dans ce format (label=nom de la ville, value=code de la ville) puis passez les à votre fonction qui génère un `select`.

## Fin

C'est tout...pour le moment.

Retenez bien qu'en décomposant son code en sous-fonctions simples, on en facilite la lecture et la maintenance.


