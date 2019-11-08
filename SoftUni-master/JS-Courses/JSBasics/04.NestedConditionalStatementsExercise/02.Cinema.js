function solve(params) {
    let type = params.shift();
    let rows = Number(params.shift());
    let col = Number(params.shift());

    let income;

    if (type == "Premiere") {
        income = rows * col * 12;
    }
    else if (type == "Normal") {
        income = rows * col * 7.5;
    } 
    else if (type == "Discount") {
        income = rows * col * 5;
    }
    
    console.log(`${income.toFixed(2)} leva`);
    
}

solve(["Premiere", 10, 12])