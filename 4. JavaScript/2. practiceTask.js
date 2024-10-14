/*
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burger = 400;
if (burger > 500) {
    console.log("Free Coke");
}
else {
    console.log("Additional Coke 30TK");
}

/*
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

let BMI = 20;
if (BMI < 18.5) {
    console.log("You are Underweight");
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("You are Normal");
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log("You are Overweight");
}
else {
    console.log("You are Obese");
}

/*
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
*/

let grade = 85;
if (grade >= 90 && grade <= 100) {
    console.log("A");
}
else if (grade >= 80 && grade <= 89) {
    console.log("B");
}
else if (grade >= 70 && grade <= 79) {
    console.log("C");
}
else if (grade >= 60 && grade <= 69) {
    console.log("D");
}
else {
    console.log("F");
}

/*
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad
*/

let myScore = 75;
let friendScore = 39;
if (myScore > 80) {
    if (friendScore >= 80) {
        console.log("Go For a Lunch");
    }
    else if (friendScore < 80 && friendScore >= 60)
        console.log("Good Luck Next Time");
    else if (friendScore < 60 && friendScore >= 40)
        console.log("Message Unseen");
    else {
        console.log("Block Your Friend");
    }
}
else {
    console.log("Go to Home and Sleep and Act Sad");
}

/*
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.
 */

let num1 = 10;
let num2 = 5;
var result;
if (num1 > num2) {
    console.log(result = num1 * 2);
}
else {
    console.log(result = num1 + num2);
}

console.log(result = (num1 > num2) ? num1 * 2 : num1 + num2)

/*
Ticket fare Calculator
    - Children (age < 10): free
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 60;
let ticketFare = 800;
if (age < 10) {
    console.log("Free")
}
else if (age >= 60) {
    console.log(ticketFare - ticketFare * 15 / 100);
}
else {
    console.log(ticketFare)
}