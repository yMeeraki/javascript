const prompt = require('prompt-sync')()
const userInput = prompt('Please Input: ')

// Checking if a Number is an Armstrong Number
// An Armstrong number is a number where the sum of its digits raised to the power of the total number of digits equals the number itself.

// Example: 153 → true, 370 → true

function isArmstrong(userInput){
    const numbers = userInput.split('')
    const totalDigits = numbers.length

 
    let sum = 0
    for(let i=0; i<totalDigits; i++){
        sum += Math.pow(numbers[i], totalDigits)
    }

    if(sum==userInput){
        return true
    }
    else{
        return false
    }

}

console.log(isArmstrong(userInput))