function solve(params) {
    let n = Number(params.shift());
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let element = Number(params.shift());
        sum += element;
        
    }
    console.log(sum);
    
}

solve(["2", "10", "20"])