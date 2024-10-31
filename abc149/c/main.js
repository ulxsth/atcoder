function Main(input) {
    const x = parseInt(input.split("\n"));
    console.log(getMinPrime(x));
}

function getMinPrime(min) {
    for (let i = min; i <= 1000000; ++i) {
        if (isPrime(i)) return i;
    }

    return -1;
}

function isPrime(n) {
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
