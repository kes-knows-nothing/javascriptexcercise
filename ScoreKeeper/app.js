const p1 = {
  score: 0,
  button: document.querySelector('#p1Btn'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Btn'),
  display: document.querySelector('#p2Display')

}

const resetBtn = document.querySelector('#reset')
const setScore = document.querySelector('#setScore')


let winningScore = 3;
let isGameOver = false;

// 1. 먼저 버튼을 눌렀을 때 점수가 오른다.
// 여기서 질문 왜 이렇게 바로 display 값을 변경하는게 안되는가? 선택의 의미만 갖는다. 그리고 textContent와 innerText의 차이


function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success')
      opponent.display.classList.add('has-text-danger')
      player.button.disabled = true;
      opponent.button.disabled = true;
    } 
      player.display.textContent = player.score;
  }
}


p1.button.addEventListener('click', function() {
  // 3. 설정한 점수까지만 올라간다. 설정하기
  // 4. winningScore가 상수가 아니라 변수로 설정해야한다는 것 
  updateScores(p1, p2)
})
  

p2.button.addEventListener('click', function() {
  updateScores(p2, p1)
})

//  4. 셀렉트 값을 받아서 위닝스코어하고 연동 
//  여기서 문제는 내가 스트링인데 숫자로 생각해서 안되었다. 숫자로 바꿔주어야함 싶할~
setScore.addEventListener('change', function() {
  winningScore = parseInt(this.value);
  reset();
})

// 2. 리셋 버튼은 초기화

resetBtn.addEventListener('click', reset)
  

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger')
    p.button.disabled = false;
  }
}

