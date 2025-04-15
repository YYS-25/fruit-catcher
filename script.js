let basket = document.getElementById("basket");
let fruit = document.getElementById("fruit");
let scoreDisplay = document.getElementById("score");
let score = 0;

let gameWidth = document.getElementById("game").clientWidth;

let fruitFallSpeed = 3;

function moveFruit() {
  let fruitTop = fruit.offsetTop;
  fruit.style.top = fruitTop + fruitFallSpeed + "px";

  if (fruitTop > 460) {
    // check for collision
    let fruitLeft = fruit.offsetLeft;
    let basketLeft = basket.offsetLeft;

    if (fruitLeft > basketLeft - 20 && fruitLeft < basketLeft + 80) {
      score++;
      scoreDisplay.textContent = "Score: " + score;
    }

    resetFruit();
  }
}

function resetFruit() {
  fruit.style.top = "0px";
  fruit.style.left = Math.floor(Math.random() * (gameWidth - 40)) + "px";
}

document.addEventListener("keydown", function (e) {
  let left = basket.offsetLeft;
  if (e.key === "ArrowLeft" && left > 0) {
    basket.style.left = left - 20 + "px";
  } else if (e.key === "ArrowRight" && left < gameWidth - 80) {
    basket.style.left = left + 20 + "px";
  }
});

resetFruit();
setInterval(moveFruit, 20);
