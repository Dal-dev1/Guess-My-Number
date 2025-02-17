'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //where there is no input

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber && guess > secretNumber && score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '😕 Too high!';
  } else if (guess !== secretNumber && guess < secretNumber && score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '😕 Too low!';
  } else {
    document.querySelector('.message').textContent = '😥 You lost';
    document.querySelector('body').style.backgroundColor = '#ff0000';
  }
});
//when guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '😕 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😥 You lost';
//     }

//     //when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '😕 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😥 You lost';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
