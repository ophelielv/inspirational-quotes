const chai = require('chai')
const expect = chai.expect // we are using the "expect" style of Chai
const getRandomInt = require('../services/utils/utils')

describe('UtilsService Test', function() {
    it('getRandomInt() should return a number when a maximum is passed on', function() {
        const MAX = 10
        const randomNumber = getRandomInt(MAX)
        expect(randomNumber).to.be.a('number')
    })

    it('getRandomInt() should return a number inferior or equal to the one passed', function() {
        const MAX = 10
        const randomNumber = getRandomInt(MAX)
        expect(randomNumber <= MAX).to.equal(true)
    })
})