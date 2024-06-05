function criarSaudacao(saudacao) {
    return function(nome) {
        console.log(`${saudacao}, ${nome}!`);
    };
}

const saudacaoOla = criarSaudacao('Olá');
saudacaoOla('Fabrycio');
