let emailInput=document.querySelector('#email');
let countryInput=document.querySelector('#country');
let zipCodeInput=document.querySelector('#zip');
let passwordInput=document.querySelector('#password');
let confirmedPasswordInput=document.querySelector('#password_validation');
let submitButton=document.querySelector('#submit');

emailInput.addEventListener('blur',()=>{
    if(emailInput.validity.valid===false){
        emailInput.reportValidity();
        emailInput.classList.add('invalid');
    }
    else {
        emailInput.classList.remove('invalid');
    }
})

countryInput.addEventListener('blur',()=>{
    if(countryInput.validity.valueMissing){
        countryInput.reportValidity();
        countryInput.classList.add('invalid');
    }
    else{
        countryInput.classList.remove('invalid');
        let countryName=countryInput.value.toLowerCase();
        if (countryName==='united states'){
            zipCodeInput.setAttribute('required','required');
        }
        else {
            //in case when user first written united states as a country
            // and then changed the country name
            zipCodeInput.removeAttribute('required');
        }
    }
})

zipCodeInput.addEventListener('blur',()=>{
    if (zipCodeInput.validity.valid) {
        zipCodeInput.classList.remove('invalid');
    }
    else {
        zipCodeInput.classList.add('invalid');
    }
})

confirmedPasswordInput.addEventListener('blur',()=>{
    if(passwordInput.value!==confirmedPasswordInput.value){
        confirmedPasswordInput.setCustomValidity('Password did not match');
        confirmedPasswordInput.classList.add('invalid');
        confirmedPasswordInput.reportValidity();
    }
    else {
        confirmedPasswordInput.setCustomValidity('');
        confirmedPasswordInput.classList.remove('invalid');
    }
})

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