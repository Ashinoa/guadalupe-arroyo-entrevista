class HomePage {

    buttonSearch(element) {
        if (element !== '' && element !== null) {
            cy.fixture('dataCP001.json').then((locators) => {
                cy.get(locators.searchButton).should('exist').click();
                cy.get(locators.searchInput).should('exist').type(`${element}{enter}`);
            })

        }
    }

    filterMemory(valueMemory) {
        if (!valueMemory) return;
  
        // Los filtros no estan visibles entonces clickea en el boton de filtros
        cy.fixture('dataCP002.json').then((locators) => {
            cy.get(locators.searchMemoryFilterOn).then(($filterOn) => {
                if (!$filterOn.is(':visible')) {
                    cy.get(locators.searchFilterOff).should('exist').should('be.visible').click();
                }
            });

            cy.get(locators.searchMemoryFilterOn).should('exist').should('be.visible').click();
            cy.get(locators.searchMemoryList).should('exist').should('be.visible').contains(valueMemory).click();
        })

    }


    filterPrice(min, max) {
        if (!min && !max) return;
        let parseMin = min;
        let parseMax = max;

        if (typeof min === 'string' && typeof max === 'string') {
            parseMin = parseInt(this.#searchNumberInString(min), 10);
            parseMax = parseInt(this.#searchNumberInString(max), 10);

        } else if(typeof min === 'string' && typeof max === 'number'){
            parseMin = parseInt(this.#searchNumberInString(min), 10);
            
        }else if(typeof min === 'number' && typeof max === 'string'){

            parseMax = parseInt(this.#searchNumberInString(max), 10);
        }

        cy.fixture('dataCP002.json').then((locators) => {
            cy.get(locators.searchPriceFilterOn).then(($filterOn) => {
                if (!$filterOn.is(':visible')) {
                    cy.get(locators.searchFilterOff).should('exist').should('be.visible').click();
                }
            });

            cy.get(locators.searchPriceFilterOn).should('exist').should('be.visible').click();

            cy.get(locators.searchPriceList).each(($li) => {
                const text = $li.text().replace(/[^\d\-]/g, ''); // borra lo que no sean numeros y guiones
                const parts = text.split('-');
                const liMin = parseInt(parts[0], 10);
                const liMax = parseInt(parts[1], 10);

                if (liMin <= parseMin && liMax >= parseMax) {
                    cy.wrap($li).click();
                    return false; // cortamos el each
                }
            });
        })

    }

    #searchNumberInString(text) {
        const match = text.match(/\d+/); //devuelve un array de coincidencias.
        return match ? match[0] : null;//Tomo el primer numero
    }

}
export default new HomePage();