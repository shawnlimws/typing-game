var randomWords = require('random-words')
var sharkOne = document.getElementById('sharkone')
var sharkTwo = document.getElementById('sharktwo')
var sharkThree = document.getElementById('sharkthree')
var sharkFour = document.getElementById('sharkfour')
var sharkFive = document.getElementById('sharkfive')
var playerInput = document.getElementById('playertext')
var sharks = Array.from(document.getElementsByClassName('sharks'))
var inputField = document.getElementById('playerField')

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
document.querySelector('input').autofocus = true
document.getElementById('playerField').addEventListener('keydown', checkWords)
document.getElementById('playerField').addEventListener('keydown', clearField)

function checkWords (event) {
  sharks.forEach(shark => {
    if (shark.innerText === inputField.value && event.keyCode === 13) {
      shark.className = 'shark-beaten'
      inputField.value = ''
    } else return
  }
) }

function clearField (event) {
  if (event.keyCode === 13) {
    inputField.value = ''
  }
}
