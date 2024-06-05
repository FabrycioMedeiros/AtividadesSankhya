const readlineSync = require('readline-sync');

function mediaPonderada() {
    let totalPonderado = 0;
    let somaDosPesos = 0;

    while (true) {
        let nota = readlineSync.question('Digite a nota (ou "sair" para terminar): ');

        if (nota.toLowerCase() === 'sair') {
            break;
        }

        let peso = parseFloat(readlineSync.question('Digite o peso dessa nota: '));
        totalPonderado += parseFloat(nota) * peso;
        somaDosPesos += peso;
    }

    if (somaDosPesos === 0) {
        console.log('Nenhuma nota foi inserida.');
    } else {
        const media = totalPonderado / somaDosPesos;
        console.log(`A média ponderada das notas é: ${media.toFixed(2)}`);
    }
}

mediaPonderada();
