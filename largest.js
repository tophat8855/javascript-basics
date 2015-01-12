//find largest of five numbers
var fiveNumbers = [11, 2, 69, 56, 31]
var holder = 0
for(var i = 0; i < fiveNumbers.length; i++){
  if (fiveNumbers[i] > holder) {
    holder = fiveNumbers[i]
  }
}
alert(holder)
