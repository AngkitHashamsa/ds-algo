function fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
}

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result = result * i;
    }
    console.log(result);
}

function isPrimeNumber(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${false} is not a prime number`;
        }
    }

    return true;
}

function isPrimeNumberWithSqrt(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return `${false} is not a prime number`;
        }
    }

    return true;
}

function isPowerOTwo(n) {
    if (n < 1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

function recursiveFibonacci(n) {
    if (n < 2) return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(1));
