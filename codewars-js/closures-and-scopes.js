/**
 * 2022.04.21
 * 
 * 6 kyu https://www.codewars.com/kata/closures-and-scopes 
 * 
 We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available

 *  */

// Моєї рішення
function createFunctions(n) {
    var callbacks = Array(n).fill([]);
    return callbacks.map(function(v, i) {
        return function() {
            return i;
        };
    });
}

function createFunctions_1(n) {
    var arr = Array(n).fill([]);
    var callbacks = [];

    return arr.map(function(v, i) {
        return function() {
            return i;
        };
    });
}

function createFunctions_origin(n) {
    var callbacks = [];
  
    for (var i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    return callbacks;
}

// Правильні варіанти:
function createFunctions__1(n) {
    var callbacks = [];
  
    for (let i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
}

function createFunctions__2(n) {
    var callbacks = [];
    
    var factory = function(x){
      return function(){
        return x;
      };
    };
  
    for (var i=0; i<n; i++) {
      callbacks.push(factory(i));
    }
    
    return callbacks;
  }


  let createFunctions__3 = (n) => Array.from(Array(n), (_, i) => () => i); // !!

/*
  // Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.

  console.log(Array.from('foo'));
  // expected output: Array ["f", "o", "o"]
  
  console.log(Array.from([1, 2, 3], x => x + x));
  // expected output: Array [2, 4, 6]
*/

// Тести
var callbacks = createFunctions(5);

for (var i=0; i<callbacks.length; i++) {
    console.log(callbacks[i](), i, 'Function with index ' + i);
}


