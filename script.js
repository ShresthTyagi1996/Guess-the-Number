'use strict';

// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 13;

// document.querySelector('.message').textContent = '🥳 Correct Number!';

// document.querySelector('.score').textContent = 19;

// console.log(document.querySelector('.guess').textContent);

// document.querySelector('.guess').value = 87;

let randomNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    debugger;
    document.querySelector('.message').textContent = '❌ No Number!';
    return;
  }
  if (guess > randomNumber) {
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < randomNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    if (highScore > score) {
      document.querySelector('.highscore').textContent = highScore;
    } else {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.message').textContent = ' 🥳 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.highscore').textContent = highScore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.floor(Math.random() * 20 + 1);
});
