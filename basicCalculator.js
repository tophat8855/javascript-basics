//simple calculator

var operator = prompt("Which operator? (+, -, *, /)")
var operand1 = prompt("First number?")
var operand2 = prompt("Second number?")

switch (operator) {
  case "+":
    var sum = parseFloat(operand1) + parseFloat(operand2)
    console.log(sum);
    break;
  case "-":
    var difference = parseFloat(operand1) - parseFloat(operand2)
    console.log(difference);
    break;
  case "*":
    var product = parseFloat(operand1) * parseFloat(operand2)
    console.log(product);
    break;
  case "/":
    var quotient = parseFloat(operand1) / parseFloat(operand2)
    console.log(quotient);
    break;
  default:
    console.log("Not a valid operation");
    break
}
