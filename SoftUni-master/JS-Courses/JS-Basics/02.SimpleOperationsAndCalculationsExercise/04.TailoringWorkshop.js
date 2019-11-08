function solve(input) {
    let countTables = Number(input.shift());
    let lengthTables = Number(input.shift());
    let widthTables = Number(input.shift());

    let coverArea = (lengthTables + 0.6) * (widthTables + 0.6);
    let kareArea = lengthTables * lengthTables / 4;
    
    let totalcoverArea = coverArea * countTables;
    let totalkareArea = kareArea * countTables;

    let priceCoverUSD = totalcoverArea * 7;
    let priceKareUSD = totalkareArea * 9;
    let totalPriceUSD = priceCoverUSD + priceKareUSD;

    let priceCoverBGN = priceCoverUSD * 1.85;
    let priceKareBGN = priceKareUSD * 1.85;
    let totalPriceBGN = priceCoverBGN + priceKareBGN;

    console.log(`${totalPriceUSD.toFixed(2)} USD`);
    console.log(`${totalPriceBGN.toFixed(2)} BGN`);
    
    
}

solve([5, 1.00, 0.50])