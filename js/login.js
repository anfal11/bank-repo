const userInput = document.getElementById('user-input');
const userPassword = document.getElementById('user-password');
const submitBtn = document.getElementById('btn-submit');

submitBtn.addEventListener('click', function (){
    if(userInput.value === 'admin@gmail.com' && userPassword.value === 'admin'){
        window.location.href = 'bank-inside.html';
    }
    else{
        alert('Wrong User Name or Password, mail: admin@gmail.com, password: admin');
    }
    userInput.value = '';
    userPassword.value = '';
})


const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function(){
    if(userPassword.type === "password"){
        userPassword.type = "text";
        togglePassword.innerHTML = `<i class="fa-regular fa-eye-slash relative right-8"></i>`;
    } else {
        userPassword.type = "password";
        togglePassword.innerHTML = `<i class="fa-regular fa-eye  relative right-8"></i>`;
    }
})
