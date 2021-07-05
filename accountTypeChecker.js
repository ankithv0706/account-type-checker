const accountTypeChecker = (accountBalanceHistory) => {
  let isVariableAmount = false;
  let lastReduction = 0;

  for (
    let index = 0, nextIndex = 1;
    index < accountBalanceHistory.length;
    index++, nextIndex++
  ) {
    if (!accountBalanceHistory[nextIndex]) {
      break;
    }

    let currentAccount = accountBalanceHistory[index];
    let prevAccount = accountBalanceHistory[nextIndex];
    if (
      currentAccount.monthNumber != index ||
      prevAccount.monthNumber != nextIndex
    ) {
      isVariableAmount = true;
      break;
    }

    let currentAmount = currentAccount.account.balance.amount;
    let prevAmount = prevAccount.account.balance.amount;

    let reduction = currentAmount - prevAmount;
    if (index !== 0) {
      if (lastReduction !== 0 && lastReduction != reduction) {
        isVariableAmount = true;
        break;
      }
    }
    lastReduction = reduction < 0 ? reduction : 0;
  }

  return isVariableAmount ? "A" : "B";
};

module.exports = accountTypeChecker;
