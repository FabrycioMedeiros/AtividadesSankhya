function removerDuplicatas(array) {
    return [...new Set(array)];
}

console.log(removerDuplicatas([1, 2, 2, 3, 4, 4, 5]));
