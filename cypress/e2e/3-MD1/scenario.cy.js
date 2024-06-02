const { SelectablePage} = require(".//page_objects/SelectablePage");

describe('homework', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/selectable')
    })
  
    it('displays two todo items by default', () => {
//click necessary buttons
     SelectablePage.gridButton.click();
     SelectablePage.numberButton("Two").click();
     SelectablePage.numberButton("Four").click();
     SelectablePage.numberButton("Six").click();
     SelectablePage.numberButton("Eight").click();
//validate active buttons
        SelectablePage.shouldBeActive("Two");
        SelectablePage.shouldBeActive("Four");
        SelectablePage.shouldBeActive("Six");
        SelectablePage.shouldBeActive("Eight");

        SelectablePage.notActive("One");
        SelectablePage.notActive("Three");
        SelectablePage.notActive("Five");
        SelectablePage.notActive("Seven");
        SelectablePage.notActive("Nine");
    
    });

});