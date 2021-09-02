const isValid = require("./Validate");

test("Validate a number", () => {
  expect(isValid("32")).toBeTruthy();
});

test("Validate a string", () => {
  expect(isValid("hi")).toBeFalsy();
});

test("Validate a mixed string", () => {
  expect(isValid("123H")).toBeFalsy();
});

test("Validate empty string", () => {
  expect(isValid("")).toBeFalsy();
});
