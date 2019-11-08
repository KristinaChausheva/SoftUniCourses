function Password (input) {
    let userName = String(input.shift());
    let pas = String(input.shift());
    let trial = String(input.shift());

    while (trial != pas) {
        trial = String(input.shift());
    }

    console.log(`Welcome ${userName}!`);
    

}

Password(["nakov", 1234, 1342, 1234]);