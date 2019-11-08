function solve(input) {
    let L = Number(input.shift());
    let W = Number(input.shift());
    let A = Number(input.shift());

    let areaHall = L * W * 10000;
    
    let areaWardrobe = A * A * 10000;
    let areaBench = areaHall / 10;
    let areaFree = areaHall - areaWardrobe - areaBench;

    let countDancers = areaFree / 7040;

    console.log(`${Math.trunc(countDancers)}`);
    
}

solve([50, 25, 2])
