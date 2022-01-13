//Change the value of wordCount so that it is truthy. This value should still be a number.
let wordCount = 1;
//changed the value of wordCount to equal 1 instead of 0 to run the if statement.
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
};


//Change the value of favoritePhrase so that it is still a string but falsy.
//After you make this change and run your code, 'This string is definitely empty.' should log to the console.
let favoritePhrase = '';
//I deleted the string that was present in the favoritePhrase declaration to trigger the else statement
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
};