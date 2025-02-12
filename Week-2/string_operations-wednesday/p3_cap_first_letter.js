const prompt = require('prompt-sync')()
const userInput = prompt('Please Input: ')

// Capitalizing the First Letter of Each Word
// This function ensures that each word in a sentence starts with an uppercase letter.

// Example Input: "the quick brown fox"
// Expected Output: "The Quick Brown Fox"

function capitalFirstLetter(userInput){
    const inputArray = userInput.split(' ');
    for(let i=0; i<inputArray.length; i++){
        inputArray[i] = inputArray[i].charAt(0).toUpperCase()+inputArray[i].slice(1)
    }
    console.log(inputArray.join(' '))
}

capitalFirstLetter(userInput)