'use strict';

const secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = 'No Number! 🙄')
    );
    //When player wins
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 😁';
    document.querySelector('.number').textContent = secreteNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game 👎';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game 👎';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secreteNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
