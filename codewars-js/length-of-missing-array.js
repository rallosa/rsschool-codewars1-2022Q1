/**
 * 2022.04.15
 * 6 kyu https://www.codewars.com/kata/length-of-missing-array
 * 
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!

You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

 */

function getLengthOfMissingArray1(arrayOfArrays) {
    console.log(arrayOfArrays);
    if (!Array.isArray(arrayOfArrays)) {
        console.log('returnNull:', 0);
        return 0;     
    }
    if (arrayOfArrays.length < 1) {
        console.log('return0:', 0);
        return 0;
    }    

  
    let arrayOfLengths = arrayOfArrays.map(x => ((Array.isArray(x)) ? x.length : 0)).sort((a,b) => a - b);
    console.log(arrayOfLengths);
    
    if (arrayOfLengths[0] == 0) {
        console.log('returnFirst0:', 0);
        return 0;
    }
  
  
    if (arrayOfLengths.length == 2) {
        console.log('return2: ', arrayOfLengths[0] + 1);
        return arrayOfLengths[0] + 1;
    }
    
    for (let i = 0; i < arrayOfLengths.length - 1; i++) {
        console.log('i: ', i, ', [i]: ', arrayOfLengths[i], ', [i]+1: ', arrayOfLengths[i]+ 1, ', [i+1]: ', arrayOfLengths[i+1]);
        if (arrayOfLengths[i] + 1 < arrayOfLengths[i + 1]) {
            console.log('return: ', arrayOfLengths[i] + 1);
            return arrayOfLengths[i] + 1;
        }      
    }
}



function getLengthOfMissingArray2(arrayOfArrays) {
    if (!Array.isArray(arrayOfArrays) || arrayOfArrays.length < 1) return 0;

    let arrayOfLengths = arrayOfArrays.map(x => ((Array.isArray(x)) ? x.length : 0));
    console.log(arrayOfLengths);
    
    if (arrayOfLengths[0] == 0) {
        console.log('returnFirst0:', 0);
        return 0;
    }


    let min = max = arrayOfLengths[0];
    for (let i = 1; i < arrayOfLengths.length; i++) {
        if (min > arrayOfLengths[i]) min = arrayOfLengths[i];
        if (max < arrayOfLengths[i]) max = arrayOfLengths[i];
    }
    console.log('min: ', min, ' max: ', max);

    // !! Не працює
    // let arrayIndexLengths = [];
    // arrayIndexLengths = arrayIndexLengths.fill(false, min, max);
    // arrayIndexLengths.fill(false, min, max);

    let arrayIndexLengths = [];
    for (let i = min; i <= max; i++) {
        arrayIndexLengths[i] = false;
    }
    console.log(arrayIndexLengths);
    for (let i = 0; i < arrayOfLengths.length; i++) {
        arrayIndexLengths[arrayOfLengths[i]] = true;
    }
    console.log(arrayIndexLengths);
    let missingArrayLength = arrayIndexLengths.findIndex(value => value === false);
    console.log(missingArrayLength);
    return missingArrayLength;
}    


function getLengthOfMissingArray(arrayOfArrays) {
    console.log('arrayOfArrays: ', arrayOfArrays);
    if (!Array.isArray(arrayOfArrays) || arrayOfArrays.length < 1) return 0;

    // let boolArray = new Boolean([arrayOfArrays.length]);
    // for (let b in boolArray) b = false;

    boolArray = new Array(arrayOfArrays.length + 1).fill(false);
    console.log(boolArray);

    // for (let ar in arrayOfArrays) {
    //     if (!ar || ar.length < 1)
    //         return 0;
    //     boolArray[ar.length-1] = true;
    // }
    for (let i = 0; i <arrayOfArrays.length; i++) {      
        boolArray[arrayOfArrays[i].length] = true; 
    }   
    console.log(boolArray);

    for (let i = 1; i < boolArray.length; i++) {
        if (!boolArray[i]) {
            console.log(i);
            return i;
        }
    }
    
    return 0;


}

getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]);  // 3
getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ); // 2
getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ); // 2
getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ); // 5
      
getLengthOfMissingArray([]); // 0

getLengthOfMissingArray([
    [ 1, 2, 4, 5 ],
    [1, 3, 4, 5],
    [1, 3]
]); // 0

getLengthOfMissingArray(
    [[0, 2, 4, 1],
    [3, 4, 3, 4, 3],
    [0, 0, 4, 1, 1, 0, 3],
    [4, 4, 1, 1, 0, 2, 4, 1],
    [2, 2, 3, 2, 2, 0],
    [2, 4, 3, 0, 4, 3, 3, 2, 3, 3],
    [1, 2, 2, 4, 2, 1, 2, 0, 4, 1, 1],
    [0, 2, 3, 3, 4, 1, 1, 2, 0, 4, 4, 2]]);


/* 
    // Вірні рішення №1:
function getLengthOfMissingArray(arr) {
  return !arr||(ar=arr.map((x,i)=>x?x.length:0).sort((a,b)=>a-b)).indexOf(0)>-1
         ?0:ar.filter((x,i)=>x!=i+ar[0]).concat([1])[0]-1
}    
*/

/*
    // Вірні рішення №2:
function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)
  
  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }

  return 0
}

*/



    