/**
 * 2022.04.20
 * 
 * 7 kyu https://www.codewars.com/kata/my-language-skills 
 * 
 You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

 *  */

// Моєї рішення
myLanguages = (results) => Object.entries(results).filter( a => a[1] >= 60).sort( (a, b) =>  b[1] - a[1]).map( a => a[0]);


// Правильні варіанти:
function myLanguages_1(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}

const myLanguages_2 = results => Object.entries(results)
  .filter(([name, points]) => points >= 60)
  .sort(([name1, points1], [name2, points2]) => points2 - points1)
  .map(([name, points]) => name);

const myLanguages_3 = results => 
  Object.entries(results)
        .sort((a,b)=> b[1] - a[1])
        .filter(i=> i[1] >= 60)
        .map(i => i[0])

function myLanguages_4(results) {
    for (var i in results) {
        if (results[i]<60) {
            delete results[i];
        }
    }
    return Object.keys(results).sort(function(a,b) { return results[b]-results[a] } )
}

// Тести
console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"]);
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"]);
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), []);



