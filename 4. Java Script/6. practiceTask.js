/*
Count how many times a string has the letter a or A
*/

// let str = "A man is as good as his word";
// console.log(str.toLowerCase().split('a').length - 1);

/*
Check whether a string contains all the vowels a, e, i, o, u
*/

// let str = "Educationist";
// str = str.toLowerCase();
// let flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == 'a') {
//         flag1 = 1;
//     }
//     if (str.charAt(i) == 'e') {
//         flag2 = 1;
//     }
//     if (str.charAt(i) == 'i') {
//         flag3 = 1;
//     }
//     if (str.charAt(i) == 'o') {
//         flag4 = 1;
//     }
//     if (str.charAt(i) == 'u') {
//         flag5 = 1;
//     }
// }

// if (flag1 == 1 && flag2 == 1 && flag3 == 1 && flag4 == 1 && flag5 == 1) {
//     console.log("All vowels are present");
// }
// else {
//     console.log("Try Again and Again Until You Succeed");
// }

/*
If a given string has either x, replace x by y
*/

// let str = "Mr x has a X house and a x car";
// let result = str.toLowerCase().replaceAll(/x/g, "y");
// console.log(result);

/*
Capitalize Every first Letter of each word in a String
*/

let str = "Mr x has a X house and a x car";
let result = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
console.log(result);