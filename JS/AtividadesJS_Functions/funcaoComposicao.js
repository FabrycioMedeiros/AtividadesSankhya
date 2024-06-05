function compor(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const adicionar1 = x => x + 1;
const dobrar = x => x * 2;

const adicionarEDobrar = compor(dobrar, adicionar1);
console.log(adicionarEDobrar(3));
