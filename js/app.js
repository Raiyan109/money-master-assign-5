// Adding event listener on Calculate button
document.getElementById('calc-btn').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('cloth-input').value;

    // Adding total expenses
    const totalExpenses = document.getElementById('total-expenses').innerText = (parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput));


    // Income field
    const incomeField = document.getElementById('income-input').value;
    const balance = document.getElementById('total-balance').innerText = incomeField - totalExpenses;




})
