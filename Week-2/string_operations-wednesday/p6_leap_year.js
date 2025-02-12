const prompt = require('prompt-sync')()
const year = ~~prompt('Please Input the year: ')

// Checking if a Year is a Leap Year
// A leap year occurs every 4 years, except for years divisible by 100 that are not divisible by 400.

// Example: 2024 → true

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(year))