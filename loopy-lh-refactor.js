function loopyLighthouse(range, multiples, words) {
  var multiple1;
  var multiple2;
  var printer;
  for (var i = range[0]; i <= range[1]; i++) {
    debugger;
    multiple1 = (i % multiples[0] === 0);
    multiple2 = (i % multiples[1] === 0);
    printer = "";

    if (multiple1) printer += words[0];
    if (multiple2) printer += words[1];
    if (!multiple1 && !multiple2) printer += i;

    console.log(printer);
}}