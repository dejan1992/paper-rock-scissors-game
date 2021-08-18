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

  // DRAW
  if (pick === pick2) {
    switch (pick) {
      case (pick === 1):
        pickLeft.src = "./paper.png";
        pickRight.src = "./paper.png";

        paperRight.classList.add("computer-pick")
        setTimeout(function () {
          paperRight.classList.remove("computer-pick")
        }, 500);
        break

      case (pick === 2):
        pickLeft.src = "./rock.png";
        pickRight.src = "./rock.png";
        rockRight.classList.add("computer-pick")

        setTimeout(function () {
          rockRight.classList.remove("computer-pick")
        }, 500);
        break

      case (pick === 3):
        pickLeft.src = "./scissors.png";
        pickRight.src = "./scissors.png";
        scissorsRight.classList.add("computer-pick")
        setTimeout(function () {
          scissorsRight.classList.remove("computer-pick")
        }, 500);
        break

    }

    middle.style.display = 'block';
    message.innerText = "DRAW";
    message.style.backgroundColor = "orange";

    // draw counter
    drawNum++;
    draw.textContent = drawNum;

    // WIN OR LOSSE
  } else if (pick === 1 & pick2 === 2) {
    middle.style.display = 'block';
    message.innerText = "YOU WIN";
    message.style.backgroundColor = "green";
    // result
    pickLeft.src = "./paper.png";
    pickRight.src = "./rock.png";

    // win counter
    winNum++;
    win.textContent = winNum;

    //computers pick
    rockRight.classList.add("computer-pick")
    setTimeout(function () {
      rockRight.classList.remove("computer-pick")
    }, 500)


  } else if (pick === 1 & pick2 === 3) {
    middle.style.display = 'block';
    message.innerText = "YOU LOSE";
    message.style.backgroundColor = "red";

    // result
    pickLeft.src = "./paper.png";
    pickRight.src = "./scissors.png";

    // lose counter
    loseNum++;
    lose.textContent = loseNum;

    //computers pick
    scissorsRight.classList.add("computer-pick")
    setTimeout(function () {
      scissorsRight.classList.remove("computer-pick")
    }, 500)

  } else if (pick === 2 & pick2 === 1) {
    middle.style.display = 'block';
    message.innerText = "YOU LOSE";
    message.style.backgroundColor = "red";

    // result
    pickLeft.src = "./rock.png";
    pickRight.src = "./paper.png";

    // lose counter
    loseNum++;
    lose.textContent = loseNum;

    paperRight.classList.add("computer-pick")
    setTimeout(function () {
      paperRight.classList.remove("computer-pick")
    }, 500)

  } else if (pick === 3 & pick2 === 1) {
    middle.style.display = 'block';
    message.innerText = "YOU WIN";
    message.style.backgroundColor = "GREEN";

    // result
    pickLeft.src = "./scissors.png";
    pickRight.src = "./paper.png";

    // win counter
    winNum++;
    win.textContent = winNum;

    paperRight.classList.add("computer-pick")
    setTimeout(function () {
      paperRight.classList.remove("computer-pick")
    }, 500)


  } else if (pick === 2 & pick2 === 3) {
    middle.style.display = 'block';
    message.innerText = "YOU WIN";
    message.style.backgroundColor = "green";

    // result
    pickLeft.src = "./rock.png";
    pickRight.src = "./scissors.png";

    // win counter
    winNum++;
    win.textContent = winNum;

    //computers pick
    scissorsRight.classList.add("computer-pick")
    setTimeout(function () {
      scissorsRight.classList.remove("computer-pick")
    }, 500)

  } else if (pick === 3 & pick2 === 2) {
    middle.style.display = 'block';
    message.innerText = "YOU LOSE";
    message.style.backgroundColor = "red";

    // result
    pickLeft.src = "./scissors.png";
    pickRight.src = "./rock.png";

    // lose counter
    loseNum++;
    lose.textContent = loseNum;

    //computers pick
    rockRight.classList.add("computer-pick")
    setTimeout(function () {
      rockRight.classList.remove("computer-pick")
    }, 500)
  }





  e.preventDefault();
})

