/// <reference types="cypress" />
import {BasePage} from "../page_objects/BasePage";


export class SelectablePage extends BasePage {
    launchSelectableApplication(){
        cy.visit("https://demoqa.com/selectable")
    }

    static get gridButton(){
        return cy.get("a[id='demo-tab-grid");
    }

    static numberButton(number){
        return cy.get("div#gridContainer").contains(number);
    }

    static shouldBeActive(number){
        return cy.contains(number).should('have.class', "active");
    }

    static notActive(number){
        return cy.contains(number).not('have.class', "active");
    }
}

export default SelectablePage