import ResultSearchPage from './ResultSearchPage';
class HomePage {

    buttonSearch(element) {
        if (!element) return;

        cy.fixture('dataCP001.json').then((locators) => {
            cy.get(locators.searchButton).should('be.visible').click();
            cy.get(locators.searchInput).should('be.visible').type(`${element}{enter}`);
        });
    }

    filterMemory(valueMemory) {
        if (!valueMemory) return;

        cy.fixture('dataCP002.json').then((locators) => {

            cy.get('body').then(($body) => {
                if ($body.find(locators.filterItemsContract).is(':hidden') && $body.find(locators.expandFilter).is(':visible')) {
                    cy.get(locators.expandFilter).should('be.visible').click();
                    cy.get(locators.searchMemoryFilterContract).should('be.visible').click();
                    cy.get(locators.searchExpandMemoryList).should('be.visible').contains(valueMemory).click();
                } else {
                    cy.get(locators.searchMemoryFilterContract).scrollIntoView().should('be.visible').click();
                    cy.get(locators.searchExpandMemoryList).should('be.visible').contains(valueMemory).click();
                }
            });

        });
    }

    #searchFilterPriceContract(locators) {
        cy.get(locators.searchPriceFilterContract).closest(locators.searchParentFilterPrice).find(locators.searchTitleFilterPrice).should('be.visible').click();

        cy.get(locators.searchExpandPriceList).each(($li) => {
            const text = $li.text().replace(/[^\d\-]/g, '');
            const parts = text.split('-');
            const liMin = parseInt(parts[0], 10);
            const liMax = parseInt(parts[1], 10);

            if (liMin <= parseMin && liMax >= parseMax) {
                cy.wrap($li).should('be.visible').click();
                return false;
            }
        });
    }

    filterPrice(min, max) {
        if (!min && !max) return;

        let parseMin = (typeof min === 'string') ? parseInt(this.#searchNumberInString(min), 10) : min;
        let parseMax = (typeof max === 'string') ? parseInt(this.#searchNumberInString(max), 10) : max;

        cy.fixture('dataCP002.json').then((locators) => {
            cy.get('body').then(($body) => {
                if ($body.find(locators.filterItemsContract).is(':hidden') && $body.find(locators.expandFilter).is(':visible')) {
                    cy.get(locators.expandFilter).should('be.visible').click();
                    this.#searchFilterPriceContract(locators);

                } else {
                    this.#searchFilterPriceContract(locators);
                }
            });
        });
    }

    #searchNumberInString(text) {
        const match = text.match(/\d+/);
        return match ? match[0] : null;
    }


    countProducts() {
        cy.fixture('dataCP002.json').then((locators) => {
            cy.get(locators.searchContentProducts).should('have.length.greaterThan', 0).then(($list) => {
                const count = $list.length;

                if (count < 12) {
                    // cuenta menos de 12 equipos
                    cy.get(locators.searchTotalProducts).should('be.visible').invoke('text').then((text) => {
                        const totalProducts = parseInt(this.#searchNumberInString(text), 10);
                        expect(totalProducts).to.eq(count);
                        cy.log(`Se encontraron ${count} equipos`);
                    });

                } else if (count === 12) {
                    // cuenta 12 equipos 
                    cy.get(locators.searchButtonMoreProducts).then(($btn) => {
                        if ($btn.is(':disabled') && $btn.is(':visible')) {
                            cy.get(locators.searchTotalProducts).should('be.visible').invoke('text').then((text) => {
                                const totalProducts = parseInt(this.#searchNumberInString(text), 10);
                                expect(totalProducts).to.eq(count);
                                cy.log(`Se encontraron ${count} equipos`);
                            });

                        } else if ($btn.is(':enabled') && $btn.is(':visible')) {
                            cy.wrap($btn).click();
                        }
                    });
                }
            });

            cy.url().then((url) => {
                if (url.includes('/smartphones')) {
                    ResultSearchPage.countMoreProducts();
                }
            });

        });
    }

    searchThirdProduct() {
        cy.fixture('dataCP003.json').then((locators) => {
            cy.get(locators.searchProducts).eq(2).find("a").first().click();
        });
    }

    searchProductByIndex(product){
        cy.fixture('dataCP004.json').then((locators) => {
            expect(product).to.be.within(0, 12);
            cy.get(locators.searchProducts).eq(product).find("a").first().click();
        });
    }

}

export default new HomePage();