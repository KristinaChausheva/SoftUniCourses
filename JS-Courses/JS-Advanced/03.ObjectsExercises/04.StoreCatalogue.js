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
    for (const key in orderedObj) {
        
        let currentLetter = key[0];
        let firstLetter = arrLetters[0];
        if (currentLetter === firstLetter) {
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
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
)