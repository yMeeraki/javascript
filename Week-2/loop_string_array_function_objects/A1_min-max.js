// Assignment 1: Find Max & Min in an Array
// Program to find the maximum and minimum values in an unsorted array using array methods. 
// The array is sorted, and the first & last elements are used to determine min & max values. 
// Output is displayed in the format:
// "The maximum value is: [max]."
// "The minimum value is: [min]."



function findMin(numbers){
    // return numbers.sort()
}

const numbers = [4, 9, 2, 15, 6] 
const numbers2 = [10, -5, 0, 8, 22]



console.log(`
    For - [${numbers}]
    The minimum value is: ${numbers.sort(function (num1, num2){return ((num1-num2))})[0]}.
    The maximum value is: ${numbers.sort(function (num1, num2){return ((num2-num1))})[0]}.

    -------------------------------------------------------------------------------------------

    For - [${numbers2}]
    The minimum value is: ${numbers2.sort(function (num1, num2){return ((num1-num2))})[0]}.
    The maximum value is: ${numbers2.sort(function (num1, num2){return ((num2-num1))})[0]}.
    `)

