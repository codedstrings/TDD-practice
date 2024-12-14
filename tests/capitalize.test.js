import { capitalize } from "../scripts/capitalize";

test("check if function returns", () => {
  expect(capitalize("myname")).toBeDefined();
});

test("check if first letter is capitalized", () => {
  expect(capitalize("myname")).toMatch(/^[A-Z][a-z]*$/);
});

test("check if the string is returned with the first letter capitalized", () => {
  let str = "randomstring";
  let expected = "Randomstring";
  expect(capitalize(str)).toBe(expected);
});

test("capitalize only accepts strings", () => {
  expect(() => capitalize(9)).toThrow("Invalid input, expected a string");
});
