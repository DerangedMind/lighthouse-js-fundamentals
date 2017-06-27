function merge(arr1, arr2) {
  var arrayOfArrays = [arr1, arr2];
  var unsortedArray = [];

  // go through each array
  for (var i = 0; i < arrayOfArrays.length; i++) {
    // if the array is empty, skip it
    if (arrayOfArrays[i].length > 0) {
      //go through each item in array
      for (var j = 0; j < arrayOfArrays[i].length; j++) {
        console.log( arrayOfArrays[i][j] );
        unsortedArray.push(arrayOfArrays[i][j]);
      }
    }
  }
  var sortedArray = unsortedArray.sort();

  return sortedArray;
}