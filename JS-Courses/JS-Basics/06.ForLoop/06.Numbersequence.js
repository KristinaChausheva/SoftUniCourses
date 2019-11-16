function solve(params) {
    let n = Number(params.shift());
    let minNum = 1000000;
    let maxNum = -1000000;
    for (let i = 0; i < n; i++) {
        let el = Number(params.shift());
        if (el <= minNum) {
            minNum = el;
        }
        if (el >= maxNum) {
            maxNum = el;
        }
    }
    console.log(`Max number: ${maxNum}`);
    console.log(`Min number: ${minNum}`);
}

solve(["5", "10", "20", "304", "0", "50"])