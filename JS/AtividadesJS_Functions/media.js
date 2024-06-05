function media(numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma / numeros.length;
}

console.log(media([1, 2, 3, 4, 5]));
