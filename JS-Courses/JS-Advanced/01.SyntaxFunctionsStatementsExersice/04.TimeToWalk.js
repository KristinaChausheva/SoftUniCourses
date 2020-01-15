function solve(n, m, l) {
    const steps = Number(n);
    const footprint = Number(m);
    const speed = Number(l);

    const length = steps * footprint / 1000;
    const time = length / speed;
    const timeInMin=time*60;
    let breaks = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (length >= 0.5) {
        breaks = Math.trunc(length / 0.5);
        
    }
    let totalTime = timeInMin + breaks;
    hours = Math.trunc(totalTime/60);
    minutes = totalTime - hours*60;
    console.log(minutes);
    
    if (totalTime <= 60) {
        console.log(`00:${Math.trunc(minutes)}:${seconds}`);
        
    }

}

solve(4000, 0.60, 5);