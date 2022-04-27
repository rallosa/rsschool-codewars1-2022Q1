/**
 * 2022.04.15
 * 6 kyu https://www.codewars.com/kata/sorting-by-bits
 * 
E.g Given the array [7, 6, 15, 8]

7 has 3 on bits (000...0111)
6 has 2 on bits (000...0011)
15 has 4 on bits (000...1111)
8 has 1 on bit (000...1000)
So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, compare their real values instead.

E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.

Your task is to write the function sortBybit() that takes an array of integers and sort them as described above.

Note: Your function should modify the input rather than creating a new array.

sortByBit([3, 8, 3, 6, 5, 7, 9, 1]) // => [1, 8, 3, 3, 5, 6, 9, 7]

 */

function sortByBit2 (arr) { 
    // your solution here
    arr = arr.sort(function (aEl, bEl) {
        let a = aEl;
        let b = bEl;
        //console.log('a: ', a);
        // let aStr = '';
        let aCountBit = 0;
        do {
            // aStr = a % 2 + aStr;
            if (a % 2 == 1) aCountBit++;
            a = Math.trunc(a / 2);
        } while (a > 0)
        // console.log(aStr);

        // console.log('b: ', b);
        //let bStr = '';
        let bCountBit = 0;
        do {
            // bStr = b % 2 + bStr;
            if (b % 2 == 1) bCountBit++;
            b = Math.trunc(b / 2);
        } while (b > 0)
        // console.log(bStr);  
        
        if (aCountBit == bCountBit) {
            return aEl - bEl;
        } else {
            return aCountBit - bCountBit;
        }
    });
}


function sortByBit(arr) { 
    arr = arr.sort(function (aEl, bEl) {
        let a = aEl;
        let b = bEl;
        let aCountBit = 0;
        do {
            if (a % 2 == 1) aCountBit++;
            a = Math.trunc(a / 2);
        } while (a > 0)

        let bCountBit = 0;
        do {
            if (b % 2 == 1) bCountBit++;
            b = Math.trunc(b / 2);
        } while (b > 0)
        
        if (aCountBit == bCountBit) {
            return aEl - bEl;
        } else {
            return aCountBit - bCountBit;
        }
    });
}

// Basic test

let a = [3, 8, 3, 6, 5, 7, 9, 1];
sortByBit(a);

console.warn('!');
console.log(a); 
console.log([1, 8, 3, 3, 5, 6, 9, 7]);
//Test.assertDeepEquals(a, [1, 8, 3, 3, 5, 6, 9, 7]);

console.warn('!');
let b = [9,4,5,3,5,7,2,56,8,2,6,8,0];
sortByBit(b);
console.log(b); 
console.log([0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);

//Test.assertDeepEquals(b, [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);

