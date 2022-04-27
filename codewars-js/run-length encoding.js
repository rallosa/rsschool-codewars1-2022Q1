/**
 * 2022.04.21
 * 
 * 6 kyu https://www.codewars.com/kata/run-length-encoding 
 * 
 [Run-length encoding](https://en.wikipedia.org/w/index.php?title=Run-length_encoding) (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia

Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

Examples
As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

runLengthEncoding("hello world!")
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
It's very effective if the same data value occurs in many consecutive data elements:

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]
 *  */

// Моєї рішення
function runLengthEncoding(str) {

    console.log(str);

    if (str == '') return [];
    let encoding = [];
    let symbol = str[0];
    let count = 1;
    for (let i = 1; i <= str.length; i++) {
        if (symbol == str[i]) {
            count++;
            continue;
        } else {
            encoding.push([count, symbol]);
            symbol = str[i];
            count = 1;
        }
    }

    return encoding; // << fix this
}



// Правильні варіанти:
var runLengthEncoding__1 = function(str){
    return (str.match(/(.)\1*/g) || []).reduce(function(r, s){
      return r.push([s.length, s[0]]), r;
    }, []);
  }

const runLengthEncoding__2 = str =>
  (str.match(/(.)\1*/g) || []).map(val => [val.length, val[0]]);


  var runLengthEncoding__3 = function(str){
    var encoded = [], lastIndex = 0, l;
      
    for( l in str ) {
      if( encoded[lastIndex] && encoded[lastIndex][1] === str[l] ) {
        encoded[lastIndex][0]++;
      } else { 
        lastIndex = encoded.push([1, str[l]]) - 1;
      }
    }
    
    return encoded;
  }
  
  function runLengthEncoding__4(str) {
    return (str.match(/(.)\1*/g)||[]).map(function(c) {
      return [c.length, c[0]];
    });
  }

  function runLengthEncoding__5(str) {
    var match = str.match(/(.)\1*/g)
    if (!match) return []
    
    return match.map(function(s) {
      return [s.length, s.charAt(0)]
    })
  }

  const runLengthEncoding__6 = str => (str.match(/(.)\1*/g) || []).map(x => [x.length, x[0]]);

// Тести
console.log(runLengthEncoding(""), []);      
console.log(runLengthEncoding("abc"), [[1,'a'],[1,'b'],[1,'c']]);
console.log(runLengthEncoding("aab"), [[2,'a'],[1,'b']]);      
console.log(runLengthEncoding("hello world!"),
  [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"),
  [[34,'a'], [3,'b']]);
console.log(
  runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),
  [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]);


