function range(start, end, step) {

  if (start === undefined || end === undefined || step === undefined ||
        end < start || step <= 0) {
    return [];
  }

  var rangeArray = [];
  var counter = start;
  while (counter <= end) {
    rangeArray.push(counter);
    counter += step;
  }

  console.log(rangeArray);
  return rangeArray;

}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));