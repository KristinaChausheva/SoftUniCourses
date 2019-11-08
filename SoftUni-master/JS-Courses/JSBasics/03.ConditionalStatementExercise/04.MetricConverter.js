function metricConverter (input) {
    let val = Number(input.shift());
    let inputMetric = input.shift();
    let outputMetric = input.shift();
    let convertedVal;

    if (inputMetric == "mm") {
        if (outputMetric == "cm") {
            convertedVal = val / 10;
        }
        else if( outputMetric == "m") {
            convertedVal = val / 1000;
        }

    }
    else if (inputMetric == "cm") {
        if ( outputMetric == "mm") {
            convertedVal = val *10;
        }
        else {
            convertedVal = val / 100;
        }
    }
    else { // inputMetric = m
        if (outputMetric == "cm") {
            convertedVal = val * 100;
        }
        else { // outputMtric = mm
            convertedVal = val * 1000;
        }
    }

    console.log(convertedVal.toFixed(3));
    
}

metricConverter(["150", "m", "cm"])