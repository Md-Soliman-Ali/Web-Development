/*
Write a JavaScript code to reverse the array colors without using the reverse method.
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
Output: ['orange', 'yellow', 'green', 'blue', 'red']
*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reversedArray = [];

for (let i = colors.length - 1; i >= 0; i--) {
    reversedArray.push(colors[i]);
}
console.log(reversedArray)

/*
Write a JavaScript code to get the even numbers from an array using any looping technique.
Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
Output: [12, 98, 76, 46]
*/

const numbers = [12, 98, 5, 41, 23, 78, 46];
let even = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        even.push(numbers[i]);
    }
}
console.log(even);

/*
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
Input: const statement = 'I am a hard working person'
Output: 'person working hard a am I'
*/

const statement = 'I am a hard working person'
let reverseStatement = statement.split(" ").reverse().join(" ")
console.log(reverseStatement)