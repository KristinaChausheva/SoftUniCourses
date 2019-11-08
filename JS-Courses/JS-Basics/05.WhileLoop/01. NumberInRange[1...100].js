function numInRange1To100(input) {
    let num = Number(input.shift());

    while (num < 1 || num > 100) {
        console.log("Invalid Number!");
        num = Number(input.shift());
    }
    
    console.log(`The number is: ${num}`);
    
}

numInRange1To100([101, 0, -50, -60, 100, 600])