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
                    console.log("filter Items:", locators.filterItemsContract);
                    console.log("strong visible: ", locators.expandFilter);
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

    filterPrice(min, max) {
        if (!min && !max) return;

        let parseMin = (typeof min === 'string') ? parseInt(this.#searchNumberInString(min), 10) : min;
        let parseMax = (typeof max === 'string') ? parseInt(this.#searchNumberInString(max), 10) : max;

        cy.fixture('dataCP002.json').then((locators) => {
            cy.get('body').then(($body) => {
                if ($body.find(locators.filterItemsContract).is(':hidden') && $body.find(locators.expandFilter).is(':visible')) {
                    console.log("filter Items:", locators.filterItemsContract);
                    console.log("strong visible: ", locators.expandFilter);
                    cy.get(locators.expandFilter).should('be.visible').click();
                    cy.get(locators.searchPriceFilterContract).closest(locators.searchParentFilterPrice).find(locators.searchTitleFilterPrice).should('be.visible').click();

                    cy.get(locators.searchExpandPriceList).each(($li) => {
                        const text = $li.text().replace(/[^\d\-]/g, '');
                        const parts = text.split('-');
                        const liMin = parseInt(parts[0], 10);
                        const liMax = parseInt(parts[1], 10);

                        if (liMin <= parseMin && liMax >= parseMax) {
                            cy.wrap($li).should('be.visible').click();
                            return false; // Cortamos el bucle .each()
                        }
                    });
                } else {
                    cy.get(locators.searchPriceFilterContract).closest(locators.searchParentFilterPrice).find(locators.searchTitleFilterPrice).should('be.visible').click();

                    cy.get(locators.searchExpandPriceList).each(($li) => {
                        const text = $li.text().replace(/[^\d\-]/g, '');
                        const parts = text.split('-');
                        const liMin = parseInt(parts[0], 10);
                        const liMax = parseInt(parts[1], 10);

                        if (liMin <= parseMin && liMax >= parseMax) {
                            cy.wrap($li).should('be.visible').click();
                            return false; // Cortamos el bucle .each()
                        }
                    });

                }

            });


        });
    }

    #searchNumberInString(text) {
        const match = text.match(/\d+/);
        return match ? match[0] : null;
    }
}

export default new HomePage();