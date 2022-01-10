const kelvin = 293;
//declaring a constant variable with 'const', naming the variable 'kelvin', setting the value to 293.
const celsius = kelvin - 293;
//declaring a variable named 'celsius', setting the value to equal 'kelvin -293'.
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//converting celsius to fahrenheit with the method .floor();