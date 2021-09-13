const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", function () {

    const accountNo = document.getElementById("account-no").value;
    const password = document.getElementById("pass").value;
    const passwordParse = parseFloat(password)
    if (accountNo === "admin" && passwordParse === 1010) {
        document.getElementById("login").style.display = "none"
        document.getElementById("transition").style.display = "block"
    }
    else {
        alert("invalid account or wrong pass");
    }
    document.getElementById("account-no").value = '';
    document.getElementById("pass").value = '';
})

// deposit btn function
const depositBtn = document.querySelector("#deposit");
depositBtn.addEventListener("click", function () {

    // deposit balance
    const depositAmount = document.getElementById("deposit-amount").value;
    document.getElementById("deposit-amount").value = '';
    const depositAmountParse = parseFloat(depositAmount);

    const depositBalance = document.getElementById("deposit-balance").innerText;
    const depositBalanceParse = parseFloat(depositBalance);

    const sumOfDeposit = depositAmountParse + depositBalanceParse;

    document.getElementById("deposit-balance").innerText = sumOfDeposit.toFixed(2);

    // new balance
    const newBalance = document.getElementById("new-balance").innerText;
    const newBalanceParse = parseFloat(newBalance);

    const sumOfNewBalance = depositAmountParse + newBalanceParse;

    document.getElementById("new-balance").innerText = sumOfNewBalance.toFixed(2);

    if (depositAmountParse <= 0) {
        depositAmountParse = depositAmountParse;
    }
})


// withdraw btn function
const withdrawBtn = document.querySelector("#withdraw");
withdrawBtn.addEventListener("click", function () {
    // withdraw amount
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    document.getElementById("withdraw-amount").value = '';
    const withdrawAmountParse = parseFloat(withdrawAmount);

    const withdrawBalance = document.getElementById("withdraw-balance").innerText;
    const withdrawBalanceParse = parseFloat(withdrawBalance);

    const sumOfWithdraw = withdrawAmountParse + withdrawBalanceParse;
    document.getElementById("withdraw-balance").innerText = sumOfWithdraw.toFixed(2);

    // new balance
    const newBalance = document.getElementById("new-balance").innerText;
    const newBalanceParse = parseFloat(newBalance);

    const sumOfNewBalance = newBalanceParse - withdrawAmountParse;

    document.getElementById("new-balance").innerText = sumOfNewBalance.toFixed(2);
})

