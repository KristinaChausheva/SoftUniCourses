function solve(input) {
    let rad = Number(input.shift());
    let deg = rad * 180 / Math.PI;
    console.log(`${deg.toFixed(0)}`);
    

}

solve([3.1416])