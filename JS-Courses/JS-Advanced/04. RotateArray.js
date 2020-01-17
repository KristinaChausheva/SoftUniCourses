function solve(params) {
    let counter = params.pop();
    while (counter > 0) {
        params.unshift(params.pop());
        counter -= 1;
    }
    console.log(...params);
}

solve(['1', '2', '3', '4', '2'])