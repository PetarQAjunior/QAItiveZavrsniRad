const registrationPage = {
    firstNameField: '#input-firstname',
    lastNameField: '#input-lastname',
    emailField: '#input-email',
    telephoneField: '#input-telephone',
    passwordField: '#input-password',
    passwordConfirmField: '#input-confirm',
    subscribeYes: '.col-sm-10 > :nth-child(1) > .custom-control-label',
    subscribeNo: ':nth-child(2) > .custom-control-label',
    privacyPolicy: '.float-right > .custom-control',
    continueButton: '.float-right > .btn',
    continueButtonAfter: '.buttons > .btn',
    registerPageWarning: '#account-register > .alert',
    errorFirstName: '#account > :nth-child(3) > .col-sm-10 > .text-danger',
    errorLastName: ':nth-child(4) > .col-sm-10 > .text-danger',
    errorEmail: ':nth-child(5) > .col-sm-10 > .text-danger',
    errorTelephone: ':nth-child(6) > .col-sm-10 > .text-danger',
    errorPassword: ':nth-child(2) > .col-sm-10 > .text-danger',
    errorConfirmPassword: ':nth-child(2) > :nth-child(3) > .col-sm-10 > .text-danger'
}
export { registrationPage }