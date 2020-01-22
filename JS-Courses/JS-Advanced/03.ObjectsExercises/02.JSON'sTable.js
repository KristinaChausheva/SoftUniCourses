function solve(params) {
    //console.log(params);
    console.log(`<table>`);
    for (let i = 0; i < params.length; i++) {
        const obj = JSON.parse(params[i]);
        console.log(`<tr>`);
        
        for (const key in obj) {
       
            const element = obj[key];
                console.log(`<td>${element}</td>`);
                
            
        }
        console.log(`</tr>`);
    }
    console.log(`</table>`);
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
)