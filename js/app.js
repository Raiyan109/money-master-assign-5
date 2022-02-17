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
        foodInput.value = '';
        rentInput.value = '';
        clothInput.value = '';
        return alert('Please give a valid amount of money in input field');
    }
    expenses.innerText = inputAmount + availableExpenses;
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';

    // Income and balance
    let incomeField = document.getElementById('income-input');
    let availableBalance = parseFloat(balance.innerText);
    let balanceAmount = parseFloat(incomeField.value);
    if (isNaN(balanceAmount) || balanceAmount < 0) {
        return alert('Please input valid amount in Your income field')
    }
    balance.innerText = balanceAmount + availableBalance;
    balance.innerText = parseFloat(incomeField.value) - expenses.innerText;
    incomeField.value = '';
})















































































// // // Adding event listener on Calculate button
// // document.getElementById('calc-btn').addEventListener('click', function () {
// //     const foodInput = document.getElementById('food-input').value;
// //     const rentInput = document.getElementById('rent-input').value;
// //     const clothInput = document.getElementById('cloth-input').value;
// //     if (foodInput < 0 || rentInput < 0 || clothInput < 0) {
// //         alert('You can not give a negative number');
// //     }


// //     // Adding total expenses
// //     const expenses = document.getElementById('total-expenses');
// //     const totalExpenses = expenses.innerText = (parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput));


// //     // Income field and Total balance
// //     const incomeField = document.getElementById('income-input').value;
// //     const balance = document.getElementById('total-balance').innerText = incomeField - totalExpenses;
// //     if (incomeField < 0) {
// //         alert('You can not give a negative number');
// //     }


// //     // if (!incomeField) {
// //     //     console.log('please provide a value which is able to convert in Integer');
// //     // }
// //     // else {
// //     //     console.log(incomeField);
// //     // }






//     // if (isNaN(incomeField, totalExpenses)) {
//     //     incomeField, totalExpenses.value = '';
//     // }
//     // else {
//     //     const totalExpenses = document.getElementById('total-expenses').innerText = (parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput));


//     //     // Income field and Total balance
//     //     const incomeField = document.getElementById('income-input').value;
//     //     const balance = document.getElementById('total-balance').innerText = incomeField - totalExpenses;
//     // }
//     // const successMessage = document.getElementById('notify-success');
//     // const failError = document.getElementById('notify-fail');
//     // if (incomeField == 'number' && totalExpenses == 'number') {
//     //     successMessage.style.display = 'block';
//     //     failError.style.display = 'none';
//     // }
//     // else {
//     //     successMessage.style.display = 'none';
//     //     failError.style.display = 'block';
//     // }
//     // Show error msg
//     // function showError(input, message) {
//     //     const control = input.parentElement;
//     //     control.className = 'control notify';
//     // }
//     // if (incomeField.value === '') {
//     //     showError(incomeField, 'Give your income amount please');
//     // }
//     // else {
//     //     showSuccess(incomeField);
//     // }





// // })

// document.getElementById('save-btn').addEventListener('click', function () {
//     const saveInput = document.getElementById('save-input').value;
//     const savingAmount = document.getElementById('saving-amount').innerText;
//     const remainingBalance = document.getElementById('remaining-balance').innerText;
//     const incomeField = document.getElementById('income-input').value;

//     function percentage(num, per) {
//         return (num / 100) * per;
//     }

//     const per = percentage(incomeField, saveInput);
//     savingAmount.innerText = per;
// })
