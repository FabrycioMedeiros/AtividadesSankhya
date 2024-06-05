// Jogo de adivinhação
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let chute = parseInt(prompt("Adivinhe o número entre 1 e 100:"));

while (chute !== numeroSecreto) {
    if (chute > numeroSecreto) {
        console.log("O número é menor, continue!");
    } else {
        console.log("O número é maior, continue!");
    }
    chute = parseInt(prompt("Tente novamente, você consegue :D"));
}

console.log("Parabéns! Você adivinhou o número:", numeroSecreto);
