function grad(params) {
    const name = params.shift();
    let clas = 1;
    const arr = [];

    while (clas <= 12) {
        let grade = Number(params.shift());
        if (grade >= 4) {
            arr.push(grade);
            clas++;
        }
        else {
            continue;
        }
    }
    const averageGrade = arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}

grad(["Pesho", 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5] )