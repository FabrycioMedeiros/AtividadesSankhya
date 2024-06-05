function ePalindromo(str) {
    const invertida = str.split('').reverse().join('');
    return str === invertida;
}

console.log(ePalindromo('radar'));
