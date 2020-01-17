function solve(params) {
    let initNum = 1;
    let counter = params.length;
    let command = "default";
    let arr = [];
    while (counter > 0) {
        command = params.shift();
        if (command === "add") {
            arr.push(initNum);
        } else {
            arr.pop(initNum);
        }
        counter--;
        initNum++;
    }
    if (arr.length === 0) {
        console.log("Empty");
        
    } else {
        for (const el of arr){
            console.log(el);
        }
    }
}

solve(["remove", "remove", "remove"]);