function name(params) {
    
    const arr = params;
    //const reducer =  ;
    return
    arr.reduce((acc, cur) => {
        acc.push(cur);
        return acc;
    }, [] );
    
    
}

console.log(name([1,2,3,4]));
