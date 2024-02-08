const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./script.js");

test("capitalize", () => {
  expect(capitalize("test")).toBe("Test");
  expect(capitalize("Test")).toBe("Test");
});

test("test reverseString", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
  expect(reverseString("test")).toBe("tset");
  expect(reverseString("a")).toBe("a");
  expect(reverseString("")).toBe("");
});

test("test calculator", () => {
  expect(calculator.add(4, 5)).toBe(9);
  expect(calculator.subtract(4, 5)).toBe(-1);
  expect(calculator.divide(10, 5)).toBe(2);
  expect(calculator.multiply(4, 5)).toBe(20);
});

test("test caesarCipher", () => {
  expect(caesarCipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", 23)).toBe(
    "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD"
  );
  expect(caesarCipher("plan text", -1)).toBe("okzm sdws".toUpperCase());
  expect(caesarCipher("plan text", 1)).toBe("qmbo ufyu".toUpperCase());
  expect(caesarCipher("p.l.an. t.ext", 1)).toBe("qmbo ufyu".toUpperCase());
  expect(caesarCipher("hello", 1)).toBe("IFMMP".toUpperCase());
});

test("test analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
