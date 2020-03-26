// you can write js here
console.log('hello from file');

//let kelvin = 294 ;
let kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?"); // variable qui demande la temperature du jour en Kelvin
console.log(kelvin);

const celsius = kelvin - 273; // variable qui convertie les Kelvins en Celsius
console.log(celsius);

const fahrenheit =  Math.floor(celsius * (9/5) + 32 );// vairable qui convertie les  Celsius en fahrenheit
console.log(fahrenheit);

