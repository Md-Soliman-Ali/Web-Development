/*
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

const heights2 = [167, 190, 120, 165, 137];
console.log(Math.min(...heights2));

/*
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

function findSmallest(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let word = arr[i];
        if (word.length < smallest.length) {
            smallest = word;
        }
    }
    return smallest;
}
console.log(findSmallest(['rahim', 'robin', 'rafi', 'ron', 'rashed']));

/*
Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(num1, num2, num3) {
    let noOfLaptop = 35000 * num1;
    let noOfTablets = 15000 * num2;
    let noOfMobile = 20000 * num3;
    return totalMoney = noOfLaptop + noOfTablets + noOfMobile;
}
console.log(calculateElectronicsBudget(1, 1, 1));

/*
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
Input
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
*/

function findAveragePhonePrice(phones) {
    let sum = 0;
    let length = phones.length;
    for (let phone of phones) {
        sum = sum + phone.price;
    }
    return averagePrice = sum / length;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log(findAveragePhonePrice(phones));

/*
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary.Now calculate is the total salary has to be provided by the company in a month.

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
*/

function calculateTotalSalary(employees) {
    let totalSalary = 0;

    employees.forEach(employee => {
        let currentSalary = employee.starting + (employee.increment * employee.experience);
        totalSalary += currentSalary;
    });
    return totalSalary;
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

console.log("Total salary to be provided by the company:", calculateTotalSalary(employees));
