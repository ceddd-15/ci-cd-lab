const add = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Invalid input. Must be valid integers.");
  }
  return a + b;
};

const subtract = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Invalid input. Must be valid integers.");
  }
  return a - b;
};

module.exports = { add, subtract };
