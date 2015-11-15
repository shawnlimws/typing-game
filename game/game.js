var randomWords = require('random-words')

console.log(randomWords(1))

function generateWords () {
  var wordAttack = document.createTextNode(randomWords(1))
  document.getElementById('sharkone').appendChild(document.createTextNode(randomWords(1)))
  document.getElementById('sharktwo').appendChild(document.createTextNode(randomWords(1)))
}
generateWords()
