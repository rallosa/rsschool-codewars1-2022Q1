/**
 * 2022.04.16
 * 
 * 7 kyu https://www.codewars.com/kata/digits-explosion
 * 
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"
 * 
 *  */

// Моєї рішення

explode = s => s.split('').reduce( (str, num) => str + num.repeat(num), ''); 

explode1 = s => { return s.split('').reduce( (str, num) => str + num.repeat(num), '') }

function explode2(s) {
    return s.split('').reduce( (str, num) => str + num.repeat(num), '');
}

function explode3(s) {
    console.log(s);
    let a = s.split('').reduce( (str, num) => str + num.repeat(num))
    //console.log(a);
    return a;
}

// Правильні варіанти:
const explode11 = s => s.replace(/\d/g, d => d.repeat(d));

explode12=s=>[...s].map(n=>n.repeat(n)).join``;

function explode13(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
}

const explode14 = s => s.replace(/\d/g, val => val.repeat(val));

// Тести
const tests = [
    ["312", "333122"],
    ["102269", "12222666666999999999"],
    ["0", ""],
    ["000", ""],
    ["123", "122333"]
];  

for (test of tests) {
    console.log('test: ', explode(test[0]) , ' => ', test[1]);
}
//tests.forEach(explode);