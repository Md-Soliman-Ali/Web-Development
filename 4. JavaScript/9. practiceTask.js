/*
Write a function to convert temperature from Celsius to Fahrenheit.
*/

function celsiusToFahrenheit(num) {
    return ((num * 9.0 / 5.0) + 32.0);
}
console.log(celsiusToFahrenheit(20));

/*
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98,5]
find: 5
output: 2
*/

function countRepeatedNumber(num, search) {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] == search) {
            count++;
        }
    }
    return count;
}
console.log(countRepeatedNumber([5, 6, 11, 12, 98, 5], 5));

/*
Write a function to count the number of vowels in a string.
*/

function countVowel(str) {
    let count = str.match(/[aeiou]/gi).length;
    return count;
}
console.log(countVowel("JavaScript Program"));

/*
Write a function to find the longest word in a given string.
sample-input: I am learning Programming to become a programmer
sample-output: Programming
*/

function longestWord(str) {
    const words = str.split(' ');
    let longWord = "";
    words.forEach((word) => {
        if (word.length > longWord.length) { longWord = word }
    })
    return longWord;
}

console.log(longestWord("I am learning Programming to become a programmer"));

/*
Generate a random number between 10 to 20.
*/

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomNumber(10, 20));