function concatData(input) {
    let fName = input.shift();
    let lName = input.shift();
    let age = input.shift();
    let town = input.shift();

    console.log(`You are ${fName} ${lName}, a ${age}-years old person from ${town}.`);
    
}

concatData(["Maria", "Ivanova", 20, "Sofia"])