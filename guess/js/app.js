var rightNum = Math.floor(Math.random() * 99) + 1
var guesses = 0; 

function logic() {
  guesses++
  var userGuess = document.getElementById('guess').value
  var regex = /^[0-9]+$/;

  // test code 
  // console.log(rightNum)
  if (!userGuess.match(regex) || userGuess === '' || userGuess > 99) {
    img('nan')
  } else if (userGuess > rightNum) {
    img('high')
  } else if (userGuess < rightNum ) {
    img('low')
  } else {
    img('win')
  }
}

function img(result) {
  var image = document.getElementById('image')
  var msg = document.getElementById('message')
  var btn = document.getElementById("btn")

  switch(result) {
    case 'win':
      msg.innerText = `Winner! You got the number ${rightNum} in ${guesses} guesses! Play again?`
      image.src = './img/1850893_2.jpg'
      btn.innerText = "Play Again"
      btn.onclick = function () { reset() }
      break
    case 'high':
      msg.innerText = 'Too High! Guess again'
      image.src = './img/photo-1500577329392-f0af6d7dd827.jpeg'
      break
    case 'low':
      msg.innerText = 'A Little Low! Try again'
      image.src = './img/photo-1531928351158-2f736078e0a1.jpeg'
      break
    default: 
      msg.innerText = 'Sorry it looks like you entered a invalid input'
      image.src = './img/photo-1543702883-c93cb11519d3.jpeg'
  }
}

function reset() {
  location.reload()
}