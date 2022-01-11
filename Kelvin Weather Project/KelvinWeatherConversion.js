// 1. The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
//   a. The value saved to kelvin will stay constant. Choose the variable type with this in mind.
const kelvin = 293;
//declaring a constant variable with 'const', naming the variable 'kelvin', setting the value to 293.


// 2. Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
// Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
const celsius = kelvin - 293;
//declaring a variable named 'celsius', setting the value to equal 'kelvin -293'.


// 3. Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
// Fahrenheit = Celsius * (9/5) + 32
// In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.
let fahrenheit = celsius * (9/5) + 32;


// 4. When you convert from Celsius to Fahrenheit, you often get a decimal number.
// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);


// 5 .Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:
// The temperature is TEMPERATURE degrees Fahrenheit.
// Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//converting celsius to fahrenheit with the method .floor();
