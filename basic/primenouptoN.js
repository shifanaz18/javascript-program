function primenoUptoN(n) {
    let out = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i))
            out.push(i);

    }
    return out;

}

function isPrime(n) {
    for (let i = 2; i <= (n - 1); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

console.log(primenoUptoN(100));