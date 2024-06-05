function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vogais.includes(char)) count++;
    }
    return count;
}

console.log(contarVogais('Começou o São João!!!'));
