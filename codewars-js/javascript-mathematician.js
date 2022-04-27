/**
 * 2022.04.21
 * 
 * 7 kyu https://www.codewars.com/kata/javascript-mathematician 
 * 
 You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17



 *  */

// Моєї рішення
function calculate(...args) {
    function calculateInside(...argsInside) {
        return args.reduce( (previousValue, currentValue) => previousValue + currentValue)
            + argsInside.reduce( (previousValue, currentValue) => previousValue + currentValue);
    }
    return calculateInside;
}



// Правильні варіанти:
function calculate_1(...a) {
    return function (...b) {
        return [...a, ...b].reduce((sum, n) => sum + n)
    };
  }

  function calculate_2() {
    var first = 0; 
    for(var i = 0 ; i < arguments.length; i+=1) {
        first += arguments[i];
    }
    return function() {
        var second = 0;
        for(var j = 0 ; j < arguments.length; j +=1) {
        second += arguments[j];
        }
        return first+second;
    }
  }

  const calculate_3 = (...args1) => 
  (...args2) => [...args1, ...args2].reduce((pre, val) => pre + val);

  function calculate_4(...xa) {
    return (...xb) => xa.concat(xb).reduce((a, b) => a + b, 0)
  }


const calculate_4 = (...outer) => (...inner) => outer.concat(inner).reduce((p, c) => p + c);

// Тести

console.log(calculate(1)(1) , 2);
console.log(calculate(1,1)(1) , 3);
console.log(calculate(1,1)(1,-1), 2);
console.log(calculate(2,4)(3,7,1), 17);

