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
    let caracts = /([+-/*%rp])/g  // ajouter racine et puissance 

    return (  (typeof this.nmb1 == "number" && typeof this.operation == 'string' && this.operation.match(caracts)) && ( (this.operation.match('r') && typeof this.nmb2 == "undefined") || (!this.operation.match('r') && typeof this.nmb2 == "number") )  )  ? true : false
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

  puissance() {
    return Math.round(Math.pow(this.nmb1, this.nmb2) * 100) / 100
  }

  racineCarre() {
    if (this.nmb1 >= 0){
      return Math.round(Math.sqrt(this.nmb1) * 100)/100
    }
    return "Error : cannot process negative number with square root :("    
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
      } else if (this.operation == 'r') {
        return this.racineCarre()
      }else if (this.operation == 'p') {
        return this.puissance()
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

let calc = new Calculator(12, 'r');
let calc2 = new Calculator(2, 'p', 2);
console.log(calc.calcul());
console.log(calc2.calcul())