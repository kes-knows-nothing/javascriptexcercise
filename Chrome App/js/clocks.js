const clock = document.querySelector("h2#clock")

function sayClock() {
  const date = new Date();
  let options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }
  const time = date.toLocaleTimeString('en-UK');
  clock.innerText = time;
}

sayClock();
setInterval(sayClock, 1000)

