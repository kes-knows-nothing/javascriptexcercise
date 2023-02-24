//  Detecting Button Press 
// drum이란 클래스를 호출하고 for문에 의해서 클래스 하나하나 마다 함수 안의 내용이 적용이 된다. 함수 안의 내용을 살펴보면 클래스에 작성된 알파벳이 buttomInnerHTML 변수에 저장이되고 그 저장된 이건 클릭이고 마우스 클릭 다음건 키보드 클릭이고! 버튼에 클릭 이벤트를 할당한 것.

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

// 키가 눌렸을 때 funcion을 작동해라 그 function은 {}에 들어 있다. event는 fuction의 인자로 여기서는 누른 버튼이 될 것이다. document에 addEventListner를 추가한 것은 전체 문서에 이 기능을 추가한다는 의미로 keydown의 기능을 document의 적용한다는 의미이다. 그리고 내장 함수로 event키는 정확히 키보드이벤트로서 key를 붙여주면 그 값을 호출할 수 있다. 

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var tom5 = new Audio("sounds/snare.mp3");
      tom5.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed")
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 300);
}

