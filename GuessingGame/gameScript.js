var num = 12;
var guess = prompt("Guess the number");

while(!(Number(guess) === num)) {
	if (guess>num) {
		guess = prompt("Guess too high. Try again");
	}

	else if (guess<num) {
		guess = prompt("Guess too low. Try again");
	}
}

alert("You got the number!");
