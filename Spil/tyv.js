function figur(nr) {
if (nr == 0) {
return "kirsebaer.gif"
}
else if (nr == 1) {
return "ananas.gif"
}
else if(nr == 2){
return "bar.gif"
}
}
function værdi(felt1,felt2) {
if(felt1 == 0 && felt2 == 0){
return 20
}
else if (felt1 == 0){
return 10
}
else if(felt1 == 1 && felt2 == 1){
return 40
}
else if(felt1 == 2 && felt2 == 2){
return 100
}
else {
return 0
}
}
function spil() {
ok = true
total = 0
while(ok == true) {
felt1 = Math.floor(3*Math.random())
felt2 = Math.floor(3*Math.random())
hjul1.src = figur(felt1)
hjul2.src = figur(felt2)
gevinst = værdi(felt1,felt2)
total = total + gevinst - 10
ok = confirm("Din gevinst er "+gevinst+" kr.\n Din saldo er "+total+" kr.\n Vil du prøve igen?")
}
}
