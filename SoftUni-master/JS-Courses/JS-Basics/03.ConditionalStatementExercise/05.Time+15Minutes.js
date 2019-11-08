function timePlus15Min(input) {
    let hours = Number(input.shift());
    let min = Number(input.shift());

    let sumMin = hours * 60 + min;
    let sumMinPlus15 = sumMin + 15;

    let hoursPlus15 = sumMinPlus15 / 60;
    let minPlus15 = sumMinPlus15 % 60;

    if (hoursPlus15 >= 24) {
        hoursPlus15 = hoursPlus15 - 24;
    }
    if (minPlus15 < 10) {
        console.log(`${Math.trunc(hoursPlus15)}:0${minPlus15}`);

    }
    else {
        console.log(`${Math.trunc(hoursPlus15)}:${minPlus15}`);
    }
}

timePlus15Min(["8", "30"])