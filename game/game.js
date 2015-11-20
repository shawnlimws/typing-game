function getAliveSharks () {
  return Array.from(document.querySelectorAll('.shark:not(.dead)'))
}

// Variables
var randomWords = require('random-words')
var inputField = document.getElementById('playerField')
document.getElementById('score').textContent = 0

// Create the shark words
function generateWords () {
  getAliveSharks().forEach(shark =>
    shark.appendChild(
      document.createTextNode(randomWords(1))
    )
)
  document.getElementById('sharkOne').style.marginLeft = Math.random() * 50 + 'vw'
  document.getElementById('sharkTwo').style.marginLeft = Math.random() * 80 + 'vw'
  document.getElementById('sharkThree').style.marginLeft = Math.random() * 100 + 'vw'
  document.getElementById('sharkFour').style.marginLeft = Math.random() * 30 + 'vw'
  document.querySelector('ul').classList.add('school')
}
generateWords()

// Check words (number 13 refers to Enter key)
inputField.addEventListener('keydown', checkWords)
inputField.addEventListener('keydown', clearField)

function checkWords (event) {
  getAliveSharks().forEach(shark => {
    if (shark.innerText === inputField.value && event.keyCode === 13) {
      shark.classList.add('dead')
      shark.textContent = ''
      document.getElementById('score').textContent = parseInt((document.getElementById('score').textContent), 10) + 1
      end()
    }
  })
}

// Clear the input box
function clearField (event) {
  if (event.keyCode === 13) {
    inputField.value = ''
  }
}
// End the round
function end () {
  if (getAliveSharks().length === 0) {
    Array.from(document.querySelectorAll('li')).forEach(shark => shark.className = 'shark')
    document.querySelector('ul').classList.remove('school')
    setTimeout(function () {
      document.querySelector('ul').classList.add('school')
      generateWords()
    }, 500)
  }
}

// things to do:
// 1) add the filter function and split up the checkWords function
// 2) change the input to a form so don't have to requure keyCode 13
// 3) can check if animation is paused then restart game
