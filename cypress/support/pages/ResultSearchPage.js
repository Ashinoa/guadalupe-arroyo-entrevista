class ResultSearchPage {

    searchElementList(element) {
        cy.fixture('dataCP001.json').then((locators) => {
            cy.get(locators.searchList).should('be.visible').find(`a[href*="${element}"]`).click();
        });
    }

    #searchNumberInString(text) {
        const match = text.match(/\d+/);
        return match ? match[0] : null;
    }

    countMoreProducts() {
        cy.fixture('dataCP002.json').then((locators) => {
            cy.get(locators.searchTotalMoreProducts).then(($els) => {
                let totalText;

                if ($els.length > 1) {
                    totalText = $els.eq(1).text();
                } else {
                    totalText = $els.eq(0).text();
                }
                const totalProducts = parseInt(this.#searchNumberInString(totalText), 10);
                cy.get(locators.searchListMoreProducts).should('have.length.greaterThan', 0).then(($list) => {
                    const count = $list.length;
                    if (totalProducts > count) {
                        expect(totalProducts).to.be.greaterThan(count);
                        cy.log(`Se encontraron ${count} equipos`);
                    } else {
                        expect(totalProducts).to.eq(count);
                        cy.log(`Se encontraron ${count} equipos`);
                    }
                });
            });
        });
    }

}
export default new ResultSearchPage();