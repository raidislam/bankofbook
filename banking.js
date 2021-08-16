let depositBtn = document.getElementById("deposit-btn");
let depositInputMoney = document.getElementById("deposit-money");
let depositToatl = document.getElementById("deposit-balance");
let withdarwBtn = document.getElementById("withdarw-btn");
let withdrawInputMoney = document.getElementById("withdraw-money");
let withdrawTotal = document.getElementById("witharaw-balance");
let mainBalance = document.getElementById("totalBalance");

//depositBtn addevent

depositBtn.addEventListener("click", function () {
  //get the deposit ammount
  let newDepositInput = parseFloat(depositInputMoney.value);
  let oldDepositMoeny = parseFloat(depositToatl.innerText);
  let currentTotalDeposti = newDepositInput + oldDepositMoeny;
  depositToatl.innerText = currentTotalDeposti;

  //clear the deopsit input
  depositInputMoney.value = "";

  //main balance update
  let mainBalanceAmount = parseFloat(mainBalance.innerText);
  let newMainBalance = mainBalanceAmount + newDepositInput;
  mainBalance.innerText = newMainBalance;
});

//withdarw money

withdarwBtn.addEventListener("click", function () {
  let oldWithdrawMoney = parseFloat(withdrawTotal.innerText);
  let newWithdrawMoney = parseFloat(withdrawInputMoney.value);
  let totalWithdraw = oldWithdrawMoney + newWithdrawMoney;
  withdrawTotal.innerText = totalWithdraw;

  //reduce from main balance
  let mainTotalBalance = parseFloat(mainBalance.innerText);
  let reduceWithdraw = mainTotalBalance - newWithdrawMoney;
  mainBalance.innerText = reduceWithdraw;
  console.log(reduceWithdraw);

  //clear input field
  withdrawInputMoney.value = "";
  console.log(totalWithdraw);
});
