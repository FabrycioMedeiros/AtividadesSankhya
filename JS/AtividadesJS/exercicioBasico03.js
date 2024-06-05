// Calculadora simples
let numero1 = 10;
let numero2 = 5;
let operacao = "multiplicacao"; // "adicao", "subtracao", "multiplicacao", "divisao"

let resultado;
if (operacao === "adicao") {
    resultado = numero1 + numero2;
} else if (operacao === "subtracao") {
    resultado = numero1 - numero2;
} else if (operacao === "multiplicacao") {
    resultado = numero1 * numero2;
} else if (operacao === "divisao") {
    resultado = numero1 / numero2;
} else {
    resultado = "Operação inválida";
}

console.log("Resultado da operação é: ", resultado);
