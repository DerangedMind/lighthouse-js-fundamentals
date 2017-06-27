function lastIndexOf(list, val) {
  var tracker = -1;

  for (var i = 0; i < list.length; i++) {
    if (list[i] == val) {
      tracker = i;
    }
  }

  return tracker;

}