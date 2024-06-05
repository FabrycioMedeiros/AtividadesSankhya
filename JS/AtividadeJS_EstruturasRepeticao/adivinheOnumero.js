const readlineSync = require('readline-sync');

function adivinheONumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let chute = 0;

    console.log("Adivinhe o número entre 1 e 100:");

    while (chute !== numeroSecreto) {
        chute = parseInt(readlineSync.question('Digite seu palpite: '));

        if (chute < numeroSecreto) {
            console.log("O número secreto é maior.");
        } else if (chute > numeroSecreto) {
            console.log("O número secreto é menor.");
        } else {
            console.log("Parabéns! Você adivinhou o número!");
        }
    }
}

adivinheONumero();
