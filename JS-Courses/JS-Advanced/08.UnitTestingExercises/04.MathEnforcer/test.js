let mathEnforcer = require('./functionality.js');
let assert = require('chai').assert;

describe('mathEnforcer() behavior', () => {

    let actualResult;
    let expectResult;
    beforeEach(() => {
        actualResult = null;
        expectResult - null;
    });

    describe('addFive() behavior', () => {

        it("checking with invalid argument", () => {

            actualResult = mathEnforcer.addFive([1, 2, 3, 4]);
            expectResult = undefined;
            assert.equal(actualResult, expectResult, '');
        });

        it("checking with valid argument", () => {

            actualResult = mathEnforcer.addFive(9);
            expectResult = 14;
            assert.equal(actualResult, expectResult, '');
        });

        it("checking with valid argument", () => {

            actualResult = mathEnforcer.addFive(-5);
            expectResult = 0;
            assert.equal(actualResult, expectResult, '');
        });

        it("checking with valid argument", () => {

            actualResult = mathEnforcer.addFive(-5.5);
            expectResult = -0.5;
            assert.equal(actualResult, expectResult, '');
        });

    });

    describe('substractTen() behaior', () => {

        it("checking with invalid argument", () => {

            actualResult = mathEnforcer.subtractTen([1, 2, 3, 4]);
            expectResult = undefined;
            assert.equal(actualResult, expectResult, '');
        });

        it("checking with valid argument", () => {

            actualResult = mathEnforcer.subtractTen(9);
            expectResult = -1;
            assert.equal(actualResult, expectResult, '');
        });

        it("checking with valid argument", () => {

            actualResult = mathEnforcer.subtractTen(-9);
            expectResult = -19;
            assert.equal(actualResult, expectResult, '');
        });

        it("checking with valid argument", () => {

            actualResult = mathEnforcer.subtractTen(5.5);
            expectResult = -4.5;
            assert.equal(actualResult, expectResult, '');
        });

    });

    describe('sum() behaior', () => {

        it("checking with invalid argument", () => {

            actualResult = mathEnforcer.sum([1, 2, 3, 4], 2);
            expectResult = undefined;
            assert.equal(actualResult, expectResult, '');
        });

        it("checking with invalid argument", () => {

            actualResult = mathEnforcer.sum([1, 2, 3, 4], []);
            expectResult = undefined;
            assert.equal(actualResult, expectResult, '');
        });

        it("checking with invalid argument", () => {

            actualResult = mathEnforcer.sum(2, [1, 2, 3, 4]);
            expectResult = undefined;
            assert.equal(actualResult, expectResult, '');
        });

        it("checking with valid argument", () => {

            actualResult = mathEnforcer.sum(1, 2);
            expectResult = 3;
            assert.equal(actualResult, expectResult, '');
        });

        it("checking with valid argument", () => {

            actualResult = mathEnforcer.sum(-1, -2);
            expectResult = -3;
            assert.equal(actualResult, expectResult, '');
        });
        
        it("checking with valid argument", () => {

            actualResult = mathEnforcer.sum(1, 2.5);
            expectResult = 3.5;
            assert.equal(actualResult, expectResult, '');
        });
        it("checking with valid argument", () => {

            actualResult = mathEnforcer.sum(1.5, 2);
            expectResult = 3.5;
            assert.equal(actualResult, expectResult, '');
        });
    });

    it("", () => {

    });

});