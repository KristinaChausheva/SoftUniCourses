function sumSeconds(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());

    let sumSec = a + b + c;
    let minutes = 0;
    let seconds = 0;

    if (sumSec < 60) {
        if(sumSec < 10) {
            console.log(`${minutes}:0${sumSec}`);
            
        }
        else {
            console.log(`${minutes}:${sumSec}`);
            
        }
    }
    else {
        minutes = Math.floor(sumSec/60);
        seconds = sumSec % 60;
        
        if (seconds < 10) {
            console.log(`${minutes}:0${seconds}`);
            
        }
        else {
            console.log(`${minutes}:${seconds}`);
            
        } 
    }
}
sumSeconds(["14", "12", "10"])