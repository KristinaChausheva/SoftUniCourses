function solve(input) {
    let sqm = Number(input.shift());
    let totalPrice = sqm * 7.61;
    let discount = totalPrice *18 / 100;
    let finalPrice = totalPrice - discount;

    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
    
    
}

solve([540])