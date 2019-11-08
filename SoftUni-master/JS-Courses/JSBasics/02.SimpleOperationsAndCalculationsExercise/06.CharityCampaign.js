function solve(input) {
    let days = Number(input.shift());
    let bakers = Number(input.shift());
    let cakes = Number(input.shift());
    let waffles = Number(input.shift());
    let pancakes = Number(input.shift());

    let sumForADay = (cakes * 45.0 + waffles * 5.8 + pancakes * 3.2) * bakers;
    let sumCampaign = sumForADay * days;
    let expences = sumCampaign / 8;
    let totalSum = sumCampaign - expences;

    console.log(`${totalSum.toFixed(2)}`);
    
}

solve([131, 5 , 9, 33, 46])