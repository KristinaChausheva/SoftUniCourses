function solve(params) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let counter = params.length;
    let currentNum = 0;
    while (counter > 0) {
        currentNum = params.shift();
        if (currentNum >= maxNum) {
            maxNum = currentNum;
            console.log(maxNum);
        }
    }
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])