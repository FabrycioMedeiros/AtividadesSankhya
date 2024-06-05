const readline = require('readline');

// Funções Básicas
const soma = (a, b) => a + b;
const quadrado = n => n * n;
const verificarMaioridade = idade => idade >= 18 ? "Maior de Idade" : "Menor de Idade";
const calcularAreaRetangulo = (largura, altura) => largura * altura;
const converterParaMaiusculas = str => str.toUpperCase();

// Funções Intermediárias
const filtrarNumerosPares = arr => arr.filter(num => num % 2 === 0);
const calcularMedia = arr => arr.reduce((acc, num) => acc + num, 0) / arr.length;
const verificarPalindromo = str => str === str.split('').reverse().join('');
const dobrarValores = arr => arr.map(num => num * 2);
const calcularFatorial = n => n <= 1 ? 1 : n * calcularFatorial(n - 1);

// Funções Avançadas
const matrizTransposta = matriz => matriz[0].map((_, colIndex) => matriz.map(row => row[colIndex]));
const removerDuplicatas = arr => [...new Set(arr)];
const mesclarArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
const contarOcorrencias = str => str.split('').reduce((acc, char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1;
    return acc;
}, {});
const comporFuncoes = (f, g) => x => f(g(x));

// Funções Adicionais
const filtrarStringsPorComprimento = (arr, len) => arr.filter(str => str.length > len);
const removerElementosFalsos = arr => arr.filter(Boolean);
const encontrarMaximoEmArray = arr => Math.max(...arr);
const concatenarArrays = (...arrays) => arrays.flat();
const somarValoresEmObjeto = arr => arr.reduce((acc, obj) => acc + obj.valor, 0);
const inverterString = str => str.split('').reverse().join('');
const filtrarValoresUnicos = arr => [...new Set(arr)];
const contarPalavrasEmString = str => str.trim().split(/\s+/).length;
const calcularProdutoDeArray = arr => arr.reduce((acc, num) => acc * num, 1);
const combinarPropriedadesDeObjetos = (obj1, obj2) => ({ ...obj1, ...obj2 });
const converterArrayParaObjeto = arr => Object.fromEntries(arr);
const obterChavesDeObjeto = obj => Object.keys(obj);
const obterValoresDeObjeto = obj => Object.values(obj);
const filtrarNumerosImpares = arr => arr.filter(num => num % 2 !== 0);
const agruparElementosPorPropriedade = (arr, prop) => arr.reduce((acc, obj) => {
    const key = obj[prop];
    if (!acc[key]) acc[key] = [];
    acc[key].push(obj);
    return acc;
}, {});

// Menu de Opções
function menu() {
    console.log('Escolha uma função:');
    console.log('1. Soma de Dois Números');
    console.log('2. Quadrado de um Número');
    console.log('3. Verificar Maioridade');
    console.log('4. Calcular Área do Retângulo');
    console.log('5. Convertendo para Maiúsculas');
    console.log('6. Filtrar Números Pares');
    console.log('7. Calcular Média');
    console.log('8. Verificar Palíndromo');
    console.log('9. Dobrar Valores');
    console.log('10. Calcular Fatorial');
    console.log('11. Matriz Transposta');
    console.log('12. Remover Duplicatas');
    console.log('13. Mesclar Arrays');
    console.log('14. Contar Ocorrências');
    console.log('15. Compor Funções');
    console.log('16. Filtrar Strings por Comprimento');
    console.log('17. Remover Elementos Falsos');
    console.log('18. Encontrar Máximo em Array');
    console.log('19. Concatenar Arrays');
    console.log('20. Somar Valores em Objeto');
    console.log('21. Inverter String');
    console.log('22. Filtrar Valores Únicos');
    console.log('23. Contar Palavras em String');
    console.log('24. Calcular Produto de Array');
    console.log('25. Combinar Propriedades de Objetos');
    console.log('26. Converter Array para Objeto');
    console.log('27. Obter Chaves de Objeto');
    console.log('28. Obter Valores de Objeto');
    console.log('29. Filtrar Números Ímpares');
    console.log('30. Agrupar Elementos por Propriedade');
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
            result = soma(5, 3);
            displayFunction = `soma(5, 3)`;
            break;
        case 2:
            result = quadrado(4);
            displayFunction = `quadrado(4)`;
            break;
        case 3:
            result = verificarMaioridade(20);
            displayFunction = `verificarMaioridade(20)`;
            break;
        case 4:
            result = calcularAreaRetangulo(5, 4);
            displayFunction = `calcularAreaRetangulo(5, 4)`;
            break;
        case 5:
            result = converterParaMaiusculas('javascript');
            displayFunction = `converterParaMaiusculas('javascript')`;
            break;
        case 6:
            result = filtrarNumerosPares([1, 2, 3, 4, 5, 6]);
            displayFunction = `filtrarNumerosPares([1, 2, 3, 4, 5, 6])`;
            break;
        case 7:
            result = calcularMedia([1, 2, 3, 4, 5]);
            displayFunction = `calcularMedia([1, 2, 3, 4, 5])`;
            break;
        case 8:
            result = verificarPalindromo('radar');
            displayFunction = `verificarPalindromo('radar')`;
            break;
        case 9:
            result = dobrarValores([1, 2, 3]);
            displayFunction = `dobrarValores([1, 2, 3])`;
            break;
        case 10:
            result = calcularFatorial(5);
            displayFunction = `calcularFatorial(5)`;
            break;
        case 11:
            result = matrizTransposta([[1, 2], [3, 4]]);
            displayFunction = `matrizTransposta([[1, 2], [3, 4]])`;
            break;
        case 12:
            result = removerDuplicatas([1, 2, 2, 3, 3, 4]);
            displayFunction = `removerDuplicatas([1, 2, 2, 3, 3, 4])`;
            break;
        case 13:
            result = mesclarArrays([1, 2], [2, 3]);
            displayFunction = `mesclarArrays([1, 2], [2, 3])`;
            break;
        case 14:
            result = contarOcorrencias('javascript');
            displayFunction = `contarOcorrencias('javascript')`;
            break;
        case 15:
            const compFunc = comporFuncoes(x => x * 2, x => x + 3);
            result = compFunc(5);
            displayFunction = `comporFuncoes(x => x * 2, x => x + 3)(5)`;
            break;
        case 16:
            result = filtrarStringsPorComprimento(['javascript', 'js', 'html'], 2);
            displayFunction = `filtrarStringsPorComprimento(['javascript', 'js', 'html'], 2)`;
            break;
        case 17:
            result = removerElementosFalsos([1, false, '', null, 0, 2]);
            displayFunction = `removerElementosFalsos([1, false, '', null, 0, 2])`;
            break;
        case 18:
            result = encontrarMaximoEmArray([1, 5, 3, 9, 2]);
            displayFunction = `encontrarMaximoEmArray([1, 5, 3, 9, 2])`;
            break;
        case 19:
            result = concatenarArrays([1, 2], [3, 4], [5, 6]);
            displayFunction = `concatenarArrays([1, 2], [3, 4], [5, 6])`;
            break;
        case 20:
            result = somarValoresEmObjeto([{ valor: 1 }, { valor: 2 }, { valor: 3 }]);
            displayFunction = `somarValoresEmObjeto([{ valor: 1 }, { valor: 2 }, { valor: 3 }])`;
            break;
        case 21:
            result = inverterString('javascript');
            displayFunction = `inverterString('javascript')`;
            break;
        case 22:
            result = filtrarValoresUnicos([1, 2, 2, 3, 4, 4]);
            displayFunction = `filtrarValoresUnicos([1, 2, 2, 3, 4, 4])`;
            break;
        case 23:
            result = contarPalavrasEmString('JavaScript é uma linguagem poderosa');
            displayFunction = `contarPalavrasEmString('JavaScript é uma linguagem poderosa')`;
            break;
        case 24:
            result = calcularProdutoDeArray([1, 2, 3, 4]);
            displayFunction = `calcularProdutoDeArray([1, 2, 3, 4])`;
            break;
        case 25:
            result = combinarPropriedadesDeObjetos({ a: 1, b: 2 }, { b: 3, c: 4 });
            displayFunction = `combinarPropriedadesDeObjetos({ a: 1, b: 2 }, { b: 3, c: 4 })`;
            break;
        case 26:
            result = converterArrayParaObjeto([['a', 1], ['b', 2]]);
            displayFunction = `converterArrayParaObjeto([['a', 1], ['b', 2]])`;
            break;
        case 27:
            result = obterChavesDeObjeto({ a: 1, b: 2 });
            displayFunction = `obterChavesDeObjeto({ a: 1, b: 2 })`;
            break;
        case 28:
            result = obterValoresDeObjeto({ a: 1, b: 2 });
            displayFunction = `obterValoresDeObjeto({ a: 1, b: 2 })`;
            break;
        case 29:
            result = filtrarNumerosImpares([1, 2, 3, 4, 5, 6]);
            displayFunction = `filtrarNumerosImpares([1, 2, 3, 4, 5, 6])`;
            break;
        case 30:
            result = agruparElementosPorPropriedade([{ tipo: 'fruta', nome: 'maçã' }, { tipo: 'fruta', nome: 'banana' }, { tipo: 'vegetal', nome: 'cenoura' }], 'tipo');
            displayFunction = `agruparElementosPorPropriedade([{ tipo: 'fruta', nome: 'maçã' }, { tipo: 'fruta', nome: 'banana' }, { tipo: 'vegetal', nome: 'cenoura' }], 'tipo')`;
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
