Week1-Assignments (Javascript)

Assignment: 1
Write a JavaScript program that determines the name of the day in a week based on a number input from the user. Use a switch-case statement to implement the logic.
Requirements:
Prompt the user to enter a number between 1 and 7.
Use a switch-case statement to map the number to the corresponding day of the week:
1: Monday
2: Tuesday
3: Wednesday
4: Thursday
5: Friday
6: Saturday
7: Sunday
If the input is not within the range of 1 to 7, display an appropriate error message.
Example Output:
Input: 3
Output: "The day is Wednesday."
Input: 9
Output: "Invalid input. Please enter a number between 1 and 7."
Extra Credit: Modify your program to handle invalid inputs like strings or special characters gracefully by checking the input type.



Assignment: 2
Create a console-based Area Calculator using JavaScript that takes user input and calculates the area of different shapes.
Requirements:
Prompt the user to select a shape from the following options:
Circle
Rectangle
Triangle
Square

Based on the user's choice:
For Circle: Ask for the radius and calculate the area using the formula:
Area=π × r × r     (use Math.PI for 𝜋).

For Rectangle: Ask for the length and width and calculate the area using the formula: 
Area=length×width.

For Triangle: Ask for the base and height and calculate the area using the formula: 
Area=0.5​×base×height.


For Square: Ask for the side length and calculate the area using the formula:
Area=side × side.
Display the result in the console in the format:
"The area of the [Shape] is: [calculated area]."
If the user selects an invalid option, display an appropriate error message.


Example Output:
Input:
Select shape: Circle
Enter radius: 5

Output:
"The area of the Circle is: 78.54."

Input:
Select shape: Hexagon

Output:
"Invalid shape selected. Please try again."





Assignment: 3
Prime Number Detector in JavaScript

Requirements:

Write a JavaScript program that checks whether a given number is a prime number or not.

Instructions:

Prompt the user to enter a number.

Check if the input is a valid positive integer.

Implement logic to determine whether the number is prime or not:

A prime number is a natural number greater than 1 that has no divisors other than 1 and itself.

Display the result in the console in the following format:

"The number [number] is a prime number."
"The number [number] is not a prime number."

If the input is invalid (negative number, zero, string, special character), display an appropriate error message.


Input: 7  
Output: "The number 7 is a prime number."

Input: 24  
Output: "The number 7 is not a prime number."





Assignment 4: Console-Based Number Input Program

Objective: Create a Node.js console-based program that continuously takes input from the user until the user enters 0. Once 0 is entered, the program should terminate and display "End".

Requirements:

Use the prompt-sync package to take input from the user.

The program should run in a loop, prompting the user to enter a number repeatedly.

If the user enters 0, the program should display "End" and exit.

If the user enters any other number, the program should display the number and continue prompting for input.

Handle invalid input gracefully (e.g., non-numeric input).








Assignment 5
Problem Statement:
Write a JavaScript program that takes three side lengths of a triangle as input from the user using prompt-sync and determines what kind of triangle it is.
Conditions to check:
If all three sides are equal → Equilateral Triangle
If exactly two sides are equal → Isosceles Triangle
If all sides are different → Scalene Triangle
If the given sides do not form a valid triangle, print "Invalid Triangle"
Use switch-case to implement this logic instead of if-else.
Example Runs:
Example 1:
Input:  a = 5, b = 5, c = 5  
Output: Equilateral Triangle

Example 2:
Input:  a = 6, b = 6, c = 9  
Output: Isosceles Triangle

Example 3:
Input:  a = 3, b = 4, c = 5  
Output: Scalene Triangle

Example 4:
Input:  a = 1, b = 2, c = 3  
Output: Invalid Triangle


Constraints:
Use prompt-sync to take user input.
Implement using switch-case instead of if-else.
Ensure the triangle is valid before classifying it.


