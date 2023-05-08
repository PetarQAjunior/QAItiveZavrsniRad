import { navigationBar, topTrending } from '../support/POM/homePage';
import { registrationPage } from '../support/POM/registrationPage';
import { componentsPage } from '../support/POM/componentsPage';
import { cartPage } from '../support/POM/yourCartPage';
import { checkoutPage } from '../support/POM/checkoutPage';
import { myAccountPage } from '../support/POM/myAccountPage';
import { confirmOrderPage } from '../support/POM/confirmOrderPage';

describe('Buying products Flow Tests', () => {

    beforeEach('Login', () => {
        cy.login('bobanrajovic@011.rs', 'usnebojevina123')
        cy.get(navigationBar.homeButton).click()
      })
    afterEach('Logout', () => {
        cy.visit('/index.php?route=account/account')
        cy.get(myAccountPage.logoutButton,{settimeout:10000}).click()
      })

it('Adding items to the cart', () => {
        cy.get(topTrending.category3).click()
        cy.url().should('include', '/index.php?route=product/category&path=25')
        cy.get(componentsPage.product).eq(4).realHover()
        cy.get(componentsPage.productAction).should('exist')
        cy.get(componentsPage.cartButtonProductAction).eq(4).click()
        cy.get(componentsPage.notificationProductaAdded).should('exist')
        cy.get(componentsPage.notificationViewCartButton).click()
        cy.url().should('include', 'index.php?route=checkout/cart')
        cy.get(cartPage.removeFromCartButton).click()
    })
it('Product is added to the cart, quantity and price correct', () => {
        cy.get(topTrending.category3).click()
        cy.url().should('include', '/index.php?route=product/category&path=25')
        cy.get(componentsPage.product).eq(1).realHover()
        cy.get(componentsPage.productAction).should('exist')
        cy.get(componentsPage.cartButtonProductAction).eq(1).click()
        cy.get(componentsPage.notificationProductaAdded).should('exist')
        cy.get(componentsPage.notificationViewCartButton).click()
        cy.url().should('include', 'index.php?route=checkout/cart')
        cy.get(cartPage.imageTableCell).should('have.attr', 'alt', 'Palm Treo Pro')
        cy.get(cartPage.productNameTableCell).should('include', 'Palm Treo Pro')
        cy.get(cartPage.modelTableCell).should('have.text', 'Product 2')
        cy.get(cartPage.quantityInputField).should('have.value', '1')
        cy.get(cartPage.uniteTableCell).should('have.text','$279.99')
        cy.get(cartPage.totalTableCell).should('have.text','$279.99')
        cy.get(cartPage.subTotalPriceTableCell).should('have.text', '$279.99')
        cy.get(cartPage.totalPriceTableCell).should('have.text', '$279.99')
        cy.get(cartPage.checkoutButton).click()
        cy.url().should('include', '/index.php?route=checkout/checkout')
        cy.get(checkoutPage.shoppingCartLink).click()
        cy.get(cartPage.removeFromCartButton).click()
        cy.get(cartPage.emptyCartContinueButton).click()
    })
it('Complete the order', () => {
        cy.get(topTrending.category3).click()
        cy.url().should('include', '/index.php?route=product/category&path=25')
        cy.get(componentsPage.product).eq(1).realHover()
        cy.get(componentsPage.productAction).should('exist')
        cy.get(componentsPage.cartButtonProductAction).eq(1).click()
        cy.get(componentsPage.notificationProductaAdded).should('exist')
        cy.get(componentsPage.notificationViewCartButton).click()
        cy.url().should('include', 'index.php?route=checkout/cart')
        cy.get(cartPage.imageTableCell).should('have.attr', 'alt', 'Palm Treo Pro')
        cy.get(cartPage.productNameTableCell).should('have.text', 'Palm Treo Pro ')
        cy.get(cartPage.modelTableCell).should('have.text', 'Product 2')
        cy.get(cartPage.quantityInputField).should('have.value', '1')
        cy.get(cartPage.uniteTableCell).should('have.text','$279.99')
        cy.get(cartPage.totalTableCell).should('have.text','$279.99')
        cy.get(cartPage.subTotalPriceTableCell).should('have.text', '$279.99')
        cy.get(cartPage.totalPriceTableCell).should('have.text', '$279.99')
        cy.get(cartPage.checkoutButton).click()
        cy.url().should('include', '/index.php?route=checkout/checkout')
        cy.get(checkoutPage.telephoneInputField).should('have.value', '+38268051011')
        cy.get(checkoutPage.sameDeliveryAdressCheckbox).should('be.checked')
        cy.get(checkoutPage.termsAndConditionsCheckbox).click()
        cy.get(checkoutPage.continueButton).click()
        cy.get(confirmOrderPage.confirmOrderButton).click()
        cy.url().should('include', '/index.php?route=checkout/success')
        cy.get(registrationPage.continueButtonAfter).click()
    })
})