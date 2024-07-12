//step 1:
document.getElementById('btn-withdraw').addEventListener('click',function(){
     //step:2 take the value form withdraw input field
     const withdrawInputField = document.getElementById('withdraw-field');
     const  withdrawInputFieldValue = parseFloat(withdrawInputField.value);
     
     //step:3 after getting value clear the field 
     withdrawInputField.value ='';
     if(isNaN(withdrawInputFieldValue)){
        alert('Its not a number');
        return;
     }
    //  console.log(withdrawInputFieldValue);



     //withdraw display
     //get the withdraw section and get it's value
     const withdrawTotalElement = document.getElementById('withdraw-total');
     const withdrawTotalValue = parseFloat(withdrawTotalElement.innerText);
    //  console.log(withdrawTotalValue);
    //after geting withdraw valu and withdraw balance sum those two value

    
    
    // const currentWithdrawTotal =  withdrawInputFieldValue +  withdrawTotalValue;
    // // console.log(currentWithdrawTotal);
    // // assign the value to the withdraw display section 
    // withdrawTotalElement.innerText = currentWithdrawTotal;


    // now you can take the balance total
     const balanceTotalElement = document.getElementById('balance-total');
     const balanceValue = parseFloat(balanceTotalElement.innerText);
    //  console.log(balanceValue);
   




    if(balanceValue < withdrawInputFieldValue){
        alert('bar er bank e ato taka nai');
        return;
    }
    const currentWithdrawTotal =  withdrawInputFieldValue +  withdrawTotalValue;
    // console.log(currentWithdrawTotal);
    // assign the value to the withdraw display section 
    withdrawTotalElement.innerText = currentWithdrawTotal;




    const newBalance = balanceValue - withdrawInputFieldValue;
    //assing the new value of balance display section
    balanceTotalElement.innerText = newBalance;

});