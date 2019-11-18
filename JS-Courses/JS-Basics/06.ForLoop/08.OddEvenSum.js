function solve(params) {
    let n = Number(params.shift());
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < n; i++) {
        let el = Number(params.shift());
        if (i % 2 == 0) {
            evenSum += el;
        }
        else {
            oddSum +=el;
        }
    }
    if (evenSum == oddSum) {
        console.log(`Yes`);
        console.log(`Sum = ${evenSum}`);
        
    }
    else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(evenSum - oddSum)}`);
        
    }
        
}

solve(["4", "90", "60", "11", "40"])