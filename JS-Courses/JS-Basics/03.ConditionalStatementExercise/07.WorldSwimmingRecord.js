function solve(input) {
    let worldRecord = Number(input.shift());
    let distance = Number(input.shift());
    let timeFor1m = Number(input.shift());

    let timeDone = distance * timeFor1m;
    let delay = Math.trunc(distance / 15 ) * 12.5 ;
    
    
    let totalTime = timeDone + delay;
    if (worldRecord <= totalTime) {
        console.log(`No, he failed! He was ${(totalTime - worldRecord).toFixed(2)} seconds slower.`);
        
    }
    else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
        
    }

}

solve(["10464", "1500", "20"])