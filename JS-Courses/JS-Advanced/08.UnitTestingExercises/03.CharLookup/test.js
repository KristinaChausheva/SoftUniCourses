let lookupChar = require('./functionality.js');
let assert = require('chai').assert;

describe('lookupChar() behavior', () => {

    it("testing first arg - number case", () => {
        let result = lookupChar(5, 5);
        assert.equal(result, undefined, 'the result should be undefined')

    });

    it("testing second arg - string case", () => {
        let result = lookupChar('5', '5');
        assert.equal(result, undefined, 'the result should be undefined')

    });

    it("testing second arg - boolean case", () => {
        let result = lookupChar('5', {});
        assert.equal(result, undefined, 'the result should be undefined')

    });

    it("testing first arg length in range", () => {
        let result = lookupChar('test', 10);
        assert.equal(result, 'Incorrect index', 'the index is invalid');
    });

    it("testing first arg length in range", () => {
        let result = lookupChar('test', -10);
        assert.equal(result, 'Incorrect index', 'the index is invalid');
    });

    it("testing with valid args", () => {
        let result = lookupChar('test', 1);
        assert.equal(result, 'e', 'incorrect index');
    });

    it("", () => {
        let result = lookupChar('test', 1.95);
        assert.equal(result, undefined, 'incorrect index');
    });


    it("", () => {

    });

});