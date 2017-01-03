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
