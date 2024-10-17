function calculateMoney(ticketSale) {
    if (ticketSale <= 0) {
        return "Invalid Number"
    }
    return (ticketSale * 120) - (500 + (8 * 50));
}
console.log(calculateMoney(10));