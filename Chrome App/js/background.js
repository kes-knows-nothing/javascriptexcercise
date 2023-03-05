const bgImage= document.createElement("img");

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg"
]

let chosenImage = Math.floor(Math.random() * images.length)

bgImage.src = `img/${chosenImage}.jpg`;

document.body.appendChild(bgImage);