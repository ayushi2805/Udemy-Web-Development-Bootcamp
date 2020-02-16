var age = prompt("Enter your age");
console.log("You have been alive from " + age*365 + " days");

if(age<0) {
	alert("The age can't be negative!");
}

else if(age<18) {
	console.log("Sorry, you cannot enter the bar");
}

else if (age<21) {
	console.log("You can enter the bar but cannot drink");
}

else if(age%2===1) {
	if (age==="21") {
		console.log("Your age is an odd number. Happy 21st birthday!!");
	}
	
	else if (age % Math.sqrt(age) == 0) {
		console.log("Your age is an odd number and a perfect square.")
	}

	else
		console.log("Your age is an odd number");
}

else if (age % Math.sqrt(age) == 0) {
		console.log("Your age is an odd number and a perfect square.");
}

else
	console.log("You can enter and drink");