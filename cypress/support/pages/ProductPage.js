class ProductPage {

    search(element) {
        cy.fixture('dataCP001.json').then((locators) => {
            cy.get(locators.searchText).should('be.visible').contains(element).should('contain.text', 'Hasta 3 cuotas sin interés');
        });
    }

    #searchNumberInString(text) {
        const match = text.match(/\d+/);
        return match ? match[0] : null;
    }

    countMoreProducts() {
        cy.fixture('dataCP002.json').then((locators) => {


            cy.get(locators.searchTotalMoreProducts).eq(1).invoke('text').then((text) => {// eq(1) --> agarro el segundo span que tiene el numero total
                const totalProducts = parseInt(this.#searchNumberInString(text), 10);
                cy.get(locators.searchListMoreProducts).should('have.length.greaterThan', 0).then(($list) => {
                    const count = $list.length;
                    if (totalProducts === count) {
                        expect(totalProducts).to.eq(count);
                        cy.log(`Se encontraron ${count} equipos`);
                    } else if (totalProducts > count) {
                        expect(totalProducts).to.be.greaterThan(count);
                        cy.log(`Se encontraron ${count} equipos`);
                    } else {
                        expect(count).to.be.greaterThan(totalProducts);
                        cy.log(`Se encontraron ${count} equipos`);
                    }
                });
            });
        });
    }

}
export default new ProductPage();