import { caesarCipher } from "../scripts/caesarCipher";

//Basic function tests
describe("CaesarCipher function basic tests", () => {
  test("should be defined", () => {
    expect(caesarCipher).toBeDefined();
  });

  test("should return a string", () => {
    expect(typeof caesarCipher("test string10", 3)).toBe("string");
    expect(typeof caesarCipher("10", 3)).toBe("string");
    expect(typeof caesarCipher("", 3)).toBe("string");
  });

  test("should handle invalid inputs", () => {
    expect(() => caesarCipher(10, 10)).toThrow("Invalid inputs");
    expect(() => caesarCipher("hello", "10")).toThrow("Invalid inputs");
  });
});

//implementation tests
describe("Implementation tests: CaesarCipher function", () => {
  test("should preserve case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("should preserve punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("should wrap", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
});

//edge cases
describe("edge cases: caesarCipher function ", () => {
  test("should return empty string for empty string", () => {
    expect(caesarCipher("", 3)).toBe("");
  });

  test("should handle negative shifts", () => {
    expect(caesarCipher("abc", -1)).toBe("zab");
  });

  test("should handle large shift values", () => {
    expect(caesarCipher("abc", 26)).toBe("abc"); // full alphabet shift
    expect(caesarCipher("abc", 52)).toBe("abc"); // double full alphabet shift
  });

  test("should handle Mixed case and punctuation:", () => {
    expect(caesarCipher("A!b@C#d$", 5)).toBe("F!g@H#i$");
  });

  test("should Shift values that are larger than the alphabet length:", () => {
    expect(caesarCipher("abc", 30)).toBe("efg"); // Should wrap around properly (30 % 26 = 4)
  });
});
