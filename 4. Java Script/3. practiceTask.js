/*
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/

let fruits = ["Apple", "Banana", "Avocados", "Olive", "Papaya"];
console.log(fruits[3]);
fruits[2] = "jambura";
console.log(fruits);

/*
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/

let destinations = ["Bogura", "Dhaka", "Khulna"];
destinations.push("India");
destinations.push("Japan", "China");
destinations.pop();
console.log(destinations);

/*
Create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.
Print a message to the console indicating whether the element is present in the array or not.
*/

let books = ["Don Quixote", "Miguel de Cervantes", "Alice's Adventures in Wonderland", "Lewis Carroll"];
console.log(books.includes("Miguel de Cervantes"));

/*
Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not.
*/

let array = ["Hello", "World"];
let nonArray = 7;
console.log(Array.isArray(array) + " means is an Array");
console.log(Array.isArray(nonArray) + " means not an Array");

/*
Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/

let arrayOne = [1, 3, 5, 7, 9];
let arrayTwo = [2, 4, 6, 8];
let arrayCombined = arrayOne.concat(arrayTwo);
console.log(arrayOne, arrayTwo, arrayCombined);