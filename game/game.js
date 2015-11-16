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
document.getElementById('playerField').addEventListener('input', checkWords)

function checkWords (event) {
  if (event.target.value === sharkOne.innerText) {
    sharkOne.className = 'shark-beaten'
  } else if (event.target.value === sharkTwo.innerText) {
    sharkTwo.className = 'shark-beaten'
  } else if (event.target.value === sharkThree.innerText) {
    sharkThree.className = 'shark-beaten'
  } else if (event.target.value === sharkFour.innerText) {
    sharkFour.className = 'shark-beaten'
  } else if (event.target.value === sharkFive.innerText) {
    sharkFive.className = 'shark-beaten'
  }
}

// Clear input box
inputField.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    inputField.value = ''
  }
})
