let computerNum = 0;
const goButton = document.querySelector("#go-button");
const resetButton = document.querySelector("#reset-button");
const inputBox = document.querySelector("#input-box");
let resultArea = document.querySelector("#result-area");
let resultText = document.querySelector(".result-text");
let resultAreaImg = document.querySelector("#main-img");
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
    resultText.textContent = "1과 100 사이의 값을 입력해주세요.";
    return;
  }

  if (history.includes(inputVal)) {
    resultText.textContent = "이미 입력한 값입니다!";
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
    resultText.textContent = "Down!";
    resultAreaImg.src =
      "https://t4.ftcdn.net/jpg/01/04/97/73/240_F_104977323_vfaW8rh92PEukoMLZ7oVNqQok5Mwyh9k.jpg";
  } else if (inputVal < computerNum) {
    resultText.textContent = "Up!";
    resultAreaImg.src =
      "https://t3.ftcdn.net/jpg/01/06/65/20/360_F_106652021_KMKkWaJICFBxbmhM4RmlKfJBniwdHK3S.jpg";
  } else {
    resultText.textContent = "정답입니다!";
    resultAreaImg.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZlXFyUduDpISXvdL8v9d2y0UjXCA1gqktQ&usqp=CAU";
  }
}

function reset() {
  randomNum();
  inputBox.value = "";
  gameOver = false;
  resultAreaImg.src =
    "https://media.tenor.com/PK95lqgvj4kAAAAC/%EC%8B%A0%EB%82%98%EB%8A%94%EB%86%8D%EB%8B%B4%EA%B3%B0-%EC%A0%95%EC%8B%A0%EC%82%AC%EB%82%98%EC%9A%B4%EB%86%8D%EB%8B%B4%EA%B3%B0.gif";
  goButton.disabled = false;
  chances = 5;
  changeArea.innerHTML = `남은 기회:${chances}`;
  history = [];
}
