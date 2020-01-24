function solve(params) {
    let parsedData = {};
    let juice = {};
    for (let i = 0; i < params.length; i++) {
        let tempParsedJuice = params[i].split(" => ");
        

        if (parsedData[tempParsedJuice[0]]) {
            parsedData[tempParsedJuice[0]] = parsedData[tempParsedJuice[0]] + Number(tempParsedJuice[1]);
        } else {
            parsedData[tempParsedJuice[0]] = Number(tempParsedJuice[1]);
        }
       

        let bottleQ = Math.floor(parsedData[tempParsedJuice[0]] / 1000);

        if (bottleQ > 0) {
            juice[tempParsedJuice[0]] = bottleQ;
        }
    }
    let finalParsedData = Object.entries(juice);
        
    for (let i = 0; i < finalParsedData.length; i++) {
        console.log(finalParsedData[i].join(" => "));
        
    }
    //console.log(parsedData);
    
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