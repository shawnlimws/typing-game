var randomWords = require('random-words')
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
      shark.style.backgroundImage = 'url(../injured-shark.png)'
      shark.style.animationPlayState = 'paused'
      inputField.value = ''
    } else return
  }
) }

// Clear the input box
function clearField (event) {
  if (event.keyCode === 13) {
    inputField.value = ''
  }
}

// Make the images move
