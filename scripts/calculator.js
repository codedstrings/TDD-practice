export const calculator = {
  validateInputs: (a, b) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      isNaN(a) ||
      isNaN(b)
    ) {
      throw new Error("Inputs must be valid numbers");
    }
  },
  sum(a, b) {
    calculator.validateInputs(a, b);
    return a + b;
  },
  subtract(a, b) {
    calculator.validateInputs(a, b);
    return a - b;
  },
  multiply(a, b) {
    calculator.validateInputs(a, b);
    return a * b;
  },
  divide(a, b) {
    calculator.validateInputs(a, b);
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },
};
