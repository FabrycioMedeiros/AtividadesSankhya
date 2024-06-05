const readlineSync = require('readline-sync');

function contadorDeDigitos() {
    const numero = readlineSync.question('Digite um número inteiro: ');
    const numeroDeDigitos = numero.length;

    console.log(`O número ${numero} tem ${numeroDeDigitos} dígitos.`);
}

contadorDeDigitos();
