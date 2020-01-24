


function solve(params) {
    const obj = {}; // {audi: {model:count}}
    let modelCountObj = {};
    const arrModels =[];
    const arrCount = [];
    for (let i = 0; i < params.length; i++) {
        let arr = params[i].split(` | `);
        
        //let brand = arr[0];
       // let model = arr[1];
        //let count = arr[2];
        const car = new Object();
        car.brand= arr[0];
        if (arr[1] ) {
            
        }
        car.model  = arr[1];
        car.count = arr[2];
        //obj[brand] = 0;
        //arrModels.push(model);
        //modelCountObj[model] = count;
        //console.log(modelCountObj);
        console.log(car);
    }
        

    
}

solve
(
    [
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100', //h
    'BMW | X5 | 1000',
    'BMW | X6 | 100', //h
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000', //h
    'Citroen | C4 | 22', //h
    'Citroen | C5 | 10'//h
    ]
    
)