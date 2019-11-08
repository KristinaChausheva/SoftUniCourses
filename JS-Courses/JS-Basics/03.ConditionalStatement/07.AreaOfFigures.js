function area(input) {
    let typeFig = input.shift();

    if (typeFig == "square") {
        let num = Number(input.shift());
        let area = num * num;
        console.log(area.toFixed(3));

    }
    else if (typeFig == "rectangle") {
        let a = Number(input.shift());
        let b = Number(input.shift());
        let area = a * b;
        console.log(area.toFixed(3));

    }

    else if (typeFig == "triangle") {
        let a = Number(input.shift());
        let h = Number(input.shift());
        let area = a * h / 2;
        console.log(area.toFixed(3));

    }
    else {
        let r = Number(input.shift());
        let area = Math.PI * r * r;
        console.log(area.toFixed(3));


    }

}

area(["circle", 6])