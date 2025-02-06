// Prompt the user to enter a number.
const prompt = require('prompt-sync')()
const number = parseInt(prompt('Enter a valid positive number: '))

determinePrime(number)

//  Function to determine whether the number is prime or not
function determinePrime(number){
    let isPrime = true      //  Set the boolean as true until non-prime number is found

if(number === 1){
    console.log('1 is not a prime number and it is not a composite number!')
}

else if(number>1){       // Check if the input is a valid positive integer.
    for(let i = 2; i<number/2; i++){        //  Loop to divide the number other than 1 and itself 
        if(number%i === 0){         //  If the number is divisible then
            isPrime = false         // set the boolean to false
            break                   //  And break the loop
        }
    }

    displayOutput(isPrime)          //  Function call to display function
}
else{           //  For invalid inputs
    console.log('The input is invalid (negative number, zero, string, special character)')          //  Display an error message.
}
}

// Function to display the result in the console  
function displayOutput(isPrime) {

if(isPrime){        //  For Prime
    console.log(`The number ${number} is a prime number.`)
}
else{               //  For Not Prime
    console.log(`The number ${number} is not a prime number.`)
}

}