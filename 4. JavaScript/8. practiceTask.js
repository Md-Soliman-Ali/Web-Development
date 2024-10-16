/*
Take four parameters. Multiply the four numbers and then return the result
*/

// function getMultiply(num1, num2, num3, num4) {
//     let result = num1 * num2 * num3 * num4;
//     return result;
// }

// let result = getMultiply(2, 3, 4, 5);
// console.log(result);

/*
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function checkNumber(num) {
    if (num % 2 == 1) {
        let result = num * 2;
        return result;
    }
    else {
        let result = num / 2;
        return result;
    }
}

let result = checkNumber(50);
console.log(result);

/*
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(num, size) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum / size;
}

let results = make_avg([10, 15, 25], 3);
console.log(results);

/*
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

let count = 0;
function count_zero(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            count++;
        }
    }
    return count
}

console.log(count_zero("1010101"));

/*
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/

function odd_even(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}

console.log(odd_even(7));