const prompt = require('prompt-sync')()
const userInput = prompt('Please Input: ')

// Finding the Longest Word in a String
// This function identifies and returns the longest word from a given sentence.

// Example Input: "Web Development Tutorial"
// Expected Output: "Development"

function findLongest(userInput){
    const words = userInput.split(' ')

    let longest = words[0].length
    let longestWord = words[0]

    for(i=1; i<words.length; i++){
        if(longest<words[i].length){
            longest=words[i].length
            longestWord = words[i]
        }
    }

    return longestWord

}

console.log(findLongest(userInput))