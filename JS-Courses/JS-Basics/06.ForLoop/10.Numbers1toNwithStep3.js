function solve(params) {
    let n = Number(params.shift());
    for (let i = 0; i <= n; i++) {
        if (i == 1) {
            console.log(i);
            
        }
        else if ((i - 1) % 3 == 0) {
            console.log(i);
            
        }
        
    }
}

solve([`15`])