function mapearArray(array, callback) {
    const resultado = [];
    for (let item of array) {
        resultado.push(callback(item));
    }
    return resultado;
}

console.log(mapearArray([1, 2, 3], x => x * 2));
