function ordenarPersonalizado(array, comparar) {
    return array.sort(comparar);
}

const arrayDeObjetos = [{ idade: 30 }, { idade: 20 }, { idade: 40 }];
const compararIdade = (a, b) => a.idade - b.idade;

console.log(ordenarPersonalizado(arrayDeObjetos, compararIdade));
