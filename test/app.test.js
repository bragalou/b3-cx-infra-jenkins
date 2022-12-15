const expect = require('chai').expect;

const Calculator = require('../src/app').Calculator;


// ===== Verify Arithmetique =====
describe('Testing Arithmetique Calculator ', function () {
  it('Verify attribution of values', function (done) {
    let calc1 = new Calculator(1, '+', 3)
    expect(calc1.getValue()).deep.to.equal([1, '+', 3])
    done()
  })
  it('Verify type of values/caracts', function (done) {
    let calc1 = new Calculator(1, '+', 3)
    expect(calc1.verifyValue()).to.equal(true)
    done()
  })
  it('Verify type of values/caracts with error', function (done) {
    let calc1 = new Calculator(1, '+', 'm')
    let calc2 = new Calculator(1, 2, 3)
    let calc3 = new Calculator('d', '+', 'm')
    let calc4 = new Calculator(1, 'coucou', 3)
    expect(calc1.verifyValue()).to.equal(false)
    expect(calc1.calcul()).to.equal("Error Type")
    expect(calc2.verifyValue()).to.equal(false)
    expect(calc2.calcul()).to.equal("Error Type")
    expect(calc3.verifyValue()).to.equal(false)
    expect(calc3.calcul()).to.equal("Error Type")
    expect(calc4.verifyValue()).to.equal(false)
    expect(calc4.calcul()).to.equal("Error Type")
    done()
  })
  
  // ----- test calcul -----
  it('Test calcul +', function (done) {
    let calc1 = new Calculator(1, '+', 3)
    let calc2 = new Calculator(1, '+', -3)
    let calc3 = new Calculator(-1, '+', -3)
    expect(calc1.calcul()).to.equal(4)
    expect(calc2.calcul()).to.equal(-2)
    expect(calc3.calcul()).to.equal(-4)
    done()
  })
  it('Test calcul -', function (done) {
    let calc1 = new Calculator(1, '-', 3)
    let calc2 = new Calculator(-1, '-', 3)
    let calc3 = new Calculator(-1, '-', -3)
    expect(calc1.calcul()).to.equal(-2)
    expect(calc2.calcul()).to.equal(-4)
    expect(calc3.calcul()).to.equal(2)
    done()
  })
  it('Test calcul *', function (done) {
    let calc1 = new Calculator(2, '*', 3)
    let calc2 = new Calculator(2, '*', -3)
    let calc3 = new Calculator(-2, '*', -3)
    expect(calc1.calcul()).to.equal(6)
    expect(calc2.calcul()).to.equal(-6)
    expect(calc3.calcul()).to.equal(6)
    done()
  })
  it('Test calcul /', function (done) {
    let calc1 = new Calculator(2, '/', 4)
    let calc2 = new Calculator(2, '/', -4)
    let calc3 = new Calculator(-2, '/', -4)
    let calc4 = new Calculator(-2, '/', 4)
    expect(calc1.calcul()).to.equal(0.5)
    expect(calc2.calcul()).to.equal(-0.5)
    expect(calc3.calcul()).to.equal(0.5)
    expect(calc4.calcul()).to.equal(-0.5)
    done()
  })
  it('Test calcul / by 0', function (done) {
    let calc1 = new Calculator(2, '/', 0)
    let calc2 = new Calculator(0, '/', 4)
    expect(calc1.calcul()).to.equal("Error : division by 0")
    expect(calc2.calcul()).to.equal(0)
    done()
  })
  it('Test calcul % (pourcentage)', function (done) {
    let calc1 = new Calculator(3, '%', 5)
    let calc2 = new Calculator(6, '%', 5)
    let calc3 = new Calculator(-3, '%', 5)
    let calc4 = new Calculator(3, '%', -5)
    let calc5 = new Calculator(-3, '%', -5)
    expect(calc1.calcul()).to.equal('60%')
    expect(calc2.calcul()).to.equal("120%")
    expect(calc3.calcul()).to.equal("-60%")
    expect(calc4.calcul()).to.equal("-60%")
    expect(calc5.calcul()).to.equal("60%")
    done()
  })

})


describe('Testing Scientifique Calculator ', function () {
  it('Verify type of values/caracts', function (done) {
    let calc1 = new Calculator(1, 'p', 3)
    let calc2 = new Calculator(1, 'r')
    expect(calc1.verifyValue()).to.equal(true)
    expect(calc2.verifyValue()).to.equal(true)
    done()
  })
  it('Verify type of values/caracts with error', function (done) {
    let calc1 = new Calculator(1, 'p')
    let calc2 = new Calculator(1, 'r', 2)
    expect(calc1.verifyValue()).to.equal(false)
    expect(calc1.calcul()).to.equal("Error Type")
    expect(calc2.verifyValue()).to.equal(false)
    expect(calc2.calcul()).to.equal("Error Type")
    done()
  })

  it('Test calcul puissance', function (done) {
    let calc1 = new Calculator(2, 'p', 2)
    let calc2 = new Calculator(6, 'p', -4)
    let calc3 = new Calculator(3, 'p', 0)
    let calc4 = new Calculator(0, 'p', 2)
    expect(calc1.calcul()).to.equal(4)
    expect(calc2.calcul()).to.equal(0)
    expect(calc3.calcul()).to.equal(1)
    expect(calc4.calcul()).to.equal(0)
    done()
  })
  it('Test calcul racine carre', function (done) {
    let calc1 = new Calculator(0, 'r')
    let calc2 = new Calculator(4, 'r')
    let calc3 = new Calculator(-12, 'r')
    let calc4 = new Calculator(12, 'r')
    expect(calc1.calcul()).to.equal(0)
    expect(calc2.calcul()).to.equal(2)
    expect(calc3.calcul()).to.equal("Error : cannot process negative number with square root :(")
    expect(calc4.calcul()).to.equal(3.46)
    done()
  })

})