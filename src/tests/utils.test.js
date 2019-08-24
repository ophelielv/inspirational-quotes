const chai = require('chai');

const { expect } = chai; // we are using the "expect" style of Chai
const getRandomInt = require('../services/utils/utils');

describe('UtilsService Test', () => {
    it('getRandomInt() should return a number when a maximum is passed on', () => {
        const MAX = 10;
        const randomNumber = getRandomInt(MAX);
        expect(randomNumber).to.be.a('number');
    });

    it('getRandomInt() should return a number inferior or equal to the one passed', () => {
        const MAX = 10;
        const randomNumber = getRandomInt(MAX);
        expect(randomNumber <= MAX).to.equal(true);
    });
});
