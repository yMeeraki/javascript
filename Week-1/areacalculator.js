// Prompt the user to select a shape from the following options:
// Circle
// Rectangle
// Triangle
// Square
const prompt = require('prompt-sync')()
const shape = prompt('Select a shape from the following options: Circle / Rectangle / Triangle / Square\t')

// -------------- Testing & Debugging-------------
// console.log(shape)

let area = 0;

switch(shape.toLowerCase()){    // Based on the user's choice

    case 'circle':      // For Circle: Ask for the radius and calculate the area using the formula
        const r = prompt("Enter the radius: ");    
        area = r**2*Math.PI;        // Area=π × r × r     (use Math.PI for 𝜋).
        console.log(`The area of the ${shape} is: ${area}.`)
        break;

    case 'rectangle':     // For Rectangle: Ask for the length and width and calculate the area using the formula 
        const l = prompt("Enter the Length: ");    
        const b = prompt("Enter the Width: "); 
        area = l*b       // Area= length× width.
        console.log(`The area of the ${shape} is: ${area}.`)
        break;

    case 'triangle':     // For Triangle: Ask for the base and height and calculate the area using the formula
        const base = prompt("Enter the base: ");    
        const height = prompt("Enter the height: "); 
        area = .5 * base * height       // Area = 0.5 ​× base × height.
        console.log(`The area of the ${shape} is: ${area}.`)
        break;

    case 'square':      // For Square: Ask for the side length and calculate the area using the formula: 
        const side = prompt("Enter the side length: "); 
        area = side**2       // Area=side × side.
        console.log(`The area of the ${shape} is: ${area}.`)
        break;
    
    default:        //  An invalid option, display an appropriate error message.
        console.log("Invalid shape selected. Please try again.")
        break
}













// Display the result in the console in the format:
// "The area of the [Shape] is: [calculated area]."
// If the user selects an invalid option, display an appropriate error message.


// Example Output:
// Input:
// Select shape: Circle
// Enter radius: 5

// Output:
// "The area of the Circle is: 78.54."

// Input:
// Select shape: Hexagon

// Output:
// "Invalid shape selected. Please try again."
