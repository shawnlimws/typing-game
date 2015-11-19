var randomWords = require('random-words')
var sharks = Array.from(document.getElementsByClassName('sharks'))
var inputField = document.getElementById('playerField')
document.getElementById('score').textContent = 0

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
inputField.addEventListener('keydown', checkWords)
inputField.addEventListener('keydown', clearField)

function checkWords (event) {
  sharks.forEach(shark => {
    if (shark.innerText === inputField.value && event.keyCode === 13) {
      shark.style.listStyle = 'url(media/injured-shark.png)'
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

function end () {
  if (sharks.every(shark => shark.textContent === '')) {
    document.querySelector('.school').style.animationPlayState = 'paused'
  }
}

// things to do:
// 1) add the filter function and split up the checkWords function
// 2) change the input to a form so don't have to requure keyCode 13
// 3) can check if animation is paused then restart game

// questions:
// 1) why is vertical not responsive
