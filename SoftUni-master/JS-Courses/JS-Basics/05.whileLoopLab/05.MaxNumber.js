function maxNum(params) {
    let n = Number(params.shift());
    let counter = 0;
    const arr = [];

    while (counter < n) {
        let n1 = Number(params.shift());
        arr.push(n1);
        counter++;
    }
    console.log(Math.max(...arr));
}

maxNum(["2","100","99"])