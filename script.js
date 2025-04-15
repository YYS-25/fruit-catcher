let basket = document.getElementById("basket");
let fruit = document.getElementById("fruit");
let scoreDisplay = document.getElementById("score");
let score = 0;

let game = document.getElementById("game");
let gameWidth = game.clientWidth;

let fruitFallSpeed = 3;
let fruitInterval;

let basketSpeed = 10;
let keysPressed = {};

function moveFruit() {
  let fruitTop = fruit.offsetTop;
  fruit.style.top = fruitTop + fruitFallSpeed + "px";

  if (fruitTop > 460) {
    let fruitLeft = fruit.offsetLeft;
    let basketLeft = basket.offsetLeft;

    if (fruitLeft > basketLeft - 20 && fruitLeft < basketLeft + 80) {
      score++;
      animateScore();
    }

    resetFruit();
  }
}

function animateScore() {
  scoreDisplay.textContent = "Score: " + score;
  scoreDisplay.style.transform = "scale(1.3)";
  setTimeout(() => {
    scoreDisplay.style.transform = "scale(1)";
  }, 200);
}

function resetFruit() {
  fruit.style.top = "0px";
  fruit.style.left = Math.floor(Math.random() * (gameWidth - 40)) + "px";
}

function updateBasket() {
  if (keysPressed["ArrowLeft"]) {
    let left = basket.offsetLeft;
    if (left > 0) basket.style.left = left - basketSpeed + "px";
  }
  if (keysPressed["ArrowRight"]) {
    let left = basket.offsetLeft;
    if (left < gameWidth - 80) basket.style.left = left + basketSpeed + "px";
  }

  requestAnimationFrame(updateBasket);
}

document.addEventListener("keydown", function (e) {
  keysPressed[e.key] = true;
});

document.addEventListener("keyup", function (e) {
  keysPressed[e.key] = false;
});

resetFruit();
fruitInterval = setInterval(moveFruit, 20);
updateBasket();
