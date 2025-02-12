// Sorting a String Alphabetically
// Sorting the letters of a string in alphabetical order 

// Example Input: "webmaster"
// Expected Output: "abeemrstw"

const prompt = require('prompt-sync')()
const userInput = prompt('Please Input: ')

alphabeticalOrder(userInput)

function alphabeticalOrder(userInput){
    const inOrder = userInput.split('').sort().join('')
    console.log(inOrder)
}
