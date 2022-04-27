/**
 * 2022.04.16
 * 
 * 6 kyu https://www.codewars.com/kata/duplicate-encoder
 * 
 * The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 *  */

// Моєї рішення
function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .reduce( (cod, s, i, w) => cod += (w.indexOf(s) == w.lastIndexOf(s) ? '(' : ')'),  '' ) 
}


//!/(\w).*\1/i.test(str)

// Правильні варіанти:
function duplicateEncode_1(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }


  function duplicateEncode_2(word) {
    var letters = word.toLowerCase().split('')
    return letters.map(function(c, i) {
      return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
    }).join('')
  }

// Тести
console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");


