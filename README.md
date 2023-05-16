# Fibonacci sequence

Give a number 'n',find the first 'n' elements of the fibonacci sequence
the first two number are 0 and 1

> fibonacci(2) = [0,1] <br>
> fibonacci(3) = [0,1,1] <br>
> fibonacci(7) = [0,1,1,2,3,5,8]

```js function fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
}
fibonacci(2);
fibonacci(3);
fibonacci(4);
fibonacci(7);
```

Big O = O(n)

---

# Factorial of an integer

> 2 = 2 \* 1 <br>
> 3 = 3 \* 2 \* 1 <br>
> 4 = 4 \* 3 \* 2 \* 1 <br>

```js
function factorial(num) {
let result = 1;
for (let i = 2; i <= num; i++) {
result = result \* i;
}
console.log(factorial(4););
}
```

Big O = O(n)

---

## Given a natural number 'n' determine if the number is prime or not

> prime number is a natural number greater than 1 that is not product of two smaller number <br>
> isPrime(5) = true(1*5 or 5*1) <br>
> isPrime(4) = false(1*4 or 2*2 or 4\*1)

```js function isPrimeNumber(n) {
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
// console.log(isPrimeNumber(5));
// console.log(isPrimeNumber(15));
// console.log(isPrimeNumber(23));
```

big O = o(n) <br>

or

```js
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
// console.log(isPrimeNumberWithSqrt(5));
// console.log(isPrimeNumberWithSqrt(15));
// console.log(isPrimeNumberWithSqrt(23));
```

Big-O = O(srt(n))

---

## Power of two

> Given a +ve integer 'n' determine if the number is a power of 2 or not <br>
> An integer is a power of two if there exist an integer x such that n===2 <br>
> isPowerOTwo(1) = true (2⁰) <br>
> isPowerOTwo(1) = true (2¹) <br>
> isPowerOTwo(5) = false <br>

```js
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

// console.log(isPowerOTwo(2));
// console.log(isPowerOTwo(8));
// console.log(isPowerOTwo(9));
```

Input size reduce half therefore O(logn)
