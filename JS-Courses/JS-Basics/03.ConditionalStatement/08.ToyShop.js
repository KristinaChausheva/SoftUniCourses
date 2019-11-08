function toy(input) {
    let priceTrip = Number(input.shift());
    let numPuzzles = Number(input.shift());
    let numDolls = Number(input.shift());
    let numBears = Number(input.shift());
    let numMin = Number(input.shift());
    let numTrucks = Number(input.shift());

    const pricePuzzles = 2.6;
    const priceDolls = 3;
    const priceBears = 4.1;
    const priceMin = 8.2;
    const priceTrucks = 2;

    let numToys = numPuzzles + numDolls + numBears + numMin + numTrucks;
    let sume = pricePuzzles * numPuzzles + priceDolls * numDolls + priceBears * numBears + priceMin * numMin + priceTrucks * numTrucks;

    if(numToys >=50) {
        let discount = sume /4 ;
        let sumAfterDiscount = sume - discount;

        let rent = sumAfterDiscount* 0.1;
        let totalSum = sumAfterDiscount - rent;
        if (totalSum >= priceTrip) {
            let leftSum = totalSum - priceTrip;
            
           
            console.log(`Yes! ${leftSum.toFixed(2)} lv left.`);
                
        } 
        else {
            let neededMoney = priceTrip - totalSum;
            console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
            
        }
    }
    else {
        let rent = sume* 0.1;
        let totalSum = sume - rent;
        if (totalSum >= priceTrip) {
            let leftSum = totalSum - priceTrip;
            console.log(`Yes! ${leftSum.toFixed(2)} lv left.`);
                
        } 
        else {
            let neededMoney = priceTrip - totalSum;
            console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
            
        }
    }
}

toy(["40.8", "20", "25", "30", "50", "10"])