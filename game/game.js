var randomWords = require('random-words')
var sharkOne = document.getElementById('sharkone')
var sharkTwo = document.getElementById('sharktwo')
var sharkThree = document.getElementById('sharkthree')
var sharkFour = document.getElementById('sharkfour')
var sharkFive = document.getElementById('sharkfive')
var playerInput = document.getElementById('playertext')
var sharks = Array.from(document.getElementsByClassName('sharks'))

// Create the shark words
function generateWords () {
  sharks.forEach(shark =>
    shark.appendChild(
      document.createTextNode(randomWords(1))
    )
  )
}
generateWords()

// Check words
document.querySelector('input').focus()
document.getElementById('playerField').addEventListener('input', checkWords)

function checkWords (event) {
  if (event.target === sharkOne
}
