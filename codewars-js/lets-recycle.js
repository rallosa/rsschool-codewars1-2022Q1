/**
 * 2022.04.21
 * 
 * 6 kyu https://www.codewars.com/kata/lets-recycle 
 * 
 You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
 *  */

// Моєї рішення
function recycle(array) {
    let materials = ['paper', 'glass', 'organic', 'plastic'];
    console.log('materials: ', materials);
    let result = materials.map( () => []);

    for (let i=0; i < array.length; i++) {
        for (j=0; j<materials.length; j++) {
            if (array[i]?.material == materials[j] || array[i]?.secondMaterial == materials[j]) {
                result[j].push(array[i].type);
            }
        }
    }

    return result;
  }

function recycle_1(array) {
    let materials = ['paper', 'glass', 'organic', 'plastic'];
    console.log('materials: ', materials);
    //let result = new Array(4).fill([]);
    let result = materials.map( () => []);
    console.log('result: ', result);

    for (let i=0; i < array.length; i++) {
        for (j=0; j<materials.length; j++) {
            if (array[i]?.material == materials[j] || array[i]?.secondMaterial == materials[j]) {
                result[j].push(array[i].type);
            }
        }
    }

    return result;
  }

function recycle_2(array) {
    let materials = {'paper': [], 'glass': [], 'organic': [], 'plastic': [] };
    console.log('materials: ', materials);

    for (let i=0; i < array.length; i++) {
        for (material in materials) {
            if (array[i]?.material == material || array[i]?.secondMaterial == material) {
                materials[material].push(array[i].type);
            }
        }
    }

    return materials;
  }




// Правильні варіанти:
// ------------
const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];

function recycle__1(objects) {
  return recyclerMaterials.map(m => objects.filter(o => o.material == m || o.secondMaterial == m).map(o => o.type));
}
// ------------
function recycle__2(arr) {
    let paper = [], glass = [], organic = [], plastic = [];
  
    arr.forEach(obj => {  
      if(obj.material === 'paper' || obj.secondMaterial === 'paper' ) paper.push(obj.type)
      if(obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
      if(obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
      if(obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)
    });
  
    return [paper, glass, organic, plastic]
  }

  function recycle__3(array) {
    let materials = { "paper": [], "glass": [], "organic": [], "plastic": [] }
    
    array.forEach(o => {
      materials[o.material].push(o.type);
      if(o.secondMaterial)
        materials[o.secondMaterial].push(o.type);
    });
    return Object.values(materials);
    
  }

  const recycle__4 = array =>
  [ 'paper', 'glass', 'organic', 'plastic' ]
    .map(mat => array.filter(obj => obj.material === mat || obj.secondMaterial === mat)
    .map(obj => obj.type))


// Тести
let a = [
    {type: 'rotten apples', material: 'organic'},
    {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
    {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
    {type: 'amazon box', material: 'paper'},
    {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
  ];
  let b = [
    ['wine bottle', 'amazon box', 'beer bottle'],
    ['wine bottle', 'beer bottle'],
    ['rotten apples', 'out of date yogurt'],
    ['out of date yogurt']
  ];
  //assert.deepEqual(recycle(a), b);
  console.log(a);
  console.log(recycle(a));
  console.log(b);


