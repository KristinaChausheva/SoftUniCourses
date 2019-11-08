function solve(params) {
    const fruit = params.shift();
    const day = params.shift();
    const quontity = Number(params.shift());

    let price;

    if (day == "Saturday" || day == "Sunday") {
        if (fruit == "banana"){
            price = quontity * 2.7;
            console.log(price.toFixed(2));
        }
        else if (fruit == "apple") {
            price = quontity * 1.25;
            console.log(price.toFixed(2));
        }
        else if (fruit == "orange") {
            price = quontity * 0.9;
            console.log(price.toFixed(2));
        }
        else if (fruit == "grapefruit") {
            price = quontity * 1.6;
            console.log(price.toFixed(2));
        }
        else if (fruit == "kiwi") {
            price = quontity * 3;
            console.log(price.toFixed(2));
        }
        else if (fruit == "pineapple") {
            price = quontity * 5.6;
            console.log(price.toFixed(2));
        }
        else if (fruit == "grapes") {
            price = quontity * 4.2;
            console.log(price.toFixed(2));
        } else {
            console.log("error");
            
        }
    }
    else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (fruit == "banana"){
            price = quontity * 2.5;
            console.log(price.toFixed(2));
        }
        else if (fruit == "apple") {
            price = quontity * 1.2;
            console.log(price.toFixed(2));
        }
        else if (fruit == "orange") {
            price = quontity * 0.85;
            console.log(price.toFixed(2));
        }
        else if (fruit == "grapefruit") {
            price = quontity * 1.45;
            console.log(price.toFixed(2));
        }
        else if (fruit == "kiwi") {
            price = quontity * 2.7;
            console.log(price.toFixed(2));
        }
        else if (fruit == "pineapple") {
            price = quontity * 5.5;
            console.log(price.toFixed(2));
        }
        else if (fruit == "grapes") {
            price = quontity * 3.85;
            console.log(price.toFixed(2));
        } else {
            console.log("error");
            
        }
    }
    else {
        console.log("error");

    }

    
    
}

solve(["tomato", "Monday", 0.5])