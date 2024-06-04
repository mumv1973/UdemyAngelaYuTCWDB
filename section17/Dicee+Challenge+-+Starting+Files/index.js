

function rollDice1() {
  let randomDicePlayer1 = Math.floor(Math.random() * 6) + 1;
  if (randomDicePlayer1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
  } else if (randomDicePlayer1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
  } else if (randomDicePlayer1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
  } else if (randomDicePlayer1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
  } else if (randomDicePlayer1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
  } else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
  }
  console.log(randomDicePlayer1);

  return randomDicePlayer1;
}

let diceResult1 = rollDice1();



function rollDice2() {
  let randomDicePlayer2 = Math.floor(Math.random() * 6) + 1;

  if (randomDicePlayer2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
  } else if (randomDicePlayer2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
  } else if (randomDicePlayer2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
  } else if (randomDicePlayer2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
  } else if (randomDicePlayer2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
  } else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  }

 
  console.log(randomDicePlayer2);
  return randomDicePlayer2;
}

let diceResult2 = rollDice2();



 if (rollDice1 > rollDice2) {
   document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
 } else if (rollDice2 > rollDice1) {
   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
 } else if (rollDice1 === rollDice2) {
   document.querySelector("h1").innerHTML = "Draw!";
 }

