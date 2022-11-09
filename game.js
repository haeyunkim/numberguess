let computerNum = 0;
const goButton = document.querySelector("#go-button");
const resetButton = document.querySelector("#reset-button");
const inputBox = document.querySelector("#input-box");
let resultArea = document.querySelector("#result-area");
let changeArea = document.querySelector("#change-area");
let change = 5;
let gameOver = false;
let history = [];

function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}
randomNum();

goButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
inputBox.addEventListener("focus", function () {
  inputBox.value = "";
});
function play() {
  let inputVal = inputBox.value;

  if (inputVal > 100 || inputVal < 1) {
    resultArea.textContent = "1과 100 사이의 값을 입력해주세요.";
    return;
  }

  if (history.includes(inputVal)) {
    resultArea.textContent = "이미 입력한 값입니다!";
    return;
  }

  change--;
  changeArea.textContent = `남은 기회 : ${change}번`;

  if (change < 1) {
    changeArea.textContent = "GameOver!";
    gameOver = true;
  }

  history.push(inputVal);
  console.log(history);
  if (gameOver === true) {
    goButton.disabled = true;
  }
  if (inputVal > computerNum) {
    resultArea.textContent = "Down!";
  } else if (inputVal < computerNum) {
    resultArea.textContent = "Up!";
  } else {
    resultArea.textContent = "정답입니다!";
  }
}

function reset() {
  inputBox.value = "";

  randomNum();
}
