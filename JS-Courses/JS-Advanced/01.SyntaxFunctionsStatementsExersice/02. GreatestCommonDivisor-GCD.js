function solve(num1, num2) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    for (let index = num1; index >= 1; index--) {
        if (num1 % index === 0) {
            arr1.push(index);
        }
    }
    for (let index = num2; index >= 1; index--) {
        if (num2 % index === 0) {
            arr2.push(index);
        }

    }

    //console.log(arr1.reverse());
    //console.log(arr2.reverse());

   for (let i = 0; i < arr1.length; i++) {
       for (let k = 0; k < arr2.length; k++) {
           if (arr2[k] === arr1[i]) {
               arr3.push(arr2[k]);
           }
       }
   }


    //console.log(arr3);
    console.log(Math.max(...arr3));
}

//solve(5, 15);
solve(2154, 458);