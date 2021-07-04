let form=document.querySelector('form');
let country=document.querySelector('#country');
let password=document.querySelector('#password');
let errorMessage=document.querySelector('.error');
let submitButton=document.querySelector('button');

let confirmedPassword=document.querySelector('#password_validation');

country.addEventListener('change',()=>{
    let countryName=country.value.toLowerCase();
    if (countryName==='united states'){
        form[3].setAttribute('required','required');
    }
    else {
        form[3].removeAttribute('required');
    }
})

confirmedPassword.addEventListener('blur',()=>{
    if(password.value!==confirmedPassword.value){
        errorMessage.textContent='did not match'
    }
    else {
        errorMessage.textContent='';
    }
})

submitButton.addEventListener('click',(e)=>{
    if(password.value!==confirmedPassword.value){
        errorMessage.textContent='did not match'
        e.preventDefault();
    }
})