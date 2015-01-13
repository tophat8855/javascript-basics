//filter words longer than 5 characters
var words = ["happenstance", "kid", "apps", "exponent", "info"]
var maxLength = 5
var shortWords = []
for (var i = 0; i < words.length; i++){
  var word = words[i];
  if (word.length <= 5) {
    shortWords.push(word);
  }
}
console.log(shortWords)
