let email=document.querySelector('#email');
let country=document.querySelector('#country');
let zipCode=document.querySelector('#zip');
let password=document.querySelector('#password');
let submitButton=document.querySelector('#submit');
let confirmedPassword=document.querySelector('#password_validation');
let icons=document.querySelectorAll('i');
icons.forEach((icon)=>{
    icon.addEventListener('click',(e)=>{
        if(icon.classList.contains('fa-eye')){
            e.target.previousElementSibling.setAttribute('type','password');
            icon.classList.replace('fa-eye','fa-eye-slash')
        }
        else {
            e.target.previousElementSibling.setAttribute('type','text')
            icon.classList.replace('fa-eye-slash','fa-eye')

        }
    })
})

country.addEventListener('blur',()=>{
    let countryName=country.value.toLowerCase();
    if (countryName==='united states'){
        zipCode.setAttribute('required','required');
    }
    else {
        zipCode.removeAttribute('required');
    }
})

confirmedPassword.addEventListener('blur',()=>{
    if(password.value!==confirmedPassword.value){
        confirmedPassword.setCustomValidity('Password did not match');
        confirmedPassword.reportValidity();
    }
    else {
        confirmedPassword.setCustomValidity('');
    }
})

submitButton.addEventListener('submit',()=>{
    if(email.validity.valid && country.validity.valid && zipCode.validity.valid && confirmedPassword.validity.valid){
        alert('Nicely Done');
    }
})