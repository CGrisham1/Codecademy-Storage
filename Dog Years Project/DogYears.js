//Create a variable named myAge, and set it equal to your age as a number.
let myAge = 24;

//Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.
let earlyYears = 2;

//Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
earlyYears *= 10.5;

//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
//Set the result equal to a variable called laterYears.
let laterYears = myAge -2;

//Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

//Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);



//Let’s use a string method...
//Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
'Clay Grisham'.toLowerCase();
const myName = 'Clay Grisham';


// Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:
// My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);


