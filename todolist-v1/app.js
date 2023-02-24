const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
let workList = [];
var itemList = [];

// 1. 먼저 날짜를 출력한다.
app.get("/", function(req, res) {
  const today = new Date();
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric"
  };
  const kTime = today.toLocaleDateString("ko-KR", options);

  // 2. ejs에서 값을 whatDay라는 빈칸을 가져오고 넣을 값을 정한다. view라는 파일에 사용할 파일을 넣어줘야한다.
  res.render("list", {whatDay: kTime, newListItem: itemList});
});

  // 3. 리스트를 추가할 폼을 가져온다.
  app.post("/", function(req, res){
    var item = req.body.newItem;
    itemList.push(item);
    res.redirect("/");
  });


app.get("/work", function(req, res){
  res.render("list", {whatDay: "Work List", newListItem: workList});
})

app.post("/", function(req, res){
  console.log(req.body);
  let item = req.body.newItem;
  workList.push(item);
  res.redirect("/work");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000")
});