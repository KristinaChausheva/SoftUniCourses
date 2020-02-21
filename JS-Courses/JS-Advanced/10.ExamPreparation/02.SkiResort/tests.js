let SkiResort = require('./functionality');
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
            assert.equal(actualResult, expectResult, '')
        })

        it('bestHotel behavior()', () => {
            let obj = new SkiResort();
            expectResult = 'No votes yet';
            actualResult = obj.bestHotel;
            assert.equal(actualResult, expectResult);
        });
    });

    describe('build() behavior', () => {
        it('with no args', () => {
            let obj = new SkiResort();
            expectResult = 'Successfully built new hotel - undefined';
            actualResult = obj.build();
            assert.equal(actualResult, expectResult)
        });

        it('with empty str name', () => {
            let obj = new SkiResort();
            expectResult = 'Invalid input';
            actualResult = () => { obj.build("") };
            assert.throws(actualResult, expectResult);
        });
        it('with beds < 1', () => {
            let obj = new SkiResort();
            expectResult = 'Invalid input';
            actualResult = () => { obj.build("name", 0) };
            assert.throws(actualResult, expectResult);
        });


        it('with valid args', () => { // unneeded
            let obj = new SkiResort();
            actualResult = obj.build('name1', 5);

            expectResult = `Successfully built new hotel - name1`;
            assert.equal(actualResult, expectResult);
        });
        it('with invalid beds', () => { // unneeded
            let obj = new SkiResort();
            actualResult = obj.build('name1', 5);

            expectResult = `Successfully built new hotel - name1`;
            assert.equal(actualResult, expectResult);
        });

    });
    describe('book() behavior', () => {
        it('with empty str name', () => {
            let obj = new SkiResort();
            expectResult = 'Invalid input';
            actualResult = () => { obj.book("") };
            assert.throws(actualResult, expectResult);
        });

        it('no such hotel', () => {
            let obj = new SkiResort();
            obj.build('name', 13);
            expectResult = 'There is no such hotel';
            actualResult = () => { obj.book('name3', 5) };
            assert.throws(actualResult, expectResult);
        });
        it('no free beds', () => {
            let obj = new SkiResort();
            obj.build('name', 4);
            expectResult = 'There is no free space';
            actualResult = () => { obj.book('name', 5) };
            assert.throws(actualResult, expectResult);
        });
        it('with valid args', () => {
            let obj = new SkiResort();
            obj.build('name', 13);
            expectResult = 'Successfully booked';
            actualResult = obj.book('name', 5);
            assert.equal(actualResult, expectResult);
        });

    });

    describe('leave() behavior', () => {
        it('with empty str name', () => {
            let obj = new SkiResort();
            obj.build('name', 14);
            obj.book('name', 5)
            //obj.leave()
            expectResult = 'Invalid input';
            actualResult = () => { obj.leave("") };
            assert.throws(actualResult, expectResult);
        });
        it('with negativ beds', () => {
            let obj = new SkiResort();
            obj.build('name', 14);
            obj.book('name', 5)
            //obj.leave()
            expectResult = 'Invalid input';
            actualResult = () => { obj.leave("name", 0) };
            assert.throws(actualResult, expectResult);
        });
        it('with negativ beds', () => {
            let obj = new SkiResort();
            obj.build('name', 14);
            obj.book('name', 5)
            //obj.leave()
            expectResult = 'There is no such hotel';
            actualResult = () => { obj.leave("name2", 5) };
            assert.throws(actualResult, expectResult);
        });
        it('with valid args', () => {
            let obj = new SkiResort();
            obj.build('name', 14);
            obj.book('name', 5)
            //obj.leave()
            expectResult = `5 people left name hotel`;
            actualResult =  obj.leave("name", 5);
            ;
            assert.equal(actualResult, expectResult);
        });
    });
    describe('averageGrade() behavior', () =>{
        it('with no voters', () => {
            let obj = new SkiResort();
            obj.build('name', 14);
            //obj.leave()
            expectResult = `No votes yet`;
            actualResult =  obj.averageGrade() ;
            assert.equal(actualResult, expectResult);
        });
        it('with voters', () => {
            let obj = new SkiResort();
            obj.build('name', 14);
            obj.book('name',5);
            obj.leave('name', 5, 15);
            expectResult = `Average grade: 15.00`;
            actualResult =  obj.averageGrade() ;
            assert.equal(actualResult, expectResult);
        });
    });
});

