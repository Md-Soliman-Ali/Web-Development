function calculateMoney(ticketSale) {
    if (ticketSale <= 0) {
        return "Invalid Number"
    }
    return (ticketSale * 120) - (500 + (8 * 50));
}
console.log(calculateMoney(10));

function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }
    const lastChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    if (lastChar.includes(name.toLowerCase()[name.length - 1])) {
        return "Good Name";
    }
    else {
        return "Bad Name";
    }
}
console.log(checkName("RAFEE"))

// let array = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// let result = array.reduce(function (arr, input) {
//     if (typeof input == 'number') {
//         arr.push(input);
//     }
//     const newArray = arr.filter(arr => !Number.isNaN(arr));
//     return newArray;
// }, []);
// console.log(result);

function password(obj) {
    if (obj.birthYear.toString().length <= 3 || obj.siteName == null) {
        return "invalid"
    }
    siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    return siteName.concat("#", obj.name, "@", obj.birthYear);
}
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));

function monthlySavings(payments, livingCost) {
    const savingsArray = [];
    let sumSavingsArray = 0;
    let amountAfterTax = 0;
    for (let i = 0; i < payments.length; i++) {
        const payment = payments[i];
        if (payment >= 3000) {
            const tax = payment * 0.20;
            amountAfterTax = payment - tax;
        }
        else {
            savingsArray.push(payments[i]);
            sumSavingsArray += savingsArray[i];
        }
    }
    let x = (amountAfterTax + sumSavingsArray) - livingCost;
    if (x >= 0) {
        return x;
    }
    else {
        return "earn more";
    }
}
console.log(monthlySavings([1000, 2000, 2500], 5000));