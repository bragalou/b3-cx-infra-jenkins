class Calculator {
  constructor(nmb1, operation, nmb2) {
    this.nmb1 = nmb1
    this.nmb2 = nmb2
    this.operation = operation
  }

  
  // ----- function to return the insert value -----
  getValue() {
    return [this.nmb1, this.operation, this.nmb2,]
  }


  // ----- funtion to verify values -----
    verifyValue() {
      // liste caracteres autorise
      let caracts = /([+-/%])/g
      // verify type of number and operation
      return typeof this.nmb1 == "number" && typeof this.nmb2 == "number" && typeof this.operation == 'string' && this.operation.match(caracts) ? true : false;
  }


  // ----- All function to calcul (Arithmetique) -----
  addition() {
    return this.nmb1 + this.nmb2
  }

  subtraction() {
    return this.nmb1 - this.nmb2
  }

  multiplication() {
    return this.nmb1 * this.nmb2
  }

  division() {
    if (this.nmb2 != 0){
      return Math.round( this.nmb1 / this.nmb2 * 100) /100
    } 
    return "Error : division by 0"
  }

  pourcentage() {
    let percentage = 100 * parseFloat(this.nmb1)/parseFloat(this.nmb2)
    return Math.round(percentage).toString() + "%"
  }


  // ----- function to call calcul -----
  calcul() {
    // Verify value of calcul
    if (this.verifyValue()) {

      // execute calcul and return
      if (this.operation == '+') {
        return this.addition()
      } else if (this.operation == '-') {
        return this.subtraction()
      } else if (this.operation == '*') {
        return this.multiplication()
      } else if (this.operation == '/') {
        return this.division()
      } else if (this.operation == '%') {
        return this.pourcentage()
      }

    } else {
      return "Error Type"
    }
  }
 
}


module.exports = {
  Calculator: Calculator
}


// ===== Test Execute =====
let calc1 = new Calculator(1, '+', 3)
console.log(calc1.calcul())