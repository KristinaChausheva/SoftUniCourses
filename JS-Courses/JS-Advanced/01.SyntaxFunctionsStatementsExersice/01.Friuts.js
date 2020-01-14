function solve(fruit, weight, price) {
    let fruits = fruit;
    let weightInGrams = Number(weight);
    let pricePerKilo = Number(price);
    let totalPrice = weightInGrams/1000 * pricePerKilo;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(weightInGrams/1000).toFixed(2)} kilograms ${fruits}.`);
    
}


solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);