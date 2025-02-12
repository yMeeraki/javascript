// Generating All Combinations of a String
// A function can generate all possible combinations of characters in a given string.

// Example Input: "dog"
// Expected Output: "d, do, dog, o, og, g"

const prompt = require('prompt-sync')()
const userInput = prompt('Please Input: ')

function inputCombinations(userInput){
    const combinations = []

for(let i = 0; i<userInput.length;i++){
    // console.log("\n\n"+userInput[i])
    let temp='';
    for(let j=i;j<userInput.length;j++){
        temp += userInput[j]
        combinations.push(temp)
    }
}

console.log(combinations.join(', '))
}

inputCombinations(userInput)