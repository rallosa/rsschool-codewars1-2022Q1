/**
 * 2022.04.22
 * 
 * 7 kyu https://www.codewars.com/kata/unlucky-days 
 * 
 Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
 *  */

// Моєї рішення
function unluckyDays_1(year) {
    let count = 0;
    for (month = 0; month < 12; month++) {
        let date = new Date(year, month, 13);
        if (date.getDay() == 5) count ++;
    }
    return count;
}

unluckyDays = year => Array.from({length: 12}, (_, month) => new Date(year, month, 13)).filter( date => date.getDay() == 5).length;




// Правильні варіанти:
function unluckyDays__1(year) {
    return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
}

// Тести
console.log(unluckyDays(1586), 1, "should be: 1");
console.log(unluckyDays(1001), 3, "should be: 3");
console.log(unluckyDays(2819), 2, "should be: 2");
console.log(unluckyDays(2792), 2, "should be: 2");
console.log(unluckyDays(2723), 2, "should be: 2");
console.log(unluckyDays(1909), 1, "should be: 1");
console.log(unluckyDays(1812), 2, "should be: 2");
console.log(unluckyDays(1618), 2, "should be: 2");
console.log(unluckyDays(2132), 1, "should be: 1");
console.log(unluckyDays(2065), 3, "should be: 3");


