/// <reference types="cypress" />

export class BasePage {
    launchApplication(){
        cy.visit("https://demoqa.com/")
    }
}

export default BasePage