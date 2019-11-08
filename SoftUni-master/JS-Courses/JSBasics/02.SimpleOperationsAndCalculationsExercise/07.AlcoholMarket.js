function solve(input) {
    let priceWhisky = Number(input.shift());
    let qBeer = Number(input.shift());
    let qWine = Number(input.shift());
    let qRakia = Number(input.shift());
    let qWhisky = Number(input.shift());

    let priceRakia = priceWhisky / 2;
    let priceWine = priceRakia - (priceRakia * 0.4);
    let priceBeer = priceRakia - priceRakia * 0.8;

    let sumBeer = priceBeer * qBeer;
    let sumWine = qWine * priceWine;
    let sumRakia = qRakia * priceRakia;
    let sumWhisky = qWhisky * priceWhisky;

    let totalSum = sumBeer + sumWhisky + sumWine + sumRakia;

    console.log(`${totalSum.toFixed(2)}`);
    

}

solve([50, 10, 3.5, 6.5, 1])