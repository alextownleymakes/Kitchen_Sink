// VARIABLES

var lineBreak = "\n"
let myName = "Alex Townley";
let myAge = "";
const stateCount = 50;
let arbitraryNumber = 5+4;
var favVeggies = ["peas", "sweet potatoes", "cucumbers"];
var hello = "Hello World";
var nameAge = new Array ( );
nameAge[0] = new Array ("Zac", 26), 
nameAge[1] = new Array ("Lee", 27), 
nameAge[2] = new Array ("Ellen", 20), 
nameAge[3] = new Array ("Haley", 25), 
nameAge[4] = new Array ("Camille", 18);

var pets = new Array ( );
pets[0] = new Array ( "Sheba", 13, "cat" );
pets[1] = new Array ( "Jasper", 12, "dog" );
alert ( pets[0][0] + " is a " + pets[0][1] + " year old " + pets[0][2] );
alert ( pets[1][0] + " is a " + pets[1][1] + " year old " + pets[1][2] ); 


// FUNCTIONS

function sayHello() {
	alert (hello + "!");
}

function checkAge(name,age) {
	if (age < 21) { 
		 console.log ("Sorry " + name + ", you aren't old enough to view this page!");
	}
}

function listVeggies (veggieArray) {
	for (var i = 0; i < veggieArray.length; i++) {
		console.log(veggieArray[i]);
	}
}

function getLength(myString) {
	let tempStr = myString.length;
	if (tempStr%2 == 0) {
		console.log('The world is nice and even!');
	} else {
		console.log('The world is an odd place!');
	}
	
}

function checkAgeLoop(infoStuff) {
	for (var i = 0; i < infoStuff.length; i++) {
		for (var j = 0; j < infoStuff.length; j++) {
				checkAge(infoStuff[i],infoStuff[j]);
		}
	}
}


// OUTPUT

sayHello(); 

console.log(lineBreak);

myName = "Charles", myAge = "21";
checkAge(myName,myAge);
myName = "Abby", myAge = "27";
checkAge(myName,myAge);
myName = "James", myAge = "18";
checkAge(myName,myAge);
myName = "John", myAge = "17";
checkAge(myName,myAge);

console.log(lineBreak);

listVeggies(favVeggies);

console.log(lineBreak);

checkAgeLoop(nameAge);

/*
console.log (nameAge[0]);
console.log (nameAge[1]);
console.log (nameAge[2]);
console.log (nameAge[3]);
console.log (nameAge[4]);
*/

getLength(hello);
