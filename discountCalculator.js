function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;

    for (let i = 1; i <= quantity; i++) { 
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9; // Apply 10% discount
    }

    return totalPrice;
}

let Test = calculateDiscountedPrice(10,10)

console.log(Test)

module.exports = calculateDiscountedPrice;