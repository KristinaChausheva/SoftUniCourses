function solve(params) {
    let str = "";
    let arr = [];
    let strItems = "";
    let arrItems = [];
    let obj = {};
    let finalArr = [];
    let jsonStr = "";
    for (let i = 0; i < params.length; i++) {
        str = String(params[i]);
        arr = str.split(" / ")
        strItems = String(arr[2]);
        arrItems = strItems.split(", ");

        obj.name = `${arr[0]}`;
        obj.level = parseInt(`${arr[1]}`);
        obj.items = arrItems;
        jsonStr = JSON.stringify(obj);
        //console.log(eval(jsonStr));

        
        finalArr.push(jsonStr);
    }
    console.log(finalArr);
  
}

solve(["Jake / 1000 / Gauss, HolidayGrenade", "Hes / 1 / Desolator, Sentinel, Antara"])