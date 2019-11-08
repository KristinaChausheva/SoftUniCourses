function solve(input) {
    let neededMoney = Number(input.shift());
    let ownedMoney = Number(input.shift());
 
    let spendCounter = 0;
    let dayCounter = 0;
 
    while (neededMoney > ownedMoney) {
        dayCounter++;
        let command = input.shift();
        let money = Number(input.shift());
 
        if (command === "spend") {
            if (money < ownedMoney) {
            ownedMoney -= money;
            } else{
                ownedMoney = 0;
            }
            spendCounter++;
            if(spendCounter === 5){
                break;
            }
        }else {
            ownedMoney += money;
            spendCounter = 0
        }
    }
    if(ownedMoney >= neededMoney ){
        console.log(`You saved the money for ${dayCounter} days.`);
    } else {
        console.log(`You can't save the money.`)
        console.log(dayCounter)
    }
}

solve([250,150,"spend", 50, "spend", 50, "save", 100, "save", 100])