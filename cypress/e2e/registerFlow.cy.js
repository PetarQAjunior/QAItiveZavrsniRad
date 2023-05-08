import { homePage, header, navigationBar } from '../support/POM/homepage';
import { loginPage } from '../support/POM/loginPage';
import { registrationPage } from '../support/POM/registrationPage';

describe('Register Flow Tests', () => {

    beforeEach('Visit url', () => {
        cy.visit('/')
      })

    it('registerPositive', () => {
        cy.visit('/index.php?route=account/register')

        cy.get(registrationPage.firstNameField).type('Nedeljko')
        cy.get(registrationPage.lastNameField).type('Bajic')
        cy.get(registrationPage.emailField).type('baja7@baja.rs')
        cy.get(registrationPage.telephoneField).type('+381602252634')
        cy.get(registrationPage.passwordField).type('usnebojevina123')
        cy.get(registrationPage.passwordConfirmField).type('usnebojevina123')
        cy.get(registrationPage.subscribeYes).click()
        cy.get(registrationPage.privacyPolicy).click()
        cy.get(registrationPage.continueButton).click()
        
        cy.url().should('include', '/index.php?route=account/success')
        cy.get('.page-title').should('have.text', ' Your Account Has Been Created!')

    })
    it('registerEmptyFields', () => {
        cy.visit('/index.php?route=account/register')
        cy.get(registrationPage.passwordConfirmField).type('a')
        cy.get(registrationPage.continueButton).click()
        cy.get(registrationPage.registerPageWarning).should('exist')
        .and('have.text', ' Warning: You must agree to the Privacy Policy!')
        cy.get(registrationPage.errorFirstName).should('exist')
        .and('have.text', 'First Name must be between 1 and 32 characters!')
        cy.get(registrationPage.errorLastName).should('exist')
        .and('have.text', 'Last Name must be between 1 and 32 characters!')
        cy.get(registrationPage.errorEmail).should('exist')
        .and('have.text', 'E-Mail Address does not appear to be valid!')
        cy.get(registrationPage.errorTelephone).should('exist')
        .and('have.text', 'Telephone must be between 3 and 32 characters!')
        cy.get(registrationPage.errorPassword).should('exist')
        .and('have.text', 'Password must be between 4 and 20 characters!')
        cy.get(registrationPage.errorConfirmPassword).should('exist')
        .and('have.text', 'Password confirmation does not match password!')
        
    })

    it('registerInvalid', () => {
        cy.visit('/index.php?route=account/register')

        cy.get(registrationPage.firstNameField).type('Nedeljko')
        cy.get(registrationPage.lastNameField).type('Bajic')
        cy.get(registrationPage.emailField).type('baja4@baja.rs')
        cy.get(registrationPage.telephoneField).type('+381602252634')
        cy.get(registrationPage.passwordField).type('usnebojevina123')
        cy.get(registrationPage.passwordConfirmField).type('usnebojevina123')
        cy.get(registrationPage.subscribeYes).click()
        cy.get(registrationPage.privacyPolicy).click()
        cy.get(registrationPage.continueButton).click()
        cy.get(registrationPage.registerPageWarning).should('exist')
        .and('have.text', ' Warning: E-Mail Address is already registered!')

    })
})