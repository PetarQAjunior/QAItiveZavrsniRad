import { homePage, header, navigationBar } from '../support/POM/homepage';
import { loginPage } from '../support/POM/loginPage';
import { registrationPage } from '../support/POM/registrationPage';

describe('Register Flow Tests', () => {

    beforeEach('Visit url', () => {
        cy.visit('/')
      })

    it('registerPositive', () => {
        cy.get(navigationBar.myAccountButton).click()
        cy.url().should('include', '/index.php?route=account/login')
        cy.get(loginPage.continueButton).click()
        cy.url().should('include', '/index.php?route=account/register')

        cy.get(registrationPage.firstNameField).type('Boban')
        cy.get(registrationPage.lastNameField).type('Rajovic')
        cy.get(registrationPage.emailField).type('bobanrajovic@piroman.rs')
        cy.get(registrationPage.telephoneField).type('+38268051011')
        cy.get(registrationPage.passwordField).type('usnebojevina123')
        cy.get(registrationPage.passwordConfirmField).type('usnebojevina123')
        cy.get(registrationPage.subscribeYes).click()
        cy.get(registrationPage.privacyPolicy).click()
        cy.get(registrationPage.continueButton).click()
        
        cy.url().should('include', '/index.php?route=account/success')
        cy.get('.page-title').should('have.text', 'Your Account Has Been Created!')

    })
    it.only('registerEmptyFields', () => {
        cy.get(navigationBar.myAccountButton).click()
        cy.url().should('include', '/index.php?route=account/login')
        cy.get(loginPage.continueButton).click()
        cy.url().should('include', '/index.php?route=account/register')
        cy.get(registrationPage.continueButton).click()
        
        
    })

    it('registerInvalid', () => {
        cy.get(navigationBar.myAccountButton).click()
        cy.url().should('include', '/index.php?route=account/login')
        cy.get(loginPage.continueButton).click()
        cy.url().should('include', '/index.php?route=account/register')

        cy.get(registrationPage.firstNameField).type('Boban')
        cy.get(registrationPage.lastNameField).type('Rajovic')
        cy.get(registrationPage.emailField).type('bobanrajovic@piroman.rs')
        cy.get(registrationPage.telephoneField).type('+38268051011')
        cy.get(registrationPage.passwordField).type('usnebojevina123')
        cy.get(registrationPage.passwordConfirmField).type('usnebojevina123')
        cy.get(registrationPage.subscribeYes).click()
        cy.get(registrationPage.privacyPolicy).click()
        cy.get(registrationPage.continueButton).click()
        
        cy.url().should('include', '/index.php?route=account/success')
        cy.get('.page-title').should('have.text', 'Your Account Has Been Created!')

    })
})