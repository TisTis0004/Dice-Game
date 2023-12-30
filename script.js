let btn = document.querySelector("input");
let player1 = document.querySelector(".die1");
let player2 = document.querySelector(".die2");
let circles = document.querySelectorAll(".circle");
btn.onclick = () => {
  for (let i = 0; i < circles.length; i++) {
    for (let j = 0; j < 7; j++) {
      circles[i].classList.remove(`circle${j + 1}`);
    }
  }
  let random1 = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;
  console.log(`Player one got : ${random1}`);
  console.log(`Player two got : ${random2}`);
  console.log(random1);
  if (random1 === 1) {
    circles[0].classList.add("circle1");
  } else if (random1 === 2) {
    circles[1].classList.add("circle2");
    circles[2].classList.add("circle3");
  } else if (random1 === 3) {
    circles[0].classList.add("circle1");
    circles[1].classList.add("circle2");
    circles[2].classList.add("circle3");
  } else if (random1 === 4) {
    circles[0].classList.add("circle2");
    circles[1].classList.add("circle3");
    circles[2].classList.add("circle4");
    circles[3].classList.add("circle5");
  } else if (random1 === 5) {
    circles[0].classList.add("circle1");
    circles[1].classList.add("circle2");
    circles[2].classList.add("circle3");
    circles[3].classList.add("circle4");
    circles[4].classList.add("circle5");
  } else if (random1 === 6) {
    circles[0].classList.add("circle2");
    circles[1].classList.add("circle3");
    circles[2].classList.add("circle4");
    circles[3].classList.add("circle5");
    circles[4].classList.add("circle6");
    circles[5].classList.add("circle7");
  }
  if (random2 === 1) {
    circles[6].classList.add("circle1");
  } else if (random2 === 2) {
    circles[7].classList.add("circle2");
    circles[8].classList.add("circle3");
  } else if (random2 === 3) {
    circles[6].classList.add("circle1");
    circles[7].classList.add("circle2");
    circles[8].classList.add("circle3");
  } else if (random2 === 4) {
    circles[6].classList.add("circle2");
    circles[7].classList.add("circle3");
    circles[8].classList.add("circle4");
    circles[9].classList.add("circle5");
  } else if (random2 === 5) {
    circles[6].classList.add("circle1");
    circles[7].classList.add("circle2");
    circles[8].classList.add("circle3");
    circles[9].classList.add("circle4");
    circles[10].classList.add("circle5");
  } else if (random2 === 6) {
    circles[6].classList.add("circle2");
    circles[7].classList.add("circle3");
    circles[8].classList.add("circle4");
    circles[9].classList.add("circle5");
    circles[10].classList.add("circle6");
    circles[11].classList.add("circle7");
  }
  let title = document.querySelector("h1");
};
