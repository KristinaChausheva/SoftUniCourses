function cake(input) {
    let widthOfCake = +input.shift();
    let lenghtOfCake = +input.shift();
 
    let areaOfCake = widthOfCake * lenghtOfCake;
    let command = input.shift();
 
    let totalOfPieces = 0;
    while (command !== 'STOP') {
        let piecesOfCake = Number(command);
        totalOfPieces += piecesOfCake;
 
        if(totalOfPieces > areaOfCake) {
            break;
        }
        command = input.shift();
    }
    if(command === 'STOP') {
        console.log(`${areaOfCake - totalOfPieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${totalOfPieces - areaOfCake} pieces more.`);
    }
}