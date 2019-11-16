function solve(params) {
    let n = Number(params.shift());
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < 2 * n; i++) {
        let el = Number(params.shift());
        if (i < n) {
            leftSum += el;
        }
        else {
            rightSum +=el;
        }
    }
    if (leftSum == rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
    }
    else {
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`);
        
    }
        
}

solve(["2", "90", "11", "60", "40"])