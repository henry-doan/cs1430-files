function storyTelling() {
  var time = starter(document.getElementById('time').value)
  var adj1 = document.getElementById('adj1').value
  var person = document.getElementById('person').value
  var firstPlace = document.getElementById('firstPlace').value
  var verb1 = document.getElementById('verb1').value
  var secondPlace = document.getElementById('secondPlace').value
  var adj2 = document.getElementById('adj2').value
  var noun = document.getElementById('noun').value
  var verb2 = document.getElementById('verb2').value
  var adj3 = document.getElementById('adj3').value

  var story = `${time}, ${adj1} ${person}
  were going to ${firstPlace}, but to get to the 
  ${firstPlace}, ${person} would have to ${verb1}
  in ${secondPlace}. All of the sudden a ${adj2} ${noun} 
  came out of nowhere and ${verb2} to ${person}. Which 
  then left ${person} to be 
  ${adj3} forever. The End...`

  document.getElementById('story').insertAdjacentHTML('beforeend', story )
  document.getElementById('inputs').style.display = 'none'
  document.getElementById('resetBtn').style.display = 'block'
}

function starter(timeNum) {
  var num = parseInt(timeNum)
  switch(num) {
    case 1:
      return 'Once upon a time'
      break
    case 2:
      return 'Twice upon a time'
      break
    default:
      return 'A long long time ago in a place far far away'
  }
}

function reset() {
  location.reload()
}