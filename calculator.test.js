const { add, subtract } = require("./calculator");

test("adds 9 + 6 to equal to 15", () => {
  expect(add(9, 6)).toBe(15);
});

test("subtracts 15 - 14 to equal to 1", () => {
  expect(subtract(15, 14)).toBe(1);
});

test("add function throws error when given a string", () => {
  expect(() => add("buseng", 2)).toThrow(
    "Invalid input. Must be valid integers.",
  );
});

test("subtract function throws error when given a decimal", () => {
  expect(() => subtract(5.5, 2)).toThrow(
    "Invalid input. Must be valid integers.",
  );
});
