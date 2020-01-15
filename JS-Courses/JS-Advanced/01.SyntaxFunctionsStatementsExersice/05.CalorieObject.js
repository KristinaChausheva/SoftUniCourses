function solve (input) {
    let arr = input;
    let arrKeys = [];
    let arrValues = [];

    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            obj[arr[i]];
        } else {
            obj[arr[i - 1]] = Number(arr[i]);
        }
        
    }
    console.log(obj);
    
    
}

solve(['Yoghurt', '48', 'Rise', '13','Apple', '52'])