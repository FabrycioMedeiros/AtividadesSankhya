const readlineSync = require('readline-sync');

function ehPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function numerosPrimos() {
    const numero = parseInt(readlineSync.question('Digite um número inteiro positivo: '));

    if (ehPrimo(numero)) {
        console.log(`${numero} é um número primo.`);
    } else {
        console.log(`${numero} não é um número primo.`);
    }
}

numerosPrimos();
