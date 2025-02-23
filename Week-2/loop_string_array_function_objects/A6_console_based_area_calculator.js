// Assignment 6: Console-Based Area Calculator
// Console-based program to calculate the area of different shapes.
// Defines separate functions for circle, rectangle, triangle, and square.
// Prompts the user to select a shape and calls the appropriate function.
// Handles invalid inputs gracefully.
calculateArea()


function calculateArea() {
    
    const prompt = require('prompt-sync')()
    const shape = prompt('Select a shape from the following options: Circle / Rectangle / Triangle / Square\t') 

    switch(shape.toLowerCase()){    // Based on the user's choice

        case 'circle':      // For Circle: Ask for the radius and calculate the area using the formula
            const r = prompt("Enter the radius: ");    
           
            console.log(`The area of the ${shape} is: ${calculateCircleArea(r)}.`)
            break;

        case 'rectangle':     // For Rectangle: Ask for the length and width and calculate the area using the formula 
            const l = prompt("Enter the Length: ");    
            const b = prompt("Enter the Width: "); 
            console.log(`The area of the ${shape} is: ${calculateRectangleArea(l,b)}.`)
            break;

        case 'triangle':     // For Triangle: Ask for the base and height and calculate the area using the formula
            const base = prompt("Enter the base: ");    
            const height = prompt("Enter the height: "); 
            console.log(`The area of the ${shape} is: ${calculateTriangleArea(base,height)}.`)
            break;

        case 'square':      // For Square: Ask for the side length and calculate the area using the formula: 
            const side = prompt("Enter the side length: "); 
           
            console.log(`The area of the ${shape} is: ${calculateSquareArea(side)}.`)
            break;
        
        default:        //  An invalid option, display an appropriate error message.
            console.log("Invalid shape selected. Please try again.")
            break
    }
}

function calculateCircleArea(radius) {
    return radius**2*Math.PI; 
}

function calculateRectangleArea(length, width) {
    return length*width
}
function calculateTriangleArea(base, height) {
    return base*height*.5
}
function calculateSquareArea(side) {
    return side **2
}
