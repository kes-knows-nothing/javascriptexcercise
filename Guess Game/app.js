let input = prompt("Guess the number!");
let answer = Math.floor(Math.random()*100) + 1
while (true) {
  if (input < answer) {
    console.log("Down")
  }
  else if (input > answer) {
    console.log("Up")
  }
  else
    console.log("You got it")
    break
}