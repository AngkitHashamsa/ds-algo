# DSA

-   [Fibonacci sequence](#fibonacci-sequence)
-   [Factorial of an integer](#factorial-of-an-integer)
-   [Determine if the number is prime or not](#given-a-natural-number-n-determine-if-the-number-is-prime-or-not)
-   [Recursive Fibonacci sequence](#recursive-fibonacci-sequence)
-   [Recursive factorial of a number](#recursive-factorial-of-a-number)

-   [Linear Search](#linear-search)
-   [Binary search](#binary-search)

---

## Time complexity

![](images/TIme-complexity.png)

BIG-O Guide

Calculation not dependent on input size - O(1)

1 loop - O(n) <br>
2 nested loops - (n<sup>2</sup>)
Input size reduce by half - O(logn)

---

# Fibonacci sequence

Give a number 'n',find the first 'n' elements of the fibonacci sequence
the first two number are 0 and 1

> fibonacci(2) = [0,1] <br>
> fibonacci(3) = [0,1,1] <br>
> fibonacci(7) = [0,1,1,2,3,5,8]

```js
function fibonacci(num) {
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

Big O = O(n) <br>

[go-top](#dsa)

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

Big O = O(n) <br>
[go-top](#dsa)

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

Big-O = O(srt(n)) <br>
[go-top](#dsa)

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

[go-top](#dsa)

---

# Recursive Fibonacci sequence

The Fibonacci is sequence in which each number is the sum of the two preceding

if F represents a function to calculate the fibonacci number,then

> F<sub>n</sub> = F<sub>n - 1</sub> + F <sub>n - 2</sub> <br>
> F<sub>0</sub> = 0 and F<sub>1</sub> = 1 <br>
> F<sub>2</sub> = F<sub>1</sub> + F<sub>0</sub> <br>
> F<sub>2</sub> = 1 + 0

```js
function recursiveFibonacci(n) {
    if (n < 2) return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(2)); // 1
console.log(recursiveFibonacci(6)); // 8
```

![](images/recursive.png)

Big O = 2<sup>n</sup>

[go-top](#dsa)

---

# Recursive factorial of a number

**Problem** - Given an integer 'n', find the factorial of the integer

The factorial of a non-integer 'n', denoted n! , is the product of all positive integers less than or equal to 'n'.

factorial of zero is 1 <br>
factorial of 1 is 1

> 2 = 2 \* 1 <br>
> 3 = 3 \* 2 \* 1 <br>
> 4 = 4 \* 3 \* 2 \* 1 <br>
> n! = n × (n - 1)! x ....... x 1

```js
function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(2)); // 2
console.log(recursiveFactorial(3)); // 4
```

Big O = linear time complexity o(n)

[go-top](#dsa)

---

# Linear Search

**_Problem_** - Given an array of 'n' elements and target element 't', find the index of 't' in the array. Return -1 if the target is not found

> arr = [-5,2,10,4,6] , t= 10 -> should return 2

```js
function linearSearch(arr, t) {
    for (let i = 0; i < arr.length; i++) {
        if (t === arr[i]) {
            return i;
        }
    }

    return -1;
}
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); //4
console.log(linearSearch([-5, 2, 10, 4, 6], 12)); //-1
```

Big O = linear time complexity O(n)

[go-top](#dsa)

---

# Binary search

**_Problem_** - Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target is not found.

Note: Binary search only works on sorted array

> arr = [-5,2,4,6,10], t=10 ->Should return 4
> arr = [-5,2,4,6,10], t=6 ->Should return 3

### Binary search pseudocode

> [-5] [2] [4] [6] [10] | target = [6]

-   If the array is empty return -1 as the element cannot be found.
-   If the array has elements, find the middle elements in the array. If target is equal to middle element, return the middle element index.
-   If the target is less than the middle element ,binary search the left
-   If the target is greater than middle element binary search right half of the array

```js
function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (target === arr[middleIndex]) return middleIndex;

        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
}

console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //3
```

Big O = O(logn)

[go-top](#dsa)

---
