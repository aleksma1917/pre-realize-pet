const button = document.querySelector(".bubbly-button");
document.querySelector(".bubbly-button").onclick = function () {
  let posLeft = 0;
  let intervalIdLeft;
  let posR = 0;
  let intervalIdR;

  clearInterval(intervalIdLeft);
  posLeft = 0;
  intervalIdLeft = setInterval(move, 20);
  console.log("функция start left");
  posR = 185;
  intervalIdR = setInterval(move, 20);

  function move() {
    const elemLeft = document.getElementById("leftDoor");
    posLeft += 1;
    elemLeft.style.left = posLeft + "px";
    const elemR = document.getElementById("rightDoor");
    posR += 1;
    elemR.style.right = posR + "px";
    if (posLeft >= 200) {
      clearInterval(intervalIdLeft);
      console.log("Конец left");
    }
    if (posR >= 400) {
      clearInterval(intervalIdR);
      console.log("конец right");
    }
  }
};
