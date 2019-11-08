function grad(params) {
    const name = params.shift();
    let clas = 1;
    const arr = [];
    let excluded = 0;

    while (clas <= 12) {
        let grade = Number(params.shift());
        if (excluded == 2) {
            console.log(`${name} has been excluded at ${clas} grade`);
            break;
        }
        if (grade >= 4) {
            arr.push(grade);
            clas++;
        }
        else {
            excluded++;
            continue;
        }
        
    }

    if (excluded < 2) {
        const averageGrade = arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
    
}
grad(["mimi", 5,6,5,6,5,6,6,2,3])
//grad(["Pesho", 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5] )