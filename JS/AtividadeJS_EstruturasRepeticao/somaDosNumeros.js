const readlineSync = require('readline-sync');

function somaDosNumeros() {
    const n = parseInt(readlineSync.question('Digite um número inteiro positivo: '));
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma += i;
    }

    console.log(`A soma dos números de 1 a ${n} é: ${soma}`);
}

somaDosNumeros();
