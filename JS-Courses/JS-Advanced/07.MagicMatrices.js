function solve(params) {
    let counter = params.length;
    while (counter > 0) {
        
    }
    let arr1 = params.shift();
    let arr2 = params.shift();
    let arr3 = params.shift();
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let arr4 = [];
    let arr5 = [];
    let arr6 = [];
    if (arr1.reduce(reducer) === arr2.reduce(reducer) && arr2.reduce(reducer) === arr3.reduce(reducer)) {


        arr4.push(arr1.pop());
        arr4.push(arr2.pop());
        arr4.push(arr3.pop());
        arr5.push(arr1.pop());
        arr5.push(arr2.pop());
        arr5.push(arr3.pop());
        arr6.push(arr1.pop());
        arr6.push(arr2.pop());
        arr6.push(arr3.pop());

        if (arr4.reduce(reducer) === arr5.reduce(reducer) && arr5.reduce(reducer) === arr6.reduce(reducer) && summ === arr5.reduce(reducer)) {
            console.log('true');

        } else {
            console.log('false');
        }
    } else {
        console.log('false');
    }
}

solve([
    [11, 32, 45, 5],
    [21, 0, 1, 5],
    [21, 1, 1, 5]]
)