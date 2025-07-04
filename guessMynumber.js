let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  displayMessage('Start Guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.body.style.backgroundColor = '#222';
});

// 1.get all the nodes from html
const again = window.document.querySelectorAll(".again");
const checkBtn = window.document.querySelectorAll(".check");
const message = window.document.querySelectorAll(".message");
const highscoreNodes = window.document.querySelectorAll(".highscore");
const scoreNodes = window.document.querySelectorAll(".score");
const numberNodes = window.document.querySelectorAll(".number");
const guessNodes = window.document.querySelectorAll(".guess");

// 2. generate a random number
let random = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
console.log(random);

// 3.check buttonfunctionality

const checkfunc = () => {
  const guessValue = Number(guessNodes[0].value);
  console.log(guessValue);

  //   check user has entered a number or not
  if (!guessValue) {
    message[0].textContent = " No number!";
  } else if (scores === 0) {
      message.textContent = "YPU HAVE LOST THE GAME";
      score.textContent = 0;
      document.querySelector("body").style.background = "#ff0000";
      document.querySelector("body").style.transition = "0.5s ease-in-out";
      guess.style.display = "none";
      checkbtn.style.display = "none";
      checkbtn.style.cursor = "not-allowed";
    }
  else if (guessValue === random) {
    highscoreNodes[0].textContent = scores;
    document.querySelector("body").style.backgroundColor = "green";
    numberNodes[0].textContent = random;
    message[0].textContent = "Correct Number!";
  } else if (guessValue > random) {
    scores -= 1;
    scoreNodes[0].textContent = scores;
    message[0].textContent = "Too high!";
  } else if (guessValue < random) {
    scores -= 1;
    scoreNodes[0].textContent = scores;
    message[0].textContent = "Too low!";
  } 
};
checkBtn[0].addEventListener('click', checkfunc);



