import { analyzeArray } from "../scripts/analyzeArray";

describe("analyzeArray function", () => {
  test("should return correct object for a normal array", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("should return correct object for an array with negative numbers", () => {
    const result = analyzeArray([-1, -8, -3, -4, -2, -6]);
    expect(result).toEqual({
      average: -4,
      min: -8,
      max: -1,
      length: 6,
    });
  });

  test("should handle an array with a single element", () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("should handle an empty array", () => {
    const result = analyzeArray([]);
    expect(result).toEqual({
      average: null,
      min: null,
      max: null,
      length: 0,
    });
  });

  test("should throw an error when input is not an array", () => {
    expect(() => analyzeArray("not an array")).toThrow(
      "Input should be an array"
    );
    expect(() => analyzeArray(123)).toThrow("Input should be an array");
    expect(() => analyzeArray({})).toThrow("Input should be an array");
  });

  test("should handle an array with all identical elements", () => {
    const result = analyzeArray([7, 7, 7, 7, 7]);
    expect(result).toEqual({
      average: 7,
      min: 7,
      max: 7,
      length: 5,
    });
  });

  test("should handle an array with large numbers", () => {
    const result = analyzeArray([1000000, 2000000, 3000000]);
    expect(result).toEqual({
      average: 2000000,
      min: 1000000,
      max: 3000000,
      length: 3,
    });
  });

  test("should handle an array with decimal numbers", () => {
    const result = analyzeArray([1.5, 2.5, 3.5, 4.5, 5.5]);
    expect(result).toEqual({
      average: 3.5,
      min: 1.5,
      max: 5.5,
      length: 5,
    });
  });

  test("should handle an array with negative and positive numbers", () => {
    const result = analyzeArray([-1, 5, 3, -8, 0]);
    expect(result).toEqual({
      average: -0.2,
      min: -8,
      max: 5,
      length: 5,
    });
  });
});
