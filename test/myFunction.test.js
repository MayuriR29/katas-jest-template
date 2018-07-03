const myFunction = require("../src/shareExpenses");

it("should be replaced with a descriptive message", () => {
  expect(myFunction({A: 20, B: 15, C: 10})).toEqual({A: 5, B: 0, C: -5});
});
it("test different key name here X ", () => {
  expect(myFunction({A: 40, B: 25, X: 10})).toEqual({A: 15, B: 0, X: -15});
});

