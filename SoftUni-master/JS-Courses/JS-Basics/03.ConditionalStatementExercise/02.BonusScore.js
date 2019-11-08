function bonus(params) {
    let points = Number(params[0]);
    let bonus = 0;
    let bonus2 = 0;
    if (points <= 100) {
        bonus = 5;
        if (points % 2 == 0) {
            bonus2 = 1;
        }
        else if (points % 5 == 0) {
            bonus2 = 2;
        }
        let totalBonus = bonus + bonus2;
        console.log(totalBonus);
        console.log(totalBonus + points);
    }  
    else if(points <= 1000) {
        bonus = points * 0.2;
        if (points % 2 == 0) {
            bonus2 = 1;
        }
        else if (points % 5 == 0) {
            bonus2 = 2;
        }
        let totalBonus = bonus + bonus2;
        console.log(totalBonus);
        console.log(totalBonus + points);
    }
    else {
        bonus = points * 0.1;
        if (points % 2 == 0) {
            bonus2 = 1;
        }
        else if (points % 5 == 0) {
            bonus2 = 2;
        }
        let totalBonus = bonus + bonus2;
        console.log(totalBonus);
        console.log(totalBonus + points);
    }
}

bonus(["20"])