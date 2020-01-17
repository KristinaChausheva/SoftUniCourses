function solve(params){
    let step = params.pop();
    for (let i = 0; i < params.length; i= i + Number(`${step}`)) {
        console.log(params[i]);
    }
}

solve(["5","20","31", "4", "20","2"])