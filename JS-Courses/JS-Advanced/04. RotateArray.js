function solve(params) {
    //console.log(params);
    
    let counter = (Number(params.pop())) % params.length;
    //console.log(params);
    
    while (counter > 0) {
        params.unshift(params.pop());
        counter -= 1;
    }
    console.log(...params);
}

solve(['1', '2', '3', '4', '15'])
