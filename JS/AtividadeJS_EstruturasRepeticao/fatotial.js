const readlineSync = require('readline-sync');

function fatorial() {
    const numero = parseInt(readlineSync.question('Digite um número inteiro não negativo: '));
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}

fatorial();
