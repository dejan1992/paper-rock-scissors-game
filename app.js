let win = document.querySelector(".win");
const draw = document.querySelector(".draw");
const lose = document.querySelector(".lose");
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const left = document.querySelector(".left");
const pickLeft = document.querySelector("#pick-left");
const pickRight = document.querySelector("#pick-right");
const middle = document.querySelector(".middle");
const message = document.querySelector("#message");

const paperRight = document.querySelector("#paper1");
const rockRight = document.querySelector("#rock1");
const scissorsRight = document.querySelector("#scissors1");

let winNum = 0;
let drawNum = 0;
let loseNum = 0;

left.addEventListener("click", function (e) {
  // paper= 1
  // rock = 2
  // scissors = 3 

  let pick = '';
  if (e.target.classList.contains("fa-hand-paper")) {
    pick = 1;
  } else if (e.target.classList.contains("fa-hand-rock")) {
    pick = 2;
  } else if (e.target.classList.contains("fa-hand-scissors")) {
    pick = 3;

  }

  let pick2 = Math.floor((Math.random() * 3) + 1);

  // Switch
  switch (true) {
    case (pick === 1 && pick2 === 1):
      // result
      pickLeft.src = "./paper.png";
      pickRight.src = "./paper.png";
      //computers pick
      paperRight.classList.add("computer-pick")
      setTimeout(function () {
        paperRight.classList.remove("computer-pick")
      }, 500);
      youDraw();
      drawCounter();
      break;

    case (pick === 2 && pick2 === 2):
      // result
      pickLeft.src = "./rock.png";
      pickRight.src = "./rock.png";
      //computers pick
      rockRight.classList.add("computer-pick");
      setTimeout(function () {
        rockRight.classList.remove("computer-pick")
      }, 500);
      youDraw();
      drawCounter();
      break;

    case (pick === 3 && pick2 === 3):
      // result
      pickLeft.src = "./scissors.png";
      pickRight.src = "./scissors.png";
      //computers pick
      scissorsRight.classList.add("computer-pick")
      setTimeout(function () {
        scissorsRight.classList.remove("computer-pick")
      }, 500);
      youDraw();
      drawCounter();
      break;

    case (pick === 1 && pick2 === 2):
      // result
      pickLeft.src = "./paper.png";
      pickRight.src = "./rock.png";
      //computers pick
      rockRight.classList.add("computer-pick")
      setTimeout(function () {
        rockRight.classList.remove("computer-pick")
      }, 500);
      youWin();
      winCounter();
      break;

    case (pick === 1 && pick2 === 3):
      // result
      pickLeft.src = "./paper.png";
      pickRight.src = "./scissors.png";
      //computers pick
      scissorsRight.classList.add("computer-pick")
      setTimeout(function () {
        scissorsRight.classList.remove("computer-pick")
      }, 500);
      youLose();
      loseCounter();
      break;

    case (pick === 2 && pick2 === 1):
      // result
      pickLeft.src = "./rock.png";
      pickRight.src = "./paper.png";
      //computers pick
      paperRight.classList.add("computer-pick")
      setTimeout(function () {
        paperRight.classList.remove("computer-pick")
      }, 500);
      youLose();
      loseCounter();
      break;

    case (pick === 3 && pick2 === 1):
      // result
      pickLeft.src = "./scissors.png";
      pickRight.src = "./paper.png";
      //computers pick
      paperRight.classList.add("computer-pick")
      setTimeout(function () {
        paperRight.classList.remove("computer-pick")
      }, 500);
      youWin();
      winCounter()
      break;

    case (pick === 2 && pick2 === 3):
      // result
      pickLeft.src = "./rock.png";
      pickRight.src = "./scissors.png";
      //computers pick
      scissorsRight.classList.add("computer-pick")
      setTimeout(function () {
        scissorsRight.classList.remove("computer-pick")
      }, 500);
      youWin();
      winCounter();
      break;

    case (pick === 3 && pick2 === 2):
      // result
      pickLeft.src = "./scissors.png";
      pickRight.src = "./rock.png";
      //computers pick
      rockRight.classList.add("computer-pick")
      setTimeout(function () {
        rockRight.classList.remove("computer-pick")
      }, 500);
      youLose();
      loseCounter();
      break;
  }
  e.preventDefault();
})

//Functions
function drawCounter() {
  drawNum++;
  draw.textContent = drawNum;
}

function winCounter() {
  winNum++;
  win.textContent = winNum;
}

function loseCounter() {
  loseNum++;
  lose.textContent = loseNum;
}

function youLose() {
  middle.style.display = 'block';
  message.innerText = "YOU LOSE";
  message.style.backgroundColor = "red";
}


function youDraw() {
  middle.style.display = 'block';
  message.innerText = "DRAW";
  message.style.backgroundColor = "orange";
}

function youWin() {
  middle.style.display = 'block';
  message.innerText = "YOU WIN";
  message.style.backgroundColor = "GREEN";
}