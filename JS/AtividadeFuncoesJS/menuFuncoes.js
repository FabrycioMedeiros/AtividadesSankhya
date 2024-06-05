const readline = require('readline');

// 1. Função de Saudação
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

// 2. Função de Soma
function soma(a, b) {
    return a + b;
}

// 3. Função de Subtração
function subtracao(a, b) {
    return a - b;
}

// 4. Função de Multiplicação
function multiplicacao(a, b) {
    return a * b;
}

// 5. Função de Divisão
function divisao(a, b) {
    if (b === 0) return 'Divisão por zero!';
    return a / b;
}

// 6. Função de Fatorial
function fatorial(n) {
    if (n < 0) return 'Número negativo!';
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 7. Função para Verificar Número Primo
function ePrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 8. Função para Calcular Média
function media(numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

// 9. Função para Inverter String
function inverterString(str) {
    return str.split('').reverse().join('');
}

// 10. Função para Contar Caracteres
function contarCaracteres(str, char) {
    return str.split(char).length - 1;
}

// 11. Função Anônima
const multiplicar = function(a, b) {
    return a * b;
};

// 12. Função de Ordem Superior
function operacao(a, b, func) {
    return func(a, b);
}

// 13. Função de Retorno
function criarSaudacao(saudacao) {
    return function(nome) {
        console.log(`${saudacao}, ${nome}!`);
    };
}

// 14. Função Recursiva
function contagemRegressiva(n) {
    if (n < 0) return;
    console.log(n);
    contagemRegressiva(n - 1);
}

// 15. Função para Calcular Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 16. Função para Converter Celsius para Fahrenheit
function celsiusParaFahrenheit(c) {
    return (c * 9/5) + 32;
}

// 17. Função para Converter Fahrenheit para Celsius
function fahrenheitParaCelsius(f) {
    return (f - 32) * 5/9;
}

// 18. Função para Verificar Paridade
function ePar(n) {
    return n % 2 === 0;
}

// 19. Função para Calcular Quadrado
function quadrado(n) {
    return n * n;
}

// 20. Função para Calcular Raiz Quadrada
function raizQuadrada(n) {
    return Math.sqrt(n);
}

// 21. Função para Contar Vogais
function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    return str.split('').filter(char => vogais.includes(char)).length;
}

// 22. Função para Verificar Palíndromo
function ePalindromo(str) {
    const invertida = str.split('').reverse().join('');
    return str === invertida;
}

// 23. Função para Encontrar o Maior Número em um Array
function maiorNumero(arr) {
    return Math.max(...arr);
}

// 24. Função para Ordenar um Array em Ordem Crescente
function ordenarArray(arr) {
    return arr.sort((a, b) => a - b);
}

// 25. Função para Filtrar Números Pares
function filtrarPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 26. Função para Concatenar Arrays
function concatenarArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// 27. Função de Memoização para Fatorial
function memoFatorial() {
    const cache = {};
    return function fatorial(n) {
        if (n in cache) return cache[n];
        if (n === 0) return 1;
        return cache[n] = n * fatorial(n - 1);
    };
}

// 28. Função para Verificar Substring
function contemSubstring(str1, str2) {
    return str1.includes(str2);
}

// 29. Função de Curry
function currySoma(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// 30. Função para Reduzir um Array
function reduzirArray(arr, func) {
    return arr.reduce(func);
}

// 31. Função para Remover Duplicatas de um Array
function removerDuplicatas(arr) {
    return [...new Set(arr)];
}

// 32. Função de Composição
function compor(f, g) {
    return function(x) {
        return f(g(x));
    };
}

// 33. Função para Mapear um Array
function mapearArray(arr, func) {
    return arr.map(func);
}

// 34. Função de Ordenação Personalizada
function ordenarPersonalizado(arr, func) {
    return arr.sort(func);
}

// 35. Função para Encontrar a Intersecção de Dois Arrays
function intersecaoArrays(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

// Menu de Opções
function menu() {
    console.log('Escolha uma função:');
    console.log('1. Saudação');
    console.log('2. Soma');
    console.log('3. Subtração');
    console.log('4. Multiplicação');
    console.log('5. Divisão');
    console.log('6. Fatorial');
    console.log('7. Verificar Número Primo');
    console.log('8. Calcular Média');
    console.log('9. Inverter String');
    console.log('10. Contar Caracteres');
    console.log('11. Multiplicar (Função Anônima)');
    console.log('12. Operação (Função de Ordem Superior)');
    console.log('13. Criar Saudação (Função de Retorno)');
    console.log('14. Contagem Regressiva (Função Recursiva)');
    console.log('15. Calcular Fibonacci');
    console.log('16. Converter Celsius para Fahrenheit');
    console.log('17. Converter Fahrenheit para Celsius');
    console.log('18. Verificar Paridade');
    console.log('19. Calcular Quadrado');
    console.log('20. Calcular Raiz Quadrada');
    console.log('21. Contar Vogais');
    console.log('22. Verificar Palíndromo');
    console.log('23. Encontrar o Maior Número em um Array');
    console.log('24. Ordenar um Array em Ordem Crescente');
    console.log('25. Filtrar Números Pares');
    console.log('26. Concatenar Arrays');
    console.log('27. Memoização para Fatorial');
    console.log('28. Verificar Substring');
    console.log('29. Curry para Somar');
    console.log('30. Reduzir um Array');
    console.log('31. Remover Duplicatas de um Array');
    console.log('32. Compor Funções');
    console.log('33. Mapear um Array');
    console.log('34. Ordenação Personalizada');
    console.log('35. Encontrar a Intersecção de Dois Arrays');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

menu();
rl.question('Digite o número da função que deseja executar: ', (answer) => {
    const choice = parseInt(answer);
    let result;
    let displayFunction;
    
    switch(choice) {
        case 1:
            result = saudacao('Mundo');
            displayFunction = `saudacao('Mundo')`;
            break;
        case 2:
            result = soma(5, 3);
            displayFunction = `soma(5, 3)`;
            break;
        case 3:
            result = subtracao(10, 5);
            displayFunction = `subtracao(10, 5)`;
            break;
        case 4:
            result = multiplicacao(4, 6);
            displayFunction = `multiplicacao(4, 6)`;
            break;
        case 5:
            result = divisao(20, 4);
            displayFunction = `divisao(20, 4)`;
            break;
        case 6:
            result = fatorial(5);
            displayFunction = `fatorial(5)`;
            break;
        case 7:
            result = ePrimo(7);
            displayFunction = `ePrimo(7)`;
            break;
        case 8:
            result = media([1, 2, 3, 4, 5]);
            displayFunction = `media([1, 2, 3, 4, 5])`;
            break;
        case 9:
            result = inverterString('javascript');
            displayFunction = `inverterString('javascript')`;
            break;
        case 10:
            result = contarCaracteres('javascript', 'a');
            displayFunction = `contarCaracteres('javascript', 'a')`;
            break;
        case 11:
            result = multiplicar(2, 3);
            displayFunction = `multiplicar(2, 3)`;
            break;
        case 12:
            result = operacao(5, 3, soma);
            displayFunction = `operacao(5, 3, soma)`;
            break;
        case 13:
            const saudacaoFunc = criarSaudacao('Olá');
            result = saudacaoFunc('João');
            displayFunction = `criarSaudacao('Olá')('João')`;
            break;
        case 14:
            result = contagemRegressiva(5);
            displayFunction = `contagemRegressiva(5)`;
            break;
        case 15:
            result = fibonacci(10);
            displayFunction = `fibonacci(10)`;
            break;
        case 16:
            result = celsiusParaFahrenheit(30);
            displayFunction = `celsiusParaFahrenheit(30)`;
            break;
        case 17:
            result = fahrenheitParaCelsius(86);
            displayFunction = `fahrenheitParaCelsius(86)`;
            break;
        case 18:
            result = ePar(4);
            displayFunction = `ePar(4)`;
            break;
        case 19:
            result = quadrado(5);
            displayFunction = `quadrado(5)`;
            break;
        case 20:
            result = raizQuadrada(25);
            displayFunction = `raizQuadrada(25)`;
            break;
        case 21:
            result = contarVogais('javascript');
            displayFunction = `contarVogais('javascript')`;
            break;
        case 22:
            result = ePalindromo('radar');
            displayFunction = `ePalindromo('radar')`;
            break;
        case 23:
            result = maiorNumero([1, 2, 3, 4, 5]);
            displayFunction = `maiorNumero([1, 2, 3, 4, 5])`;
            break;
        case 24:
            result = ordenarArray([3, 1, 4, 1, 5, 9]);
            displayFunction = `ordenarArray([3, 1, 4, 1, 5, 9])`;
            break;
        case 25:
            result = filtrarPares([1, 2, 3, 4, 5, 6]);
            displayFunction = `filtrarPares([1, 2, 3, 4, 5, 6])`;
            break;
        case 26:
            result = concatenarArrays([1, 2], [3, 4]);
            displayFunction = `concatenarArrays([1, 2], [3, 4])`;
            break;
        case 27:
            const memoFunc = memoFatorial();
            result = memoFunc(5);
            displayFunction = `memoFatorial()(5)`;
            break;
        case 28:
            result = contemSubstring('javascript', 'script');
            displayFunction = `contemSubstring('javascript', 'script')`;
            break;
        case 29:
            result = currySoma(1)(2)(3);
            displayFunction = `currySoma(1)(2)(3)`;
            break;
        case 30:
            result = reduzirArray([1, 2, 3], (a, b) => a + b);
            displayFunction = `reduzirArray([1, 2, 3], (a, b) => a + b)`;
            break;
        case 31:
            result = removerDuplicatas([1, 2, 2, 3, 3, 4]);
            displayFunction = `removerDuplicatas([1, 2, 2, 3, 3, 4])`;
            break;
        case 32:
            const funcaoComposta = compor(quadrado, ePar);
            result = funcaoComposta(2);
            displayFunction = `compor(quadrado, ePar)(2)`;
            break;
        case 33:
            result = mapearArray([1, 2, 3], quadrado);
            displayFunction = `mapearArray([1, 2, 3], quadrado)`;
            break;
        case 34:
            result = ordenarPersonalizado([{a: 2}, {a: 1}], (x, y) => x.a - y.a);
            displayFunction = `ordenarPersonalizado([{a: 2}, {a: 1}], (x, y) => x.a - y.a)`;
            break;
        case 35:
            result = intersecaoArrays([1, 2, 3], [2, 3, 4]);
            displayFunction = `intersecaoArrays([1, 2, 3], [2, 3, 4])`;
            break;
        default:
            console.log('Opção inválida!');
            rl.close();
            return;
    }
    
    console.log(`Função aplicada: ${displayFunction}`);
    console.log(`Resultado: ${result}`);
    
    rl.close();
});
