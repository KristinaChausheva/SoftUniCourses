function solve(input) {
    let dogs = Number(input.shift());
    let restAnimals = Number(input.shift());
    let total = (dogs * 2.5) + (restAnimals * 4);

    console.log(`${total.toFixed(2)} lv.`);
    
}

solve([5, 4])