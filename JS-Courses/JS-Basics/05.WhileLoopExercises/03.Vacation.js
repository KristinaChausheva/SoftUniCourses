function vacation(params) {
    const neededMoney = Number(params.shift());
    let totalSum = Number(params.shift());

    let n = 0;
    let action = "";
    let sum = 0;
    let daysCounter = 0;

    while ((n < 5) && (totalSum < neededMoney)) {
        daysCounter++;
        action = params.shift();
        sum = params.shift();
        if (action == "spend") {
            n++;
            if (sum >= totalSum) {
                totalSum = 0;
            }
            else {
                totalSum -= sum;
            }
        }
        else {
            n = 0;
            totalSum += sum;
        }
        
    }
    if (n == 5) {
        console.log("You can't save the money.");
        console.log(daysCounter);

    }
    if (totalSum >= neededMoney) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}

//vacation([110, 60, "spend", 10, "save", 5, "spend", 5, "spend", 5, "spend", 5, "spend", 5, "spend", 5])
//vacation([2000, 1000, "spend", 1200, "save", 2000])
vacation([250,150,"spend", 50, "spend", 50, "save", 100, "save", 100])

//vacation([110, 60, "spend", 10, "spend", 5, "spend", 5, "spend", 5, "spend", 5])