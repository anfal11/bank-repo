const previousDeposit = document.getElementById("previous-deposit");
const previousWithdraw = document.getElementById("previous-withdraw");
const totalBalance = document.getElementById("previous-totalBalance");

// deposit input + button
const userDeposit = document.getElementById("user-deposit");
const depositBtn = document.getElementById("btn-deposit");

// withdraw input + button
const userWithdraw = document.getElementById("user-withdraw");
const withdrawBtn = document.getElementById("btn-withdraw");

// deposit button event handler
depositBtn.addEventListener("click", function () {
  const userDepositAmount = parseFloat(userDeposit.value);
  const previousDepositAmount = parseFloat(previousDeposit.innerText);
  const totalDeposit = userDepositAmount + previousDepositAmount;
  previousDeposit.innerText = totalDeposit;

  const previousTotalBalance = parseFloat(totalBalance.innerText);
  const totalBalanceAmount = userDepositAmount + previousTotalBalance;
  totalBalance.innerText = totalBalanceAmount;

  userDeposit.value = "";
});

// withdraw button event handler
withdrawBtn.addEventListener("click", function () {
  const userWithdrawString = userWithdraw.value;
  const userWithdrawAmount = parseFloat(userWithdrawString);

  const previousWithdrawString = previousWithdraw.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawString);

  const previousTotalBalance = parseFloat(totalBalance.innerText);

  if (userWithdrawAmount > previousTotalBalance) {
    alert("You have insufficient balance!");
    return;
  }

  const totalWithdraw = userWithdrawAmount + previousWithdrawAmount;
  previousWithdraw.innerText = totalWithdraw;

  const totalBalanceAmount = previousTotalBalance - userWithdrawAmount;
  totalBalance.innerText = totalBalanceAmount;

  userWithdraw.value = "";
});
