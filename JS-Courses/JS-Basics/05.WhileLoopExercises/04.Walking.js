function walking(input) {
    let command = input.shift();
 
    let sumSteps = 0;
 
    while(command !== 'Going home') {
        let steps = Number(command);
        sumSteps += steps;
 
        if(sumSteps >= 10000) {
            break;
        }
        command = input.shift();
    }
 
    if(command === 'Going home') {
        sumSteps += +(input.shift());
    }
 
    if(sumSteps >= 10000) {
        console.log('Goal reached! Good job!');
    } else {
        console.log(`${10000 - sumSteps} more steps to reach goal.`);
    }
}