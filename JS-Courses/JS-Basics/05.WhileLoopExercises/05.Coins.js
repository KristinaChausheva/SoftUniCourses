function coins(params) {
    const sum = Number(params.shift());
    let sumInCoins = sum * 100;
    let coins = 0;

    while (sumInCoins > 0) {
        if (sumInCoins - 200 >= 0) {
            coins++;
            sumInCoins -= 200;
        }
        else if (sumInCoins - 100 >= 0) {
            coins++;
            sumInCoins -= 100;
        }
        else if (sumInCoins - 50 >= 0) {
            coins++;
            sumInCoins -= 50;
        }
        else if (sumInCoins - 20 >= 0) {
            coins++;
            sumInCoins -= 20;
        }
        else if (sumInCoins - 10 >= 0) {
            coins++;
            sumInCoins -= 10;
        }
        else if (sumInCoins - 5 >= 0) {
            coins++;
            sumInCoins -= 5;
        }
        else if (sumInCoins - 2 >= 0) {
            coins++;
            sumInCoins -= 2;
        }
        else if (sumInCoins - 1 >= 0) {
            coins++;
            sumInCoins -= 1;
        }
    }

    console.log(coins);
    
}

coins(["1.23"])