function solve(car) {
    const obj = {};
    obj.model = car.model;

    if (car.power <= 90) {
        obj.engine = { power: 90, volume: 1800 }
    } else if (car.power <= 120) {
        obj.engine = { power: 120, volume: 2400 }
    } else {
        obj.engine = { power: 200, volume: 3500 }
    }

    obj.carriage = {type: "", color: ""}
    obj.carriage.type = car.carriage;
    obj.carriage.color = car.color;

    if (car.wheelsize % 2 !== 0) {
        obj.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize]
    } else {
        obj.wheels = [car.wheelsize - 1, car.wheelsize - 1, car.wheelsize - 1, car.wheelsize - 1]
    }

    return obj;
}


const c = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}

console.log(solve(c));


//   { model: 'VW Golf II',
//     engine: { power: 90,volume: 1800 },
//     carriage: { type: 'hatchback', color: 'blue' },
//     wheels: [13, 13, 13, 13]}