class ResultSearchPage {

    searchElementList(element) {
        cy.fixture('dataCP001.json').then((locators) => {
            cy.get(locators.searchList).should('be.visible').find(`a[href*="${element}"]`).click();
        });
    }
}
export default new ResultSearchPage();