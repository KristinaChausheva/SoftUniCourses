class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        return   `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(num){
        return new Hex(this.value +num);
    }

    minus(num){
        return new Hex(this.value - num);
    }

    parse(str){
        return this.value.toString(10);
    }

}

let ff = new Hex(14);
console.log(ff.valueOf() + 1);
console.log(ff.toString());
let f = new Hex(15)
console.log(f.toString());
console.log(ff.plus(1).toString());

let a = new Hex(15)
let b = new Hex(1);
//console.log(a.plus(b).toString());

console.log(a.parse(a));


