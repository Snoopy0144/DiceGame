"use script";
//Generate random
let random = Math.floor(Math.random() * 6 + 1);
for (let i = 0; i < 100; i++) {
  console.log(random);
}
//Current score
let score = 0;
let total = 0;
let total1 = 0;

//Player1
let player0 = document.querySelector(".player--0");
let name0 = document.querySelector("#name--0");
let score0 = function (inner) {
  document.querySelector("#score--0").innerHTML = inner;
};
let currentVal0 = function (inner) {
  document.querySelector("#current--0").innerHTML = inner;
};

//Player2
let player1 = document.querySelector(".player--1");
let name1 = document.querySelector("#name--1");
console.log(name1.innerHTML);
let score1 = function (inner) {
  document.querySelector("#score--1").innerHTML = inner;
};
let currentVal1 = function (inner) {
  document.querySelector("#current--1").innerHTML = inner;
};

//New
let New = document.querySelector(".btn--new");
//Roll the dice
let roll = document.querySelector(".btn--roll");
//Hold the value
let hold = document.querySelector(".btn--hold");

//Display dice roll
let dice = document.querySelector(".dice");

roll.addEventListener("click", function () {
  random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
  switch (random) {
    case 1:
      dice.src = `png/dice-${random}.png`;
      break;
    case 2:
      dice.src = `png/dice-${random}.png`;
      break;
    case 3:
      dice.src = `png/dice-${random}.png`;
      break;
    case 4:
      dice.src = `png/dice-${random}.png`;
      break;
    case 5:
      dice.src = `png/dice-${random}.png`;
      break;
    case 6:
      dice.src = `png/dice-${random}.png`;
      break;
  }
  if (random === 1) {
    //player switch
    score = 0;
    if (player0.classList.contains("player--active")) {
      player0.classList.remove("player--active");
      player1.classList.add("player--active");
      currentVal0(score);
    } else {
      player1.classList.remove("player--active");
      player0.classList.add("player--active");
      currentVal1(score);
    }
  } else {
    //add dice to current
    score += random;
    if (player0.classList.contains("player--active")) {
      currentVal0(score);
    } else {
      currentVal1(score);
    }
  }
});

let disabled = function () {
  roll.disabled = "true";
  hold.disabled = "true";
  roll.classList.add("disabled");
  hold.classList.add("disabled");
};

hold.addEventListener("click", function () {
  if (player0.classList.contains("player--active")) {
    total += score;
    score0(total);
    if (total >= 100) {
      disabled();
      player0.classList.add("player--winner");
    }
    score = 0;
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
    currentVal0(score);
  } else {
    total1 += score;
    score1(total1);
    if (total1 >= 100) {
      disabled();
      player1.classList.add("player--winner");
    }
    score = 0;
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
    currentVal1(score);
  }
});
