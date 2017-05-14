const {describe, it} = require('mocha');
const {expect} = require('chai');

// Module to test
const calculator = require('../src/js/modules/calc');

describe('Calc Module', () => {
  calc = new calculator();

  it('Should have a working constructor', () => {
    expect(calc).to.not.equal(undefined)
  })

  it('Should add 2 Numbers correctly', () => {
    expect(calc.add(1, 2)).to.equal(3)
  });
});