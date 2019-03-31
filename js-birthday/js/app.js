function message() {
  var txt;
  var name = prompt("Please Enter Your Name:");
  if (name == null || name == '') {
    txt = "Too Bad, Maybe Next time!";
  } else {
    var age = prompt("How Old Are You?");
    if (age == null || age == '') {
      txt = "Darn, So Close!";
    } else {
      txt = "Happy " + ordinalSuffix(age) + " Birthday " + name + "!🎈";
      document.getElementById('msg').innerHTML = txt;
      document.getElementById('wish').innerHTML = "🎂 Make A Wish! 🎉";
      document.getElementById('card').style.display = 'none';
      changePage()
    }
  }
  
}

function ordinalSuffix(incomingAge) {
  var j = incomingAge % 10,
    k = incomingAge % 100;
  if (j == 1 && k != 11) {
    return incomingAge + "st";
  }
  if (j == 2 && k != 12) {
    return incomingAge + "nd";
  }
  if (j == 3 && k != 13) {
    return incomingAge + "rd";
  }
  return incomingAge + "th";
}

function changePage() {
  document.getElementById("main").classList.add('changed');
}