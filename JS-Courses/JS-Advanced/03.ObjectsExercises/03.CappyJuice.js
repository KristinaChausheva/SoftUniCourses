function solve(params) {
    const obj = {};
    const orderedList = [];
    let arr = [];
    for (const i of params) {
        //console.log(typeof(i));
        arr = i.split(" => ")
        //console.log(arr);

        if (obj.hasOwnProperty(arr[0])) {
            let currentKey = arr[0];
            let currentValue = parseInt(arr[1]);
            obj[currentKey] += currentValue;
        } else {
            obj[arr[0]] = parseInt(arr[1]);
        }
        
       
    }
    //console.log(orderedList);
    
    console.log(obj);
    
}

solve(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]
)