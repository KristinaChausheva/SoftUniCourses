let isOddOrEven = require('./functionality.js');
let assert = require('chai').assert;

describe('isOddOrEven() behavior', () => {

    it('check the type of the input - bool case', () => {
        let result = isOddOrEven(false);
        assert.equal(result, undefined, 'the result is not undefined')
    });

    it('check the type of the input - number case', () => {
        let result = isOddOrEven(15);
        assert.equal(result, undefined, 'the result is not undefined')
    });

    it("check the string - even case", () => {
        let result = isOddOrEven('testingg');
        assert.equal(result, 'even', 'the result should be even')
    });

    it("check the string - odd case", () => {
        let result = isOddOrEven('str');
        assert.equal(result, 'odd', 'the result should be odd')
    });

    it("", () => {

    });

});