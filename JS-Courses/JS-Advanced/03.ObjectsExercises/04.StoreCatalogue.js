function solve(params) {
    const obj = {};
    for (let i = 0; i < params.length; i++) {
        let arr = params[i].split(` : `);
        obj[arr[0]] = arr[1];
    }
   const orderedObj = {};
   Object.keys(obj).sort().forEach(function(key) {
       orderedObj[key] = obj[key];
   })
    let arrLetters = [];
    let a = Object.keys(orderedObj);
    let isIn = false;
    for (const key in orderedObj) {
        
        let currentLetter = key[0];

        //arrLetters.push(currentLetter);
       for (let i = 0; i < arrLetters.length; i++) {
           if (arrLetters[i] === currentLetter) {
               isIn = true;
           } else {
               isIn = false;
           }
        }
        if (isIn) {
            console.log(`  ${key}: ${orderedObj[key]}`);
        } else {
            arrLetters.push(currentLetter);
            console.log(currentLetter);
            console.log(`  ${key}: ${orderedObj[key]}`);
        }
        
       
    }
    
}

solve(
    [
    'Appricot : 20.4',
    'TV : 1499',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
)