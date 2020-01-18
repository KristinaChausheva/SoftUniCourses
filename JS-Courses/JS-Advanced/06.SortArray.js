function solve(params) {
    params.sort();
    params.sort(comparator1);
    function comparator1(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
           return 0;
            
        }
        //params.sort();
    }
    for (const el of params) {
        console.log(el);

    }

    //arr.sort([compareFunction])
}

solve(['test', 'Deny', 'omen', 'Default'])