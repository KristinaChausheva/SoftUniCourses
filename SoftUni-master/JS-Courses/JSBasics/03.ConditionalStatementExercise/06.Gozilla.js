function solve(input) {
 
    let movieBudget = Number(input.shift());
    let peopleCount = Number(input.shift());
    let singleClothPrice = Number(input.shift());
 
    let decorPrice = movieBudget * 0.1;
    let clothesPrice = peopleCount * singleClothPrice;
 
    if (peopleCount > 150) {
        let discount = clothesPrice * 0.1;
        clothesPrice = clothesPrice - discount;
    }
 
    let expenses = decorPrice + clothesPrice;
    if (expenses > movieBudget) {
        let more = expenses - movieBudget;
        console.log('Not enough money!');
        console.log(`Wingard needs ${more.toFixed(2)} leva more.`);
    } else {
        let left = movieBudget - expenses;
        console.log('Action!');
        console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`);
    }
}