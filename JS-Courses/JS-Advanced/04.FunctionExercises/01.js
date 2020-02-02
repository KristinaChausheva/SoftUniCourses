function solve(arr, str) {
    function sortNumArr(a, b) {
        if (str === "asc") {
            return a - b;
        } else {
            return b - a;
        }
    }

    console.log(arr.sort(sortNumArr));
}

solve([14, 7, 17, 6, 8], "asc")