class ProductPage {

    search(element) {
        cy.fixture('dataCP001.json').then((locators) => {
            cy.get(locators.searchText).should('be.visible').contains(element).should('contain.text', 'Hasta 3 cuotas sin interés');
        });
    }

    selectIncorrectPaymentMethods(entity, card, installments) {
        cy.fixture('dataCP003.json').then((locators) => {
            cy.get(locators.paymentMethods).should('be.visible').click();
            cy.get(locators.searchSelectEntity).should('be.visible').click();
            cy.get(locators.searchBank).should('be.visible').contains(entity).click();
            cy.get(locators.searchSelectCard).should('be.visible').click();
            cy.get(locators.searchCard).should('be.visible').contains(card).click();

            cy.get(locators.searchListInstallment).should('be.visible').should('not.contain.text', installments);
            
        });
    }

    selectCorrectPaymentMethods(entity, card, installments) {
        cy.fixture('dataCP003.json').then((locators) => {
            cy.get(locators.paymentMethods).should('be.visible').click();
            cy.get(locators.searchSelectEntity).should('be.visible').click();
            cy.get(locators.searchBank).should('be.visible').contains(entity).click();
            cy.get(locators.searchSelectCard).should('be.visible').click();
            cy.get(locators.searchCard).should('be.visible').contains(card).click();

            cy.get(locators.searchListInstallment).should('be.visible').should('contain', installments);
            
        });
    }

}
export default new ProductPage();