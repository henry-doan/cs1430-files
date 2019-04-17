var markers = ["X", "O"]
var turn = 0
var players = []
var scores = [0,0]
var winValues = [7, 56, 73, 84, 146, 273, 292, 448]
var gameOver = false

players[0] = prompt("enter p1")
players[1] = prompt("enter p2")

setTimeout( function () { 
  document.getElementById("title").innerText = "It's " + players[turn] + " Turn" 
}, 1000)

function start(choice, boxValue) {
  if(!gameOver) {
    choice.innerText = markers[turn];
  
    scores[turn] += boxValue
  
    checkWin()
    if (!gameOver) {
      if (turn == 0) {
        turn = 1;
      } else {
        turn = 0;
      }
      
      choice.removeAttribute("onclick")
      document.getElementById("title").innerText = "It's " + players[turn] + " Turn"
    }
  } 

}

function checkWin() {
  // extra line draw a line through the winning
  for (var i = 0; i < winValues.length; i++) {
    if ((scores[turn] & winValues[i]) == winValues[i]) {
      document.getElementById("title").innerText = "Player" + players[turn] + " Won!"
      gameOver = true
    }
  }

  if(((scores[0] + scores[1]) == 511) && !gameOver) {
    document.getElementById("title").innerText = "Its a Tie!"
    gameOver = true
  }
}

// reset // make your board here