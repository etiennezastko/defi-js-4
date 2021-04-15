const password = document.getElementById("password") ;
const checkPassword = document.getElementById("check-password") ;
const alert = document.getElementById("alert") ;
checkPassword.addEventListener('keyup', function() {
    if (checkPassword.value === password.value) {
        alert.style.color = 'green';
       alert.innerHTML = 'The password entered is ok';
    } else{
       alert.style.color = 'red';
       alert.innerHTML = 'The password entered don\'t match';
    }
})