function solve(params){
    let delimiter = params.pop();
    console.log(params.join(`${delimiter}`));
}
solve(["1", "2", "3", "-"]);
