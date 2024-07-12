// document.getElementById('btn-deposit').addEventListener('click',function(){
//      const depositField =document.getElementById('deposit-field');
//      const newDepositAmountString = depositField.value;
//      newDepositAmount = parseFloat(newDepositAmountString);
//     //  console.log(depositAmount);

//      depositField.value = '';


//      const depositTotalElement = document.getElementById('deposit-total');
//      const previousDepositTotalString = depositTotalElement.innerText;
//      const previousDepositTotal = parseFloat(previousDepositTotalString);

//      // add two numbers
//     const currentDepositTotal = previousDepositTotal + newDepositAmount;

//      depositTotalElement.innerText = currentDepositTotal;
//      //get ballance current number
//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotalElement.innerText;
//     const balanceTotal = parseFloat(previousBalanceTotalString);

//      const currentBalanceTotal =  balanceTotal + newDepositAmount;
//      //set the balace total 
//      balanceTotalElement.innerText = currentBalanceTotal;
   

// });




document.getElementById('btn-deposit').addEventListener('click', function() {
    // Get the new deposit amount from the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Clear the input field
    depositField.value = '';

    // Update the deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // Update the balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
});
