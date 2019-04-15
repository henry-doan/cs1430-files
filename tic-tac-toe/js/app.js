
var markers = ["X", "O"]

var turn = 0

var players = []

players[0] = prompt("enter p1")
players[1] = prompt("enter p2")

setTimeout( function () { 
  document.getElementById("title").innerText = "It's " + players[turn] + " Turn" 
}, 1000)

function start(choice) {
  choice.innerText = markers[turn];

  if (turn == 0) {
    turn = 1;
  } else {
    turn = 0;
  }

  choice.removeAttribute("onclick")
  document.getElementById("title").innerText = "It's " + players[turn] + " Turn"
}