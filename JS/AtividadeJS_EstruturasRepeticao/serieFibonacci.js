const readlineSync = require('readline-sync');

function fibonacci() {
    const n = parseInt(readlineSync.question('Quantos termos da série Fibonacci você deseja ver? '));
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log(`Os primeiros ${n} termos da série Fibonacci são: ${fib.slice(0, n).join(', ')}`);
}

fibonacci();
