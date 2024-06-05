const readlineSync = require('readline-sync');

function paresEImpares() {
    const numero = parseInt(readlineSync.question('Digite um número: '));
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`Entre 1 e ${numero}, há ${pares} números pares e ${impares} números ímpares.`);
}

paresEImpares();
