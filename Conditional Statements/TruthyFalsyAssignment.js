let tool = 'marker';
//tool was an empty value for the code below to print a falsy and run 'pen' for the template literal
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';
//let writingUtensil = tool or pen
console.log(`The ${writingUtensil} is mightier than the sword.`);