describe('homework', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/selectable')
    })
  
    it('displays two todo items by default', () => {
      cy.get("a[id='demo-tab-grid']").click();
     // cy.get("div[id='row1']").as("Two").click();
     cy.contains("Two").click();
     cy.contains("Four").click();
     cy.contains("Six").click();
     cy.contains("Eight").click();
     //validate
        cy.contains("Two").should('have.class', "active");
        cy.contains("Four").should('have.class', "active");
        cy.contains("Six").should('have.class', "active");
        cy.contains("Eight").should('have.class', "active");
        
        cy.contains("One").not('have.class', "active");
        cy.contains("Three").not('have.class', "active");
        cy.contains("Five").not('have.class', "active");
        cy.contains("Seven").not('have.class', "active");
        cy.contains("Nine").not('have.class', "active");
    

    });

});