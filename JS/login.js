document.getElementById('btn-submit').addEventListener('click',function(){
   //get the email form user 
   const emailField  = document.getElementById('user-email');
   const email = emailField.value;



   const passwordField  = document.getElementById('user-password');
   const password = passwordField.value;

   console.log(email, 'Password:',password);

   if(email === 'sontan@bap.com' && password ==='secret'){
           window.location.href = 'bank.html'
   }
   else{
    alert('Toke ami tejjo sonton ghosona korlam tui password vule gesos');
   }
})