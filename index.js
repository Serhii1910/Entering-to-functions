"use strict";

// isAdult();
checkMultiplicity();

function isAdult () {
	const age = +prompt('Are you adult? Enter age');

	if (age >= 5) {
		alert('You are adult');
	} else {
		alert('You are not adult ');
	}
}

function checkMultiplicity () {
	const number1 = +prompt('Enter number 15 or 25');
	const number2 = +prompt('Enter one number 3, 4 or 5');

	const modulo = number1 / number2;
	if (modulo === 0) {
		alert('Divisible without residue');
	} else {
		alert('Not divisible without residue');
	}
}