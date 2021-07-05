let emailInput=document.querySelector('#emailInput');
let countryInput=document.querySelector('#countryInput');
let zipCodeInput=document.querySelector('#zip');
let passwordInput=document.querySelector('#passwordInput');
let confirmedPasswordInput=document.querySelector('#password_validation');
let submitButton=document.querySelector('#submit');

let icons=document.querySelectorAll('i');
icons.forEach((icon)=>{
    icon.addEventListener('click',(e)=>{
        if(icon.classList.contains('fa-eye')){
            e.target.previousElementSibling.setAttribute('type','passwordInput');
            icon.classList.replace('fa-eye','fa-eye-slash')
        }
        else {
            e.target.previousElementSibling.setAttribute('type','text')
            icon.classList.replace('fa-eye-slash','fa-eye')

        }
    })
})

countryInput.addEventListener('blur',()=>{
    let countryName=countryInput.value.toLowerCase();
    if (countryName==='united states'){
        zipCodeInput.setAttribute('required','required');
    }
    else {
        zipCodeInput.removeAttribute('required');
    }
})

confirmedPasswordInput.addEventListener('blur',()=>{
    if(passwordInput.value!==confirmedPasswordInput.value){
        confirmedPasswordInput.setCustomValidity('Password did not match');
        confirmedPasswordInput.reportValidity();
    }
    else {
        confirmedPasswordInput.setCustomValidity('');
    }
})

submitButton.addEventListener('click',()=>{
    if(emailInput.validity.valid && countryInput.validity.valid && zipCodeInput.validity.valid && confirmedPasswordInput.validity.valid){
        alert('Nicely Done');
    }
})

submitButton.addEventListener('keyup',(e)=>{
    if(e.code==='Enter'){
        submitButton.click();
    }
})