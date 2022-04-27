/**
 * 2022.04.16
 * 
 * 7 kyu https://www.codewars.com/kata/disemvowel-trolls
 * 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 * 
 */

// Моє рішення
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}


// Правильне рішення
disemvowel = str => str.replace(/[aeiou]/gi,'');
