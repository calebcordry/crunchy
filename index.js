class Calculator {
  constructor () {
  }

  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      return NaN;
    }

    return num1 / num2;
  }
}


const delay = function(milliseconds, classConstructor, classMethod, params) {
  return new Promise((resolve, reject) => {
    if (classConstructor[classMethod] === undefined) {
      reject(`the method ${method} doesn't exist.  please enter a valid method`);
    }
    let result = classConstructor[classMethod](params[0], params[1]);
    setTimeout(() => { resolve(result); }, milliseconds);
  });
};


module.exports = { Calculator, delay };
