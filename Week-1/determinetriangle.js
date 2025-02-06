// Use the prompt-sync package to take input from the user.
const prompt = require('prompt-sync')()
const a = ~~prompt('Enter a side value: ')
const b = ~~prompt('Enter b side value: ')
const c = ~~prompt('Enter c side value: ')


if((a+b)<c || (b+c)<a || (a+c)<b){
    console.log("Invalid Triangle")
}

// Conditions to check:
// If all three sides are equal → Equilateral Triangle
// If exactly two sides are equal → Isosceles Triangle
// If all sides are different → Scalene Triangle
// If the given sides do not form a valid triangle, print "Invalid Triangle"
else if((a+b)>c && (b+c)>a && (a+c)>b){
    const caseValue = (a === b && b === c) ? "equilateral" : 
    (a === b || b === c || a === c) ? "isosceles" : "scalene";

    switch (caseValue) {
        case "equilateral":
            console.log("Equilateral Triangle");
            break;
        case "isosceles":
            console.log("Isosceles Triangle");
            break;
        case "scalene":
            console.log("Scalene Triangle");
            break;
        default:
            console.log("Invalid Triangle");
    }
}

else{
    console.log('Invalid Input')
}





