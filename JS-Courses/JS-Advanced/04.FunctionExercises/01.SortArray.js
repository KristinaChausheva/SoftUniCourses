function solve(params) {
    function sortNumArr(a, b) {
        if (params[1] === "asc") {
            return a - b;
        } else {
            return b - a;
        }
    }
    console.log(params[0].sort(sortNumArr));
}

solve([[14, 7, 17, 6, 8], "asc"])