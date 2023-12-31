let playBtn = document.querySelector(".play-btn");
let modeBtn = document.querySelector(".mode-btn");
let resetBtn = document.querySelector(".reset-btn");
let players = document.querySelectorAll(".player");
let circles = document.querySelectorAll(".circle");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let title = document.querySelector("h1");
let die1 = document.querySelector(".die1");
let die2 = document.querySelector(".die2");
function emptyDice() {
  for (let i = 0; i < circles.length; i++) {
    for (let j = 0; j < 7; j++) {
      circles[i].classList.remove(`circle${j + 1}`);
      circles[i].style.visibility = "hidden";
    }
  }
}
playBtn.onclick = () => {
  if (players[0].value !== "" && players[1].value !== "") {
    emptyDice();
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    if (random1 === 1) {
      circles[0].classList.add("circle1");
      circles[0].style.visibility = "visible";
    } else if (random1 === 2) {
      circles[1].classList.add("circle2");
      circles[2].classList.add("circle3");
      circles[1].style.visibility = "visible";
      circles[2].style.visibility = "visible";
    } else if (random1 === 3) {
      circles[0].classList.add("circle1");
      circles[1].classList.add("circle2");
      circles[2].classList.add("circle3");
      circles[0].style.visibility = "visible";
      circles[1].style.visibility = "visible";
      circles[2].style.visibility = "visible";
    } else if (random1 === 4) {
      circles[0].classList.add("circle2");
      circles[1].classList.add("circle3");
      circles[2].classList.add("circle4");
      circles[3].classList.add("circle5");
      circles[0].style.visibility = "visible";
      circles[1].style.visibility = "visible";
      circles[2].style.visibility = "visible";
      circles[3].style.visibility = "visible";
    } else if (random1 === 5) {
      circles[0].classList.add("circle1");
      circles[1].classList.add("circle2");
      circles[2].classList.add("circle3");
      circles[3].classList.add("circle4");
      circles[4].classList.add("circle5");
      circles[0].style.visibility = "visible";
      circles[1].style.visibility = "visible";
      circles[2].style.visibility = "visible";
      circles[3].style.visibility = "visible";
      circles[4].style.visibility = "visible";
    } else if (random1 === 6) {
      circles[0].classList.add("circle2");
      circles[1].classList.add("circle3");
      circles[2].classList.add("circle4");
      circles[3].classList.add("circle5");
      circles[4].classList.add("circle6");
      circles[5].classList.add("circle7");
      circles[0].style.visibility = "visible";
      circles[1].style.visibility = "visible";
      circles[2].style.visibility = "visible";
      circles[3].style.visibility = "visible";
      circles[4].style.visibility = "visible";
      circles[5].style.visibility = "visible";
    }
    if (random2 === 1) {
      circles[6].classList.add("circle1");
      circles[6].style.visibility = "visible";
    } else if (random2 === 2) {
      circles[7].classList.add("circle2");
      circles[8].classList.add("circle3");
      circles[7].style.visibility = "visible";
      circles[8].style.visibility = "visible";
    } else if (random2 === 3) {
      circles[6].classList.add("circle1");
      circles[7].classList.add("circle2");
      circles[8].classList.add("circle3");
      circles[6].style.visibility = "visible";
      circles[7].style.visibility = "visible";
      circles[8].style.visibility = "visible";
    } else if (random2 === 4) {
      circles[6].classList.add("circle2");
      circles[7].classList.add("circle3");
      circles[8].classList.add("circle4");
      circles[9].classList.add("circle5");
      circles[6].style.visibility = "visible";
      circles[7].style.visibility = "visible";
      circles[8].style.visibility = "visible";
      circles[9].style.visibility = "visible";
    } else if (random2 === 5) {
      circles[6].classList.add("circle1");
      circles[7].classList.add("circle2");
      circles[8].classList.add("circle3");
      circles[9].classList.add("circle4");
      circles[10].classList.add("circle5");
      circles[6].style.visibility = "visible";
      circles[7].style.visibility = "visible";
      circles[8].style.visibility = "visible";
      circles[9].style.visibility = "visible";
      circles[10].style.visibility = "visible";
    } else if (random2 === 6) {
      circles[6].classList.add("circle2");
      circles[7].classList.add("circle3");
      circles[8].classList.add("circle4");
      circles[9].classList.add("circle5");
      circles[10].classList.add("circle6");
      circles[11].classList.add("circle7");
      circles[6].style.visibility = "visible";
      circles[7].style.visibility = "visible";
      circles[8].style.visibility = "visible";
      circles[9].style.visibility = "visible";
      circles[10].style.visibility = "visible";
      circles[11].style.visibility = "visible";
    }
    if (random1 > random2) {
      title.innerText = `🚩 ${
        players[0].value.charAt(0).toUpperCase() +
        players[0].value.slice(1, players[0].value.length)
      } won`;
      score1.innerText = Number(score1.innerText) + 1;
    } else if (random2 > random1) {
      title.innerText = `${
        players[1].value.charAt(0).toUpperCase() +
        players[1].value.slice(1, players[1].value.length)
      } won 🚩`;
      score2.innerText = Number(score2.innerText) + 1;
    } else {
      title.innerText = "🤝 DRAW 🤝";
      score1.innerText = Number(score1.innerText) + 1;
      score2.innerText = Number(score2.innerText) + 1;
    }
  }
};
players[0].onclick = () => {
  players[0].setAttribute("placeholder", "");
};
players[1].onclick = () => {
  players[1].setAttribute("placeholder", "");
};
resetBtn.onclick = () => {
  emptyDice();
  score1.innerText = 0;
  score2.innerText = 0;
  players[0].value = "";
  players[1].value = "";
  players[0].setAttribute("placeholder", "Enter your Name");
  players[1].setAttribute("placeholder", "Enter your Name");
  title.innerText = "The Dice Game";
};
let colors = ["white", "red", "blue", "green"],
  cnt = 0;
modeBtn.onclick = () => {
  if (die1.classList.contains(`background-mode-white`))
    for (let i = 0; i < circles.length; i++) {
      circles[i].classList.add("circle-mode-black");
      circles[i].classList.remove("circle-mode-white");
    }
  else
    for (let i = 0; i < circles.length; i++) {
      circles[i].classList.add("circle-mode-white");
      circles[i].classList.remove("circle-mode-black");
    }
  die1.classList.remove(`background-mode-${colors[cnt - 1]}`);
  die1.classList.toggle(`background-mode-${colors[cnt]}`);
  if (cnt === colors.length - 1) cnt = 0;
  else cnt++;
  die1.classList.toggle(`background-mode-${colors[cnt]}`);
  // if (cnt !== colors.length - 1)
  // else cnt = 0;
};
