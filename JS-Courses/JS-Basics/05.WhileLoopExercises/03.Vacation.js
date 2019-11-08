function vacation(params) {
    let neededMoney = Number(params.shift());
    let totalSum = Number(params.shift());

    let na = 0;
    let daysCounter = 0;

    while (totalSum < neededMoney) {
        daysCounter++;
        let action = params.shift();
        let sum = params.shift();

        if (action === "spend") {
            if (sum <= totalSum) {
                totalSum -= sum;
            } else {
                totalSum = 0;
            }
            na++;
            if (na === 5) {
                break;
            }
        } else {
            na = 0;
            totalSum += sum;
        }
    }
    if (totalSum >= neededMoney) {
        console.log(`You saved the money for ${daysCounter} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(daysCounter);
    }
}
vacation([250,150,"spend", 50, "spend", 50, "save", 100, "save", 100])