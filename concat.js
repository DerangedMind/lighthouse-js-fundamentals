function concat(arr1, arr2) {
  var newArray = [];

  if (arr1.length > 0) {

    for (var i = 0; i < arr1.length; i++) {
      newArray.push(arr1[i]);
    }
  }

  if (arr2.length > 0) {

    for (var j = 0; j < arr2.length; j++) {
      newArray.push(arr2[j]);
    }
  }

  return newArray;
}