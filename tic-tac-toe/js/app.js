var markers = ["X", "O"]
var turn = 0
var players = []
var scores = [0,0]
var winValues = [7, 56, 73, 84, 146, 273, 292, 448]
var gameOver = false
var title = document.getElementById("title")
var resetBtn = document.getElementById('resetBtn')
var winCount = [0,0]

document.getElementById('p1Tally').innerHTML = winCount[0]
document.getElementById('p2Tally').innerHTML = winCount[1]

if (players.length == 0) {
  // let user typ in own names
  players[0] = prompt("Who is X")
  players[1] = prompt("Who is O")

  // set default to if they enter empty strings
  if (players[0] === "") {
    players[0] = 'Player 1'
  } 
  
  if (players[1] === "") {
    players[1] = 'Player 2'
  }
  
  // set tally names
  document.getElementById('p1').innerHTML = players[0]
  document.getElementById('p2').innerHTML = players[1]
}

setTimeout( function () { 
  title.innerText = "It's " + players[turn] + " Turn" 
}, 1000)

function start(choice, boxValue) {
  if(!gameOver) {
    choice.innerText = markers[turn];
  
    scores[turn] += boxValue
  
    checkWin()
    if (!gameOver) {
      turn = turn == 0 ? 1 : 0 
      choice.removeAttribute("onclick")
      title.innerText = "It's " + players[turn] + " Turn"
    }
  } 
}

function checkWin() {
  // extra line draw a line through the winning
  winValues.map( (winNum) => {
    if ((scores[turn] & winNum) == winNum) {
      title.innerText = "Player" + players[turn] + " Won!"

      // increment the win
      winCount[turn] = winCount[turn] + 1
      document.getElementById('p1Tally').innerHTML = winCount[0]
      document.getElementById('p2Tally').innerHTML = winCount[1]

      gameOver = true
      resetBtn.style.display = 'block'
    }
  })
  
  if(((scores[0] + scores[1]) == 511) && !gameOver) {
    title.innerText = "Its a Tie!"
    gameOver = true
    resetBtn.style.display = 'block'
  }
}

// reset // make your board here

function reset() {
  var samePlayers = players
  players = samePlayers

  var row1 = document.getElementById("row-1")
  var row2 = document.getElementById("row-2")
  var row3 = document.getElementById("row-3")

  // clear first row
  row1.childNodes[1].innerText = "";
  row1.childNodes[3].innerText = "";
  row1.childNodes[5].innerText = "";
  
  // add back onclick
  var att = document.createAttribute("onclick");      
  att.value = "start(this, 1)";                          
  row1.childNodes[1].setAttributeNode(att);

  var att1 = document.createAttribute("onclick");      
  att1.value = "start(this, 2)";                          
  row1.childNodes[3].setAttributeNode(att1);

  var att2 = document.createAttribute("onclick");      
  att2.value = "start(this, 4)";                          
  row1.childNodes[5].setAttributeNode(att2);

  // clear second row
  row2.childNodes[1].innerText = "";
  row2.childNodes[3].innerText = "";
  row2.childNodes[5].innerText = "";
  
  // add back onclick
  var att3 = document.createAttribute("onclick");
  att3.value = "start(this, 8)";
  row2.childNodes[1].setAttributeNode(att3);

  var att4 = document.createAttribute("onclick");
  att4.value = "start(this, 16)";
  row2.childNodes[3].setAttributeNode(att4);

  var att5 = document.createAttribute("onclick");
  att5.value = "start(this, 32)";
  row2.childNodes[5].setAttributeNode(att5);

  // clear last row
  row3.childNodes[1].innerText = "";
  row3.childNodes[3].innerText = "";
  row3.childNodes[5].innerText = "";

  // add back onclick
  var att6 = document.createAttribute("onclick");
  att6.value = "start(this, 64)";
  row3.childNodes[1].setAttributeNode(att6);

  var att7 = document.createAttribute("onclick");
  att7.value = "start(this, 128)";
  row3.childNodes[3].setAttributeNode(att7);

  var att8 = document.createAttribute("onclick");
  att8.value = "start(this, 256)";
  row3.childNodes[5].setAttributeNode(att8);

  // reset save values
  gameOver = false
  resetBtn.style.display = 'none'
  scores[0] = 0
  scores[1] = 0
}

