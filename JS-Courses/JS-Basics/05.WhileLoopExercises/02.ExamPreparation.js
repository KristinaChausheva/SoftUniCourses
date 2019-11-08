function examPrep(params) {
    const poorGradeLimit = Number(params.shift());
    let poorGradeCounter = 0;
    let problemCounter = 0;
    let arr = [];
    let problemName = "";
    let lastProblem = "";
    let problemGrade;

    while (poorGradeCounter <= poorGradeLimit) {
        lastProblem = problemName;
        problemName = params.shift();
        if (problemName == "Enough") {
            break;
        }
        if (poorGradeCounter >= poorGradeLimit) {
            break;
        }
        problemCounter++;
        problemGrade = Number(params.shift());
        arr.push(problemGrade);
        if (problemGrade <= 4) {
            poorGradeCounter++;
        }
    }
    if (problemName == "Enough") {
        let arrAverage = arr.reduce((p, c) => p + c) / problemCounter;
        console.log(`Average score: ${arrAverage.toFixed(2)}`);
        console.log(`Number of problems: ${problemCounter}`);
        console.log(`Last problem: ${lastProblem}`);
    }
    else if (poorGradeCounter >= poorGradeLimit) {
        console.log(`You need a break, ${poorGradeCounter} poor grades.`);
        
    }
    
}

examPrep([2, "money",6, "story", 4, "frewg", 3, "fds", 6, "Enough"])