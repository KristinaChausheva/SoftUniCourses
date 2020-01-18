function solve(params) {
    let arr1 = params.shift();
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let arr1Sum = arr1.reduce(reducer);
    let currentArr = [];
    let currentArrSum = 0;
    isMagic = false;
    for (let i = 0; i <= params.length; i++) {
       
        currentArr = params.shift();
        currentArrSum = currentArr.reduce(reducer);
        if (currentArrSum !== arr1Sum ) {
            break;
        } else {
            isMagic = true;
        }
    }

    console.log(isMagic);
    
}

solve([
    [11, 32, 45, 5],
    [21, 0, 1, 5],
    [21, 1, 1, 5]]
)