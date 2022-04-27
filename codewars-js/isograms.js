/**
 * 
 * 2022.04.16
 * 
 * 7 kyu https://www.codewars.com/kata/isograms
 * 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 * 
 *  */

// Моє рішення
isIsogram = str => {
    let isogramSet = new Set(str.toLowerCase().split(''));
    return isogramSet.size == str.length;
}


// Моє рішення
isIsogram2 = str => {
    console.log('str: ', str);
    let a = str.toLowerCase().split();
    console.log('a: ', a);
    let isogramSet = new Set(str.toLowerCase().split(''));
    console.log('isogramSet: ', isogramSet);
    console.log('isogramSet.size: ', isogramSet.size, ' str.length: ', str.length, ' => ', isogramSet.size == str.length);
    return isogramSet.size == str.length;
}

// Вірне рішення
function isIsogram3(str){ 
  return !/(\w).*\1/i.test(str)
}
/*
\1 посилається на вміст першої групи захоплення , що означає перший набір дужок у вашому регулярному виразі пошуку. У вашому регулярному виразі його немає, тому \1 немає на що посилатися.

Використовуйте \0, якщо ви хочете посилатися на всю відповідність, або додайте дужки навколо відповідної частини регулярного виразу.
*/

function isIsogram4(str){
  return new Set(str.toUpperCase()).size == str.length;
}

isIsogram("Dermatoglyphics"); //, true );
isIsogram("isogram"); //, true );
isIsogram("aba"); //, false, "same chars may not be adjacent" );
isIsogram("moOse"); //, false, "same chars may not be same case" );
isIsogram("isIsogram"); //, false );
isIsogram(""); //, true, "an empty string is a valid isogram" );
