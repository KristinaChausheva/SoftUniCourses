function solve([a,b,c,d]){
    let x1 = a;
    let y1 = b;
    let x2 = c;
    let y2 = d;
    
    if (Number.isInteger(Math.hypot(Math.abs(x1-0), Math.abs(y1-0)))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
        
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(Math.hypot(Math.abs(x2-0), Math.abs(y2-0)))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(Math.hypot(Math.abs(x2-x1), Math.abs(y2-y1)))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

//solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);