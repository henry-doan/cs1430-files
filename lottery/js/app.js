function lottery() {
  var num = parseInt(document.getElementById('num').value)
  var arr = new Array(num)

  for (var i = 0; i < arr.length; i++) {
    arr[i] = randomNum()
  }

  var fullArr = arr.join('-')

  document.getElementById('output').innerHTML = fullArr
}

function randomNum() {
  return ('0' + (Math.floor(Math.random() * 99) + 1) ).slice(-2)
}