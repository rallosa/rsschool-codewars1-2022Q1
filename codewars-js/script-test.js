/**
 * 
 * 2022.04.13
 *  */ 

/*
// Моє РОБОЧЄ рішення
function deepCount(a) {
    let count = 0;
    for (let value of a) {
        if (Array.isArray(value)) count += deepCount(value);
        count++;
    } 
    return count;
}
*/

// Правильне рішення
function deepCount(a) {
    return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
}


let mas;

//mas = [[[[[[[[[]]]]]]]]]; // 8
mas = [1, [7], 2, [3, 4, [5]], [9], 4]; // 12
//mas = [1, [], 2, [7], 5, 4]; // 7
//mas = [1, 2, [3, 4, [5]]]; // 7
//mas = ["x", "y", ["z"]]; // 4
//mas = []; // 0
//mas = [1, 2, 3]; // 3

console.log('MAS:', mas);
console.log('deepCount: ', deepCount(mas) );



// countCurrentArray = a.reduce((total, value) => (Array.isArray(value) ? total + 1 : total)) - 1;