class ResultSearchPage {
    constructor() {
        this.searchList = 'ol[class="products list items product-items"] li';

    }

    searchElementList(element) {
        cy.get(this.searchList).should('be.visible').find(`a[href*="${element}"]`).click();
    }
}
export default new ResultSearchPage();