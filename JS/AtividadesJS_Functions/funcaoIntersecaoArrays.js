function intersecaoArrays(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

console.log(intersecaoArrays([1, 2, 3], [2, 3, 4]));
