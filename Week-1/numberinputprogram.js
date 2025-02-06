// Assignment 4: Console-Based Number Input Program

// Objective: Create a Node.js console-based program that continuously takes input from the user until the user enters 0. Once 0 is entered, the program should terminate and display "End".

// Requirements:

// Use the prompt-sync package to take input from the user.
const prompt = require('prompt-sync')()
let flag=true



do{         // A loop, prompting the user to enter a number repeatedly.
    number = parseInt(prompt('Enter a valid positive number: '))

    

    if(number === 0){
        console.log(`User has entered: ${number}: END\n\n`)     // If the user enters 0, the program should display "End" and exit.
        flag = false;       //  Making flag 'false' 
        break           //  Using 'break' to exit the loop
    }
    else if(number>0){
        console.log(`User has entered: ${number}\n\n`)      // If the user enters any other number, the program should display the number 
    }
    else{
        console.log('Invalid Input\n\n')        // Handle invalid input (e.g., non-numeric input).
    }
    

}   while(flag)         //  Loop will run till value of flag is 'true'







