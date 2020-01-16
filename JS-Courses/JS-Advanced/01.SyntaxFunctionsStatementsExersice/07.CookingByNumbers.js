function solve(input) {
    let startingElement = Number(input.shift());
    let op = input.shift();
    
    let n = 1;
    while (n <= 5) {

        if (op === 'chop') {
            startingElement /= 2;
            console.log(startingElement);
        } else if (op === 'dice') {
            startingElement = Math.sqrt(startingElement);
            console.log(startingElement);
        } else if (op === 'spice') {
            startingElement += 1;
            console.log(startingElement);
        } else if (op === 'bake') {
            startingElement *= 3;
            console.log(startingElement);
        } else if (op === 'fillet') {
            startingElement = startingElement - 0.2 *startingElement;
            console.log(startingElement);
        }
        op = input.shift();
        n +=1;
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake','fillet'])