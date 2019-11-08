function Balance(input) {
    let countdeposits = Number(input.shift());
    let counter = 0;
    let totalSum = 0.0;

    while (counter < countdeposits) {
        let sum = Number(input.shift());

        if (sum < 0) {
            console.log(`Invalid operation!`);
            counter = countdeposits;
        }
        else {
            console.log(`Increase: ${sum.toFixed(2)}`);
            totalSum = totalSum + sum;
            counter++;
        }
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}

Balance([3, 5.51, 69.42, 100]);
//Balance([5, 120, 45.55, - 150])