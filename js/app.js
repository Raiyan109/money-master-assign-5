const calcBtn = document.getElementById('calc-btn');
const saveBtn = document.getElementById('save-btn');

const expenses = document.getElementById('total-expenses');
const balance = document.getElementById('total-balance');

const foodInput = document.getElementById('food-input');
const rentInput = document.getElementById('rent-input');
const clothInput = document.getElementById('cloth-input');
const incomeField = document.getElementById('income-input');


calcBtn.addEventListener('click', function (event) {

    // Expenses 
    const foodInput = document.getElementById('food-input');
    const rentInput = document.getElementById('rent-input');
    const clothInput = document.getElementById('cloth-input');
    let availableExpenses = parseFloat(expenses.innerText);
    let inputAmount = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothInput.value);
    if (isNaN(inputAmount) || inputAmount < 0) {
        return alert('Please give a valid amount of money in input field');
    }
    expenses.innerText = inputAmount + availableExpenses;


    // Income and balance
    let incomeField = document.getElementById('income-input');
    let availableBalance = parseFloat(balance.innerText);
    let balanceAmount = parseFloat(incomeField.value);
    if (isNaN(balanceAmount) || balanceAmount < 0) {
        return alert('Please input valid amount in Your income field')
    }
    balance.innerText = balanceAmount + availableBalance;
    balance.innerText = parseFloat(incomeField.value) - expenses.innerText;

})

// Save part
const saveInput = document.getElementById('save-input');
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');
document.getElementById('save-btn').addEventListener('click', function () {
    let incomeField = document.getElementById('income-input');
    let saveInput = document.getElementById('save-input');
    let incomeIntoPer = parseInt(incomeField.value) / 100;
    let savingIntoPer = parseInt(saveInput.value);
    let saveAmount = parseInt(savingAmount.innerText);
    savingAmount.innerText = incomeIntoPer * savingIntoPer;

    remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);

})



















































































