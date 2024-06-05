// Idade e categoria
let idade = 20;
let categoria;

if (idade < 13) {
    categoria = "Criança";
} else if (idade >= 13 && idade < 18) {
    categoria = "Adolescente";
} else if (idade >= 18 && idade < 65) {
    categoria = "Adulto";
} else {
    categoria = "Idoso";
}

console.log("Categoria:", categoria);
