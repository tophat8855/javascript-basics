// reverse a string using a for loop
string = "This is a string."
var array = string.split("");
var times = array.length
var newArray = [];
for (var i = 0; i < times; i++) {
  var a = array.pop();
  newArray.push(a);
}
var output = newArray.join("")
console.log(output)
