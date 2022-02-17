// Adding event listener on Calculate button
document.getElementById('calc-btn').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('cloth-input').value;

    // Adding total expenses
    const expenses = document.getElementById('total-expenses');
    const totalExpenses = expenses.innerText = (parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput));


    // Income field and Total balance
    const incomeField = document.getElementById('income-input').value;
    const balance = document.getElementById('total-balance').innerText = incomeField - totalExpenses;

    if (!incomeField) {
        console.log('please provide a value which is able to convert in Integer');
    }
    else {
        console.log(incomeField);
    }






    // if (isNaN(incomeField, totalExpenses)) {
    //     incomeField, totalExpenses.value = '';
    // }
    // else {
    //     const totalExpenses = document.getElementById('total-expenses').innerText = (parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput));


    //     // Income field and Total balance
    //     const incomeField = document.getElementById('income-input').value;
    //     const balance = document.getElementById('total-balance').innerText = incomeField - totalExpenses;
    // }
    // const successMessage = document.getElementById('notify-success');
    // const failError = document.getElementById('notify-fail');
    // if (incomeField == 'number' && totalExpenses == 'number') {
    //     successMessage.style.display = 'block';
    //     failError.style.display = 'none';
    // }
    // else {
    //     successMessage.style.display = 'none';
    //     failError.style.display = 'block';
    // }
    // Show error msg
    // function showError(input, message) {
    //     const control = input.parentElement;
    //     control.className = 'control notify';
    // }
    // if (incomeField.value === '') {
    //     showError(incomeField, 'Give your income amount please');
    // }
    // else {
    //     showSuccess(incomeField);
    // }





})
