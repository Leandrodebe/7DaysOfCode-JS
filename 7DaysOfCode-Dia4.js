const secretNumber = Math.floor(Math.random() * 10) + 1;
alert('Welcome to the game of Secret Number!');

let rules = prompt('Do you want to know the rules, or do you already know how to play? Type 1 for yes and 2 for no.');

if (parseInt(rules) === 1) {
    alert('You can guess any number between 1 and 10.');
    alert('You will have only 3 chances to guess the number correctly.');
    alert('Good luck and have fun!');
}

alert('Go to the game');

let ranGuess = 0;
let guess;

while (ranGuess < 3) {
    guess = parseInt(prompt('Guess a number between 1 and 10.'));

    if (guess === secretNumber) {
        alert('Congratulations! You guessed the secret number! 🎉');
        break; 
    } else {
        ranGuess++;
        if (ranGuess === 3) {
            alert(`Unfortunately, you lost! The secret number was ${secretNumber}.`);
        } else {
            alert('You were wrong, try again.');
        }
    }
}

