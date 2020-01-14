function solve(input) {
    const num = String(input);
    let arr = [];
    let boo = true;
    for (let i = 0; i < num.length; i++) {
        arr.push(Number(num[i]));
        //console.log(arr);

        if (i < num.length - 1) {
            if (num[i] !== num[i + 1]) {
                boo = false;
            }
            //console.log(boo);
        }
    }

    console.log(boo);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(arr.reduce(reducer));
}

//solve(1234)
//solve(2222222)