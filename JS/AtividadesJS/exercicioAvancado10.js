// Simulador de empréstimo
let renda = 3000;
let idade = 30;
let historicoCredito = "bom"; // "bom", "ruim"

let elegivel = false;

if (renda >= 2500 && idade >= 18 && idade <= 65 && historicoCredito === "bom") {
    elegivel = true;
}

if (elegivel) {
    console.log("Você é elegível para o empréstimo.");
} else {
    console.log("Você não é elegível para o empréstimo.");
}
