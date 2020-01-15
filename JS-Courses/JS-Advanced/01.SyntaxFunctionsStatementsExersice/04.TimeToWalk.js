function solve(n, m, l) {
    const steps = Number(n);
    const footprint = Number(m);
    const speed = Number(l);

    const length = steps * footprint / 1000;
    const time = length / speed;
    const timeInMin = time * 60;
    let breaks = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (length >= 0.5) {
        breaks = Math.trunc(length / 0.5);

    }
    let totalTime = timeInMin + breaks;
    hours = Math.trunc(totalTime / 60);
    minutes = totalTime - hours * 60;
    seconds = Number("0." + String(minutes).split(".")[1]) * 60;
    //console.log(seconds);

    if (hours < 10) {
        if (minutes < 10) {
            if (seconds < 10) {
                console.log(`0${hours}:0${Math.trunc(minutes)}:0${seconds.toFixed(0)}`);
            } else {
                console.log(`0${hours}:0${Math.trunc(minutes)}:${seconds.toFixed(0)}`);
            }
        } else {
            console.log(`0${hours}:${Math.trunc(minutes)}:${seconds.toFixed(0)}`);
        }
    } else {
        console.log(`${hours}:${Math.trunc(minutes)}:${seconds.toFixed(0)}`);
    }

}

solve(4000, 0.60, 5);