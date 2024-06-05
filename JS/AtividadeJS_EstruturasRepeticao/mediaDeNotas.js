const readlineSync = require('readline-sync');

function mediaDeNotas() {
    let total = 0;
    let count = 0;

    while (true) {
        let nota = readlineSync.question('Digite uma nota (ou "sair" para terminar): ');

        if (nota.toLowerCase() === 'sair') {
            break;
        }

        total += parseFloat(nota);
        count++;
    }

    if (count === 0) {
        console.log('Nenhuma nota foi inserida.');
    } else {
        const media = total / count;
        console.log(`A média das notas é: ${media.toFixed(2)}`);
    }
}

mediaDeNotas();
