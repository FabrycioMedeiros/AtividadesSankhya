function contarCaracteres(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}

console.log(contarCaracteres('aaabcdaaanadasa', 'a'));
