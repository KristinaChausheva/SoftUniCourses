function rounding(number, precision) {
if (precision > 15) {
        precision = 15;
    }
let output = number.toFixed(precision);
console.log(output);
}