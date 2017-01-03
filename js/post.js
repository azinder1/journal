function Post(title, entry) {
  title = this.title;
  entry = this.entry;
}

Post.prototype.countVowels = function(body) {
  var entry = body;
  var lowercase = entry.toLowerCase();
  var vowelsArray = lowercase.match(/[aeiou]/g);
  var vowels = vowelsArray.length;
  return vowels;
};

Post.prototype.countConsonants = function(body){
  var entry = body;
  var lowercase = entry.toLowerCase();
  var consonantsArray = lowercase.match(/[^aeiou]/g);
  var consonants = consonantsArray.length;
  return consonants;
};

Post.prototype.snippet = function(uniqueEntry) {
  var myArray = [];
  myArray = uniqueEntry.split(/[.!?]/);
  var myString = myArray[0].toString();
  var firstSentence = myString.split(" ");
  if (firstSentence.length < 8) {
    return firstSentence.join(" ");
  } else {
    var words = firstSentence.slice(0,8).join(" ");
    return words;
  }
};

exports.postModule = Post;
