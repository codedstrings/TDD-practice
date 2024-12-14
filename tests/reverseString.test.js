import { reverseString } from "../scripts/reverseString";

test("check if function returns", () => {
    expect(reverseString("myname")).toBeDefined();
});

test("reverseString only accepts strings", () => {
    expect(() => reverseString(9)).toThrow("Invalid input, expected a string");
    expect(() => reverseString(null)).toThrow("Invalid input, expected a string");
    expect(() => reverseString(undefined)).toThrow("Invalid input, expected a string");
});

test("reverse of empty string", () => {
    expect(reverseString("")).toBe("");
});

test("reverse of single character string", () => {
    expect(reverseString("a")).toBe("a");
});

test("reverse test 1 - palindrome", () => {
    let str = "malayalam";
    let revStr = "malayalam";
    expect(reverseString(str)).toBe(revStr);
});

test("reverse test 2 - mixed case", () => {
    let str = "revStr";
    let revStr = "rtSver";
    expect(reverseString(str)).toBe(revStr);
});

test("reverse string with spaces", () => {
    let str = "hello world";
    let revStr = "dlrow olleh";
    expect(reverseString(str)).toBe(revStr);
});

test("reverse string with numbers and symbols", () => {
    let str = "abc123!@#";
    let revStr = "#@!321cba";
    expect(reverseString(str)).toBe(revStr);
});

test("reverse string with leading and trailing spaces", () => {
    let str = "  hello ";
    let revStr = " olleh  ";
    expect(reverseString(str)).toBe(revStr);
});
