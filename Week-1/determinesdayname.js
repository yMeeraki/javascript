// Prompt the user to enter a number between 1 and 7.
const prompt = require('prompt-sync')()
const numberInput = ~~prompt("Please enter a number between 1 & 7: ");

/*
-------------- Testing & Debugging-------------
 console.log(`User has entered: ${numberInput}`)
*/

if(numberInput == 0){               //  Checking the input type.
    console.log(`Error:
        You have entered a invalid input like strings or special characters.
        `)
}

else if(numberInput>7){              // When the input is not within the range of 1 to 7

    // Display an error message.
    console.log(`Error:        
        ${numberInput} is not within the provided range (1-7)
        Please enter the number within the range.`)
}

else if(numberInput>0 && numberInput<=7){
    switch(numberInput){        //  Switch-case statement to map the number to the corresponding day of the week

        case 1:                 //  Monday
            console.log('The day is Monday.')
            break;

        case 2:                 //  Tuesday
            console.log('The day is Tuesday.')
            break;      

        case 3:                 //  Wednesday
            console.log('The day is Wednesday.')
            break;

        case 4:                 //  Thursday
            console.log('The day is Thursday.')
            break;   

        case 5:                 //  Friday
            console.log('The day is Friday.')
            break;

        case 6:                 //  Saturday
            console.log('The day is Saturday.')
            break;      

        case 7:                 //  Sunday
            console.log('The day is Sunday.')
            break;
       
    }
}
