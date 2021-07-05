const assert = require("assert");
const accountTypeChecker = require("./accountTypeChecker");

const basicNonVariableHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  },
];

const basicFixedHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 300 },
    },
  },
];

const unevenMonthNumber = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 3, // three months ago
    account: {
      balance: { amount: 300 },
    },
  },
];

const noChangeHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 100 },
    },
  },
];

const increasingBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 300 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 200 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 100 },
    },
  },
];

describe("Balance history", function () {
  it("should pass basic non variable history", function () {
    assert.equal(accountTypeChecker(basicNonVariableHistory), "B");
  });
  it("should pass basic fixed history", function () {
    assert.equal(accountTypeChecker(basicFixedHistory), "A");
  });
  it("should pass uneven month history", function () {
    assert.equal(accountTypeChecker(unevenMonthNumber), "A");
  });
  it("should pass no change history", function () {
    //it has fixed reduction of 0
    assert.equal(accountTypeChecker(noChangeHistory), "B");
  });
  it("should pass increasing balance history", function () {
    //it has no reduction which is 0
    assert.equal(accountTypeChecker(increasingBalanceHistory), "B");
  });
});
