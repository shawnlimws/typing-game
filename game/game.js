var randomWords = require('random-words')
var playerInput = document.getElementById('playertext')
var sharks = Array.from(document.getElementsByClassName('sharks'))
var inputField = document.getElementById('playerField')
var sharkOne = document.getElementById('sharkone')

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
      shark.style.backgroundImage = 'url(../media/injured-shark.png)'
      inputField.value = ''
    }
  })
  if (gameOver(sharks)) {
    sharks.forEach(shark => {
      shark.className = ''
    })
  }
}

// Clear the input box
function clearField (event) {
  if (event.keyCode === 13) {
    inputField.value = ''
  }
}

function gameOver (sharks) {
  return sharks
    .every(shark => shark.style.animationPlayState === 'paused')
}
// Animate sharks
function moveShark (shark) {
  sharkOne.style.left = parseInt(sharkOne) + 10 + 'px'
  Animate = setTimeout(moveShark, 20)
}
// things to do:
// 1) add the filter function and split up the checkWords function
// 2) change the input to a form so don't have to requure keyCode 13
// 3) can check if animation is paused then restart game
// 4) need to add animation into javascript, so that can call on it to recreate words
