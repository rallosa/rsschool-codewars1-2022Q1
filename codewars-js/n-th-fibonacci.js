/**
 * 2022.04.17
 * 
 * 6 kyu https://www.codewars.com/kata/n-th-fibonacci
 * 
 
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

 *  */

// Моєї рішення
function nthFibo(n) {
    // Return the n-th number in the Fibonacci Sequence
    let fibonachii = [0, 1];
    while (fibonachii.length < n) {
        fibonachii.push(fibonachii[fibonachii.length - 1] + fibonachii[fibonachii.length - 2]   );
    }
    //console.log(fibonachii);
    return fibonachii[n-1];
}



// Правильні варіанти:
function nthFibo_1(n) {
    let [prev, curr] = [0, 1];
    for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
    return prev;
}

function nthFibo(n) {
    return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
}

const nthFibo = n =>
  Math.round(((1 + 5 ** .5) / 2) ** --n / 5 ** .5);

function nthFibo(n) {
    return Math.round((1/Math.sqrt(5))*Math.pow((1+Math.sqrt(5))/2,n-1))
} 

// Тести
console.log(nthFibo(1), ' ', 0, " => 1-st Fibo");
console.log(nthFibo(2), ' ', 1, " => 2-nd Fibo");
console.log(nthFibo(3), ' ', 1, " => 3-rd Fibo");
console.log(nthFibo(4), ' ', 2, " => 4-th Fibo");
console.log(nthFibo(5), ' ', 3, " => 5-th Fibo");
console.log(nthFibo(6), ' ', 4, " => 6-th Fibo");
console.log(nthFibo(7), ' ', 5, " => 7-th Fibo");
console.log(nthFibo(8), ' ', 6, " => 8-th Fibo");


