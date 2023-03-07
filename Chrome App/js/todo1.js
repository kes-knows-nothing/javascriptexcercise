// 지금 해야되는 것은 list를 등록하는 것과 그리고 저장되게 하는 것 그리고 삭제 기능 구현까지

// 1. list로 보이게 만든다.^^ 인풋의 값을 추출해서 list로 새로 추가한다^^

const unorderList = document.querySelector("#todo-list");
const newForm = document.querySelector("#todo-form")
const newInput = document.querySelector("#todo-form input");

// 새로운 어레이를 만들어서 저장해주세요~
// const로 하면 리프레시할 때 늘 공백이 되니 let으로 바꾸어 줘요 ^^~
let toDos = [];

// 먼저 스토리지의 값을 스트링으로 바꾸어주었어요 이 후에 배열로 바꿀거에요.
// 저장될 때는 todos라는 이름에 텍스트로 저장될거에요.
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

// 1-1 서밋하는 순간 리스트로 추가니까 form 서밋 기능을 구현한다.

// 삭제하는 함수 작성/버튼의 부모요소인 리스트를 찾아서 변수로 저장 후 지운다~^^
function deleteList(event) {
  const deletedLi = event.target.parentElement
  deletedLi.remove()
  // 여기 삭제되는 li가 위에나와있으니 그 id값을 따면 되요^^~
  // 이 아이디를 가진 리스트만 빼고 다시 toDos에 넣어줄거에요^^~
  toDos = toDos.filter(toDo => toDo.id !== parseInt(deletedLi.id))
  saveToDos();
}

function paintList(newToDoObj) {
  // 삭제용 버튼을 만든다.^^
  const button = document.createElement("button")
  const newLi = document.createElement("li")
   // 삭제 구현~ li에 아이디를 부여하여 삭제할 아이디 검증용으로 사용할거에요. 버튼으로 색출해야해요
  newLi.id = newToDoObj.id;
  const spanInLi = document.createElement("span")
  // 스팬 안에 다가 입력되는 값을 넣어준다.
  spanInLi.innerText = newToDoObj.text;
  button.innerText = "삭제"
  // 2. 버튼을 넣고 삭제를 할 수 있게 해주세요.^^
  button.addEventListener("click", deleteList)
  // 차례로 넣어준다.
  newLi.appendChild(spanInLi);
  newLi.appendChild(button);
  unorderList.appendChild(newLi);
}

function submitForm(event) {
  event.preventDefault();
  const newToDo = newInput.value;
  // 여기에서 왜 인자를 paintList에 넣어주는지 모르겟네;
// 아이디 값을 부여해서 오브젝트로 만들었어요^^;
  const newToDoObj = {
    id: Date.now(),
    text: newToDo
  }
    // 여기서 새 값을 toDos에 넣어줄거에요~^^
    toDos.push(newToDoObj)
    // 저장한 값을 로컬스토리지에 넣어주었어요~^^
    saveToDos();
    paintList(newToDoObj);
    newInput.value = ""
}
// 폼을 제출하세요~
newForm.addEventListener("submit", submitForm);

// 3. 저장할 수 있게 해주세요 ^^
// local storage를 이용할거에요~

// 4. 로컬 스토리지에 저장을 했다면 이제 불러오는 것을 할거에요~^^
// todos 키의 텍스트를 가져와서 저장했어요. 
const savedToDos = localStorage.getItem("todos")
// 이 텍스트를 배열로 바꾸어 주었어요^^~
// 이 키 값이 null이 아니면 스토리지를 불러와서 list로 펼쳐줄거에요^^~
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintList);
}

// 5. 제일 난관 삭제 기능을 구현해야해요^^; 난감해요...
// 삭제에서 중요한 것은 삭제할 것을 특정하는 것이 중요해요^^~
// 버튼 눌러서 삭제니까 버튼하고 관련이 있겠죠 ^^?
// 특정시키기 위해서는 아이디를 부여할거에요 ^^

