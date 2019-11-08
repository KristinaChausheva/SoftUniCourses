function whatever(num) {
    let n = num;
    let counter = 1;

    while (counter <= n) {
        console.log(counter);
        counter = counter * 2 + 1;
    }
}

whatever(31)