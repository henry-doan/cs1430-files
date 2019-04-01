//JAVASCRIPT STUFF

function changeText() {
  var p = document.getElementById('para')

  if (p.innerText == 'changed') {
    p.innerText = 'Europe is a Swedish rock band formed in Upplands Väsby in 1979, [5] by vocalist Joey Tempest, guitarist John Norum, bass guitarist Peter Olsson, and drummer Tony Reno.'
  } else {
    p.innerText = 'changed'
  }
}