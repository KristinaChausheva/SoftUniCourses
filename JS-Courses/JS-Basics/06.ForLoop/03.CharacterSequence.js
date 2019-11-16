function solve(params) {
    let text = params.shift();

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        console.log(letter);
    }
}
solve(["softuni"])