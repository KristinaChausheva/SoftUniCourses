function solve(params) {
    let years = Number(params.shift());
    let gender = params.shift();

    if (years < 16) {
        if (gender == "m") {
            console.log("Master");
            
        }
        else {
            console.log("Miss");
            
        }
    }
    else {
        if (gender == "m") {
            console.log("Mr.");
            
        }
        else {
            console.log("Ms.");
            
        }
    }
}

solve([12, "f"])