// Assignment 5: Print an Isosceles Triangle Using *
// Program to print a centered isosceles triangle using the '' character.
// Takes user input for height (n) and prints n rows of increasing '' characters.
// Bonus: Allows users to choose a different character instead of '*'.

const prompt = require('prompt-sync')()

// Get user input (prompt-based for browser)
let height = parseInt(prompt("Enter height: "), 10);
let char = prompt("Enter Character: ")

// Validate input
if (!isNaN(height) && height > 0) {
    printTriangle(height, char);
} else {
    console.log("Invalid input. Please enter a positive integer for height.");
}

function printTriangle(height, char) {
    
    for (let i = 1; i <= height; i++) {
        let pattern = ""
        let spaces = ''
    
        // Add leading spaces to center the triangle
        for (let j = 0; j < height - i; j++) {
            spaces += " ";
        }

        // Create the pattern of characters
        for (let k = 0; k < 2 * i - 1; k++) {
            pattern += char;
            // console.log(pattern)
        }

        // Print the final row
        console.log(spaces + pattern);
    }
}
// console.log(pattern)