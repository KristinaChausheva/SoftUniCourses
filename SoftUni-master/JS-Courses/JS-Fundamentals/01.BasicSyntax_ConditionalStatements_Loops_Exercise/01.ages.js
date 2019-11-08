function age (years) {
    if (years >= 0 && years <3){
        console.log("baby")
    }
    else if (years > 2 && years < 14){
        console.log("child");
    }
    else if (years > 13 && years < 20){
        console.log("teenager");
    }
    else if (years > 19 && years < 66){
        console.log("adult");
    }
    else {
        console.log("elder");
    }
}
