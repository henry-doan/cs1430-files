function randomNum() {
  return (Math.floor(Math.random() * 99) + 1)
}

function guessing() {
  var num = randomNum()

  logic(num)
}

function logic(rightNum) {
  var userGuess = document.getElementById('guess').value
  var regex = /^[0-9]+$/;

  console.log(rightNum)
  if (!userGuess.match(regex) || userGuess === '') {
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

  switch(result) {
    case 'win':
      image.src = './img/1850893_2.jpg'
      break
    case 'high':
      image.src = './img/photo-1500577329392-f0af6d7dd827.jpeg'
      break
    case 'low':
      image.src = './img/photo-1531928351158-2f736078e0a1.jpeg'
      break
    default: 
      image.src = './img/photo-1543702883-c93cb11519d3.jpeg'
  }
}