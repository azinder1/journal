(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Post = require('./../js/post.js').postModule;


$(document).ready(function(){
  $('#journal-form').submit(function(event) {
  event.preventDefault();
    var title = $('#title').val();
    alert(title)
    var entry = $('#entry').val();
    var newPost = new Post(title, entry);
    var numberVowels = newPost.countVowels(entry);
    var numberConsonants = newPost.countConsonants(entry);
    var snippet = newPost.snippet(entry);
    alert(entry)
    alert(snippet)
    $('#journal-posts').append('<h3>'+ title + '<h3/>'+ '<ul>' + '<li>' + 'Number of Vowels:' + numberVowels + '</li>' + '<li>' + 'Number of Consonants:' + numberConsonants + '</li>' + '</ul>' + '<p>' + snippet + '</p>');
  });
});

},{"./../js/post.js":1}]},{},[2]);
