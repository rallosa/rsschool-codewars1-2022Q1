/**
 * 2022.04.15
 * 6 kyu https://www.codewars.com/kata/pair-of-gloves
 * 
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)

 */


function numberOfPairs(gloves)
{
    //My hands are freezing
    console.log(gloves);
    let countsOfPairs = gloves.reduce(

        function(accumulator, element) {
        accumulator[element] = (accumulator[element] || 0) + 1;
        return accumulator;
        }, {} // {} []
    );
    
    console.log(countsOfPairs);
    countsOfPairs = Object.values(countsOfPairs);    
    console.log(countsOfPairs);
    let countOfPairs = countsOfPairs.reduce((accumulator, element) => accumulator + Math.trunc(element / 2), 0);
    console.log(countOfPairs);  
}

// Tests
let tests = [
    [['red','red'],1],
    [['red','green','blue'],0],
    [['gray', 'black', 'purple', 'purple', 'gray', 'black'], 3],
    [['gray','black','purple','purple','gray','black', 'black'],3],
];

tests.forEach(a => {
    numberOfPairs(a[0]);
});


/* // Правильні рішення:

function numberOfPairs(gloves)
{
  var arr = Array.from(new Set(gloves));
  return arr.reduce((a,b) => a + Math.floor(gloves.join('').match(new RegExp(b, 'g')).length / 2), 0);
}

function numberOfPairs(gloves){
  return [...new Set(gloves)].reduce( (acc,el) => acc + ~~(gloves.filter(x => x === el).length / 2), 0);
}

*/