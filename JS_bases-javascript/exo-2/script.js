// you can write js here
console.log('exo-2');


let runner1 = {
    inscrit : false,
    age : 12,
    numero : undefined
};
let runner2 = {
    inscrit: true,
    age:19,
    numero:10
};

let runner3 = {
    inscrit: true,
    age:77,
    numero:20
};


function run(runner) {
    if (runner.inscrit === true && runner.age <= 18) {
        console.log(`You will race at 9:30 am et votre dossard est le n° ${runner.numero}`);
    } else if (runner.inscrit === true || runner.age > 18) {
        console.log(`You will race at 11:00 am et votre dossard est le n° ${runner.numero}`);
    } else if (runner.inscrit === false || runner.age < 18) {
        console.log(`You will race at 12:30 pm et votre dossard est le n° ${(Math.floor(Math.random()*1000)+1000)}`);
    } else {
        console.log(`Go see the registration desk`);
    }
}

run(runner2)
run(runner1)
run(runner3)



