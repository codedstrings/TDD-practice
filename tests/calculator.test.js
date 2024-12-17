import { calculator } from "../scripts/calculator";

describe("calculator", () => {
  describe("Addition", () => {
    test("add two positive numbers", () => {
      expect(calculator.sum(2, 5)).toBe(7);
    });

    test("add two negative numbers", () => {
      expect(calculator.sum(-1, -3)).toBe(-4);
    });

    test("add positive and negative number", () => {
      expect(calculator.sum(-1, 6)).toBe(5);
    });

    test("add zero to a number", () => {
      expect(calculator.sum(0, 8)).toBe(8);
    });

    test("Addition Handles floats", () => {
      expect(calculator.sum(2.5, 5)).toBe(7.5);
    });
  });

  describe("Substraction", () => {
    test("subtracts two positive numbers", () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test("subtracts a positive and a negative number", () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test("subtracts two negative numbers", () => {
      expect(calculator.subtract(-7, -2)).toBe(-5);
    });

    test("subtracts zero from a number", () => {
      expect(calculator.subtract(9, 0)).toBe(9);
    });

    test("subtracts a number from itself", () => {
      expect(calculator.subtract(5, 5)).toBe(0);
    });

    test("Substraction Handles floats", () => {
      expect(calculator.subtract(2.5, 5)).toBe(-2.5);
    });

    test("Substract from smaller number", () => {
      expect(calculator.subtract(2, 10)).toBe(-8);
    });
  });

  describe("Multiplication", () => {
    test("multiplies two positive numbers", () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    test("multiplies a positive and a negative number", () => {
      expect(calculator.multiply(6, -2)).toBe(-12);
    });

    test("multiplies two negative numbers", () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test("multiplies a number by zero", () => {
      expect(calculator.multiply(8, 0)).toBe(0);
    });

    test("multiplies a number by one", () => {
      expect(calculator.multiply(7, 1)).toBe(7);
    });
  });

  describe("Division", () => {
    test("divide 2 positive numbers", () => {
      expect(calculator.divide(10, 5)).toBe(2);
    });

    test("divide 2 negative numbers", () => {
      expect(calculator.divide(-6, -2)).toBe(3);
    });

    test("divide a negative and positive number ", () => {
      expect(calculator.divide(-6, 2)).toBe(-3);
    });

    test("divides a number by one", () => {
      expect(calculator.divide(9, 1)).toBe(9);
    });

    test("throws error when dividing by zero", () => {
      expect(() => calculator.divide(8, 0)).toThrow("Cannot divide by zero");
    });
  });

  describe("Invalid Inputs", () => {
    test("throws error for non-numeric inputs", () => {
      expect(() => calculator.add("a", 3)).toThrow();
      expect(() => calculator.subtract(5, null)).toThrow();
      expect(() => calculator.multiply(undefined, 2)).toThrow();
      expect(() => calculator.divide(NaN, 2)).toThrow();
    });
  });
});
