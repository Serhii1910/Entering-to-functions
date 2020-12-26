"use strict";

// isAdult();
//checkMultiplicity();
triangleChecking ();

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

function triangleChecking () {
	const side1 = +prompt('Enter lenght of first side');
	const side2 = +prompt('Enter lenght of second side');
	const side3 = +prompt('Enter lenght of third side');

	if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
		alert("Triangle may exist");
	}	else {
		alert("Triangle may not exist");
	}
}