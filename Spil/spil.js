total = 0
function spil() {
  ok = true
  while(ok == true){
    kast = Math.floor(6*Math.random()) + 1
    if(kast == 1) {
      beløb = 10
      terning.src = "ener.gif"
    }
    else if(kast == 2) {
      beløb = 15
      terning.src = "toer.gif"
    }
    else if(kast == 3) {
      beløb = 15
      terning.src = "treer.gif"
    }
    else if(kast == 4) {
      beløb = 10
      terning.src = "firer.gif"
    }
    else if(kast == 5) {
      beløb = 15
      terning.src = "femmer.gif"
    }
    else {
      beløb = 20
      terning.src = "sekser.gif"
    }
    total = total + beløb
  ok = confirm("Din gevinst er "+beløb+" og total er "+total+" kr. Fortsæt?")
  }
}
