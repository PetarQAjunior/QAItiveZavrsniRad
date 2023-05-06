import { homePage, header, navigationBar, topTrending } from '../support/POM/homePage';
import { loginPage } from '../support/POM/loginPage';
import { registrationPage } from '../support/POM/registrationPage';
import { componentsPage } from '../support/POM/componentsPage';

describe('Buying products Flow Tests', () => {
    it('Adding items to the cart', () => {
        cy.visit('/')
        cy.get(navigationBar.myAccountButton).click()
        cy.url().should('include', '/index.php?route=account/login')
        cy.get(loginPage.continueButton).click()
        cy.url().should('include', '/index.php?route=account/register')

        cy.get(registrationPage.firstNameField).type('Boban')
        cy.get(registrationPage.lastNameField).type('Rajovic')
        cy.get(registrationPage.emailField).type('bobanrajovic@001.rs')
        cy.get(registrationPage.telephoneField).type('+38268051011')
        cy.get(registrationPage.passwordField).type('usnebojevina123')
        cy.get(registrationPage.passwordConfirmField).type('usnebojevina123')
        cy.get(registrationPage.subscribeYes).click()
        cy.get(registrationPage.privacyPolicy).click()
        cy.get(registrationPage.continueButton).click()
        
        cy.url().should('include', '/index.php?route=account/success')
        cy.get('.page-title').should('contain', 'Your Account Has Been Created!')
        cy.get(registrationPage.continueButtonAfterRegistration).click()
        cy.url().should('include', '/index.php?route=account/account')
        cy.get(navigationBar.homeButton).click()
        cy.url().should('include', '/index.php?route=common/home')
        cy.get(topTrending.category3).click()
        cy.url().should('include', '/index.php?route=product/category&path=25')
        cy.get(componentsPage.product).eq(0).realHover()
        cy.get(componentsPage.productAction).should('exist')
        cy.get(componentsPage.cartButtonProductAction).eq(0).click()
        cy.get(componentsPage.notificationProductaAdded).should('exist')
        cy.get(componentsPage.notificationViewCartButton).click()
    })
})