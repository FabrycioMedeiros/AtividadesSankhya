function memoFatorial() {
    const cache = {};

    return function fatorial(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n <= 1) {
                return 1;
            } else {
                let result = n * fatorial(n - 1);
                cache[n] = result;
                return result;
            }
        }
    }
}

const fatorialMemo = memoFatorial();
console.log(fatorialMemo(5));
