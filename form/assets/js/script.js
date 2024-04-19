let signUpSpan = document.querySelector('.signup-span')
let logInSpan = document.querySelector('.login-Span')
let signUpForm = document.querySelector('#signup')
let logInForm = document.querySelector('#login')
let formWrapper = document.querySelectorAll('.form-wrapper')
let inputWrapper = document.querySelectorAll('.input-wrapper')
let inputUserName = document.querySelectorAll('#username')
let inputPassword = document.querySelectorAll('#password')
let userNameInputMessage = document.querySelectorAll('.username-input-message')
let passWordInputMessage = document.querySelectorAll('.password-input-message')
let LoaderElem = document.querySelector('.loader')

// moving forms
function moveToLeft () {
    signUpForm.style.transform = 'translateX(-100%)'
    signUpForm.style.transition = 'transform .75s ease-in-out'
    logInForm.style.transform = 'translateX(-100%)'
    logInForm.style.transition = 'transform .75s ease-in-out'
}
function moveToRight () {
    signUpForm.style.transform = 'translateX(0%)'
    signUpForm.style.transition = 'transform .75s ease-in-out'
    logInForm.style.transform = 'translateX(0%)'
    logInForm.style.transition = 'transform .75s ease-in-out'
}

// sending username input messages
function blurLoginUserName (event) {
    let inputValue = event.target.value
    if (inputValue.length < 3 || inputValue.length > 10){
        userNameInputMessage[0].innerHTML = 'Username characters must be between 3 and 10!'
        userNameInputMessage[0].style.color = '#DD5746'
        userNameInputMessage[0].style.fontSize = '10px'
    }
    if (inputValue.length === 0) {
        userNameInputMessage[0].innerHTML = 'This field can not be empty!'
    }
}

function keydownLogInUserName () {
    userNameInputMessage[0].innerHTML = ''
}

function blurSignUpUserName (event) {
    let inputValue = event.target.value
    if (inputValue.length < 3 || inputValue.length > 10){
        userNameInputMessage[1].innerHTML = 'Username characters must be between 3 and 10!'
        userNameInputMessage[1].style.color = '#DD5746'
        userNameInputMessage[1].style.fontSize = '10px'
    }
    if (inputValue.length === 0) {
        userNameInputMessage[1].innerHTML = 'This field can not be empty!'
    }
}

function keydownSignUpUserName () {
    userNameInputMessage[1].innerHTML = ''
}

// sending password input message
function blurLoginPassWord (event) {
    let inputValue = event.target.value
    if (inputValue.length < 8 || inputValue.length > 20){
        passWordInputMessage[0].innerHTML = 'Password characters must be between 8 and 20!'
        passWordInputMessage[0].style.color = '#DD5746'
        passWordInputMessage[0].style.fontSize = '10px'
    }
    if (inputValue.length === 0) {
        passWordInputMessage[0].innerHTML = 'This field can not be empty!'
    }
}

function keydownLogInPassWord () {
    passWordInputMessage[0].innerHTML = ''
}

function blurSignUpPassWord (event) {
    let inputValue = event.target.value
    if (inputValue.length < 8 || inputValue.length > 20){
        passWordInputMessage[1].innerHTML = 'Password characters must be between 8 and 20!'
        passWordInputMessage[1].style.color = '#DD5746'
        passWordInputMessage[1].style.fontSize = '10px'
    }
    if (inputValue.length === 0) {
        passWordInputMessage[1].innerHTML = 'This field can not be empty!'
    }
}

function keydownSignUpPassWord () {
    passWordInputMessage[1].innerHTML = ''
}

// prevent submit
function preventSubmit(event) {
    event.preventDefault()
}

// fade loading page
function fadePage () {
    LoaderElem.classList.add('hidden')
}

signUpSpan.addEventListener('click', moveToLeft)
logInSpan.addEventListener('click', moveToRight)
inputUserName[0].addEventListener('blur', blurLoginUserName)
inputUserName[0].addEventListener('keydown', keydownLogInUserName)
inputUserName[1].addEventListener('blur', blurSignUpUserName)
inputUserName[1].addEventListener('keydown', keydownSignUpUserName)
inputPassword[0].addEventListener('blur', blurLoginPassWord)
inputPassword[0].addEventListener('keydown', keydownLogInPassWord)
inputPassword[1].addEventListener('blur', blurSignUpPassWord)
inputPassword[1].addEventListener('keydown', keydownSignUpPassWord)
signUpForm.addEventListener('submit', preventSubmit)
logInForm.addEventListener('submit', preventSubmit)
window.addEventListener('load',fadePage)