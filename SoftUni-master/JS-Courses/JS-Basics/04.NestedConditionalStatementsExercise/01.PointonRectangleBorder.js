function solve(params) {
    let x1 = Number(params.shift());
    let y1 = Number(params.shift());
    let x2 = Number(params.shift());
    let y2 = Number(params.shift());
    let x = Number(params.shift());
    let y = Number(params.shift());

    let firstCondition = (x == x1 || x == x2) && (y >= y1 && y <= y2);
    let secondCondition = (y == y1 || y == y2) && (x >= x1 && x <= x2);

    if (firstCondition || secondCondition) {
        console.log("Border");
        
    } else {
        console.log("Inside / Outside");
        
    }
}

solve([2, -3, 12, 3, 8, -1])