function solve(params) {
    let n = Number(params.shift());
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(Math.pow(2, i));
        }
    }
}

solve([`4`])