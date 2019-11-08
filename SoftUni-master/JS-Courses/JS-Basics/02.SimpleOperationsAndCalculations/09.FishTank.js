function solve(input) {
    let lenght = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift());

    let volume = lenght * height * width / 1000;
    let ocupiedvolume = volume * percent * 0.01;
    let waterLiters = volume - ocupiedvolume;

    console.log(`${waterLiters.toFixed(3)}`);
}

solve([85, 75, 47, 17])