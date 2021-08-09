'use strict';

let secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!';
    }
    else if(guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Answer!';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('footer').style.backgroundColor = '#222';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess > secretNumber) {
        if(score > 1){
        document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if(guess < secretNumber) {
        if(score > 1 ) {
        document.querySelector('.message').textContent = '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
   
});



document.querySelector('.again').addEventListener('click', function() {
    
    secretNumber = Math.trunc(Math.random()*20+1);
    score = 20; 

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('footer').style.backgroundColor = '#60b347';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
});
