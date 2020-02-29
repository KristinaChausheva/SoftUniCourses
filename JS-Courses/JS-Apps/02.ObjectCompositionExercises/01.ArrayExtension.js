(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1]
    };
    Array.prototype.skip = function (n) {
        let resultArr = [];
        for (let i = n; i < this.length; i++) {
            resultArr.push(this[i]);
        }
        return resultArr;
    };
    Array.prototype.take = function (n) {
        let resultArr = [];
        for (let i = 0; i < n; i++) {
            resultArr.push(this[i]);
        }
        return resultArr;
    };
    Array.prototype.sum = function () {
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.map(Number).reduce(reducer);
    };
    Array.prototype.average = function () {
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.map(Number).reduce(reducer)/this.length;
    };

} ());

const arr = [1,2,3];
console.log(arr.skip(1));

