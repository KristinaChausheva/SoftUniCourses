function solve (input) {
    let speed = Number(input.shift());
    let area = input.shift();


    if (area === 'motorway') {
        if (speed <= 150 && speed >=130) {
            console.log('speeding');
        } else if (speed <= 170 && speed >=130) {
            console.log('excessive speeding');
        } else if (speed > 170){
            console.log('reckless driving');
        }
    } else if (area === 'interstate') {
        if (speed <= 110 && speed >=90) {
            console.log('speeding');
        } else if (speed <= 130 && speed >=90) {
            console.log('excessive speeding');
        } else if(speed > 130){
            console.log('reckless driving');
        }
    }else if (area === 'city') {
        if (speed <= 70 && speed >=50) {
            console.log('speeding');
        } else if (speed <= 90 && speed >=50) {
            console.log('excessive speeding');
        } else if  (speed > 90){
            console.log('reckless driving');
        }
    }else if (area === 'residential') {
        if (speed <= 40 && speed >=20 ) {
            console.log('speeding');
        } else if (speed <= 60  && speed >=20) {
            console.log('excessive speeding');
        } else if (speed > 60) {
            console.log('reckless driving');
        }
    }
    
    
}

//solve([40, 'city'])
solve([200, 'motorway'])