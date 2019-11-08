function solve(params) {
    const product = params.shift();
    const city = params.shift();
    const quontity = Number(params.shift());

    let price;

    if (product == "coffee") {
        if (city == "Sofia") {
            price = quontity * 0.5;
        }
        else if (city == "Plovdiv") {
            price = quontity * 0.4;
        }
        else if (city == "Varna") {
            price = quontity * 0.45;
        }
    } 
    else if (product == "water") {
        if (city == "Sofia") {
            price = quontity * 0.8;
        }
        else if (city == "Plovdiv") {
            price = quontity * 0.7;
        }
        else if (city == "Varna") {
            price = quontity * 0.7;
        }
    }
    else if (product == "beer") {
        if (city == "Sofia") {
            price = quontity * 1.2;
        }
        else if (city == "Plovdiv") {
            price = quontity * 1.15;
        }
        else if (city == "Varna") {
            price = quontity * 1.1;
        }
    }
    else if (product == "sweets") {
        if (city == "Sofia") {
            price = quontity * 1.45;
        }
        else if (city == "Plovdiv") {
            price = quontity * 1.3;
        }
        else if (city == "Varna") {
            price = quontity * 1.35;
        }
    }
    else if (product == "peanuts") {
        if (city == "Sofia") {
            price = quontity * 1.6;
        }
        else if (city == "Plovdiv") {
            price = quontity * 1.5;
        }
        else if (city == "Varna") {
            price = quontity * 1.55;
        }
    }
    console.log(price);
    
}

solve(["coffee", "Varna", 2])