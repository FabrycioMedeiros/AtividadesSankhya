// Validação de triângulo
let l1 = 3;
let l2 = 4;
let l3 = 5;

if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
    if (l1 === l2 && l2 === l3) {
        console.log("O Poligono é um Triângulo equilátero");
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        console.log("O Poligono é um Triângulo isósceles");
    } else {
        console.log("O Poligono é um Triângulo escaleno");
    }
} else {
    console.log("Não é um triângulo");
}
