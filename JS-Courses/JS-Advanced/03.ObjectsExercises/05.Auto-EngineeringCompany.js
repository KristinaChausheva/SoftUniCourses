function solve(params) {
    const obj = {}; // {audi: {model:count}}
    const modelCountObj = {};
   
    for (let i = 0; i < params.length; i++) {
        let arr = params[i].split(` | `);
        
        let brand = arr[0];
        let model = arr[1];
        let count = Number(arr[2]);
        
        
        if (obj.hasOwnProperty(`${brand}`)) {
            if (modelCountObj.hasOwnProperty(`${model}`)) {
                modelCountObj[model] += count;
            } else {
                modelCountObj[model] = count;
            }
            
           
        } else {
            
            modelCountObj[model] = count;
            obj[brand] = modelCountObj;
        }
        
    }

    console.log(obj);
    
}

solve
(
    [
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100', //h
    'BMW | X5 | 1000',
    'BMW | X6 | 100', //h
    'Citroen | C4 | 123',
    'Citroen | C4 | 22', //h
    'Citroen | C5 | 10'//h
    ]
    
)