function reduzirArray(array, callback, inicial) {
    let acumulador = inicial;
    for (let item of array) {
        acumulador = callback(acumulador, item);
    }
    return acumulador;
}

const soma = (a, b) => a + b;
console.log(reduzirArray([1, 2, 3, 4, 5], soma, 0));
