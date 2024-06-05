function currySoma(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(currySoma(1)(2)(3));
