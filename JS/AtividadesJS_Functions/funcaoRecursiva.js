function contagemRegressiva(n) {
    if (n < 0) return;
    console.log(n);
    contagemRegressiva(n - 1);
}

contagemRegressiva(5);
