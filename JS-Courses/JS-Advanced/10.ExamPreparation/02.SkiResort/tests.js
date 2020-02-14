let SkiResort = require('./solution');
let assert = require('chai').assert;

describe('SkiResort', function () {

    let actualResult;
    let expectResult;

    beforeEach(() => {
        actualResult = null;
        expectResult - null;
    });

    describe('constructor', () => {

        it('check with no name arg', () => {
            let obj = new SkiResort();
            expectResult = undefined;
            assert.equal(actualResult,expectResult,'')
        });

        it('bestHotel behavior() with no voters', () => {
            let obj = new SkiResort();
            actualResult = obj.bestHotel;
            expectResult = 'No votes yet';
            assert.equal(actualResult,expectResult);
        });

        it('bestHotel behavior() with voters', () => {
            let obj = new SkiResort();
            actualResult = obj.bestHotel;
            expectResult = 'No votes yet';
            assert.equal(actualResult,expectResult);
        });


        
    });

    describe('build() behavior',() => {
        it('with no args', () => {
            let obj = new SkiResort();
            expectResult = 'Successfully built new hotel - undefined';
            actualResult = obj.build();
            assert.equal(actualResult,expectResult)
        });
        
        it('with empty str name', () => {
            let obj = new SkiResort();
            expectResult = throw new Error;
            actualResult = obj.build("");
            assert.equal(actualResult,expectResult)
        });
    });
    

    
    it('', () => {

    });
    it('', () => {

    });
    it('', () => {

    });
});
