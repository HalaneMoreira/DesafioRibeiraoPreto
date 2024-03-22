function stringHello(str) {
  var word = "";

  for (var i = str.length - 1; i >= 0; i--) {
    word += str[i];
  }
  return word;
}
console.log(stringHello("HELLO"));
