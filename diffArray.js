//This function takes two arrays and returns a new array containing their symmetric difference.
function diffArray(arr1, arr2) {
  let uniqueValsArr1 = arr1.filter(el => arr2.indexOf(el) === -1);
  let uniqueValsArr2 = arr2.filter(el => arr1.indexOf(el) === -1);
  
  return uniqueValsArr1.concat(uniqueValsArr2);
}

//Expected Output: 4
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Expected Output: ["diorite", "pink wool"]
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);