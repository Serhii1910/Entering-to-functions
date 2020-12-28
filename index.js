"use strict";

// isAdult();
//checkMultiplicity();
//triangleChecking ();
//rombSquare();
cylinderSquare();

function isAdult() {
	const age = +prompt('Are you adult? Enter age');

	if (age >= 5) {
		alert('You are adult');
	} else {
		alert('You are not adult ');
	}
}

function checkMultiplicity() {
	const number1 = +prompt('Enter number 15 or 25');
	const number2 = +prompt('Enter one number 3, 4 or 5');

	const modulo = number1 / number2;
	if (modulo === 0) {
		alert('Divisible without residue');
	} else {
		alert('Not divisible without residue');
	}
}

function triangleChecking() {
	const side1 = +prompt('Enter lenght of first side');
	const side2 = +prompt('Enter lenght of second side');
	const side3 = +prompt('Enter lenght of third side');

	if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
		alert("Triangle may exist");
	}	else {
		alert("Triangle may not exist");
	}
}

function rombSquare() {
	const rombLenght = +prompt('Enter lenght (if unknown skip)');
	const rombHeight = +prompt('Enter height (if unknown skip)');
	const rombDiagonal1 = +prompt('Enter diagonal1 (if unknown skip)');
	const rombDiagonal2 = +prompt('Enter diagonal2 (if unknown skip)');

	if(rombLenght === 0 || rombLenght === isNaN || rombHeight === 0 || rombHeight === isNaN) {
		if(rombDiagonal1 > 0 && rombDiagonal2 > 0) {
			const rombSquare = (rombDiagonal1 * rombDiagonal2) / 2;
			alert('Romb square is ' +rombSquare+ ' square units');
		}
	}
	if( rombDiagonal1 === 0 || rombDiagonal1 === isNaN || rombDiagonal2 === 0 || rombDiagonal2 === isNaN) {
		if(rombLenght > 0 && rombHeight > 0) {
			const rombSquare = rombLenght * rombHeight;
			alert('Romb square is ' +rombSquare+ ' square units');
		}
	}
}

function cylinderSquare() {
	const height = +prompt('Enter height');
	const radius = +prompt('Enter radius');

	const square = 2 * 3.14 * radius * (height + radius);
	alert('Площадь цилиндра навна ' +square+ ' квадратных едениц');
}