function solve(params) {
    return JSON.stringify(params.reduce((acc, heroString, i, arr) => {
        let [name,level, items] = heroString.split(" / ");
        acc.push( {name,level:Number(level), items: items ? items.split(",").map(x =>x.trim()) : [] })
        return acc;
    }, [] ))
}

console.log(solve(["Jake / 1000 / Gauss, HolidayGrenade", "Hes / 1 / Desolator, Sentinel, Antara"]));
