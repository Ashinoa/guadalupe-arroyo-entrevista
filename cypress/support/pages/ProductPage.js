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

    backHomePage() {
        cy.fixture('dataCP004.json').then((locators) => {
            cy.get(locators.backHomePage).should('be.visible').click();
        })
    }

    addProductInCart() {
        cy.fixture('dataCP004.json').then((locators) => {
            cy.get(locators.titleProduct).should('be.visible').invoke('text').as('nameProduct');
            cy.get(locators.brandProduct).should('be.visible').invoke('text').as('brandProduct');
            cy.get(locators.priceProduct).should('be.visible').invoke('text').as('priceProduct');

            cy.get('@nameProduct').then((titleProduct) => {
                cy.screenshot(titleProduct + '-before-add-cart');
            });

            cy.get(locators.addCart).should('be.visible').click();

            cy.get(locators.conterProductsCart).invoke('text').then((count) => {
                const items = parseInt(count.trim(), 10);

                cy.get(locators.firstLinkCart).should('be.visible').click();
                if (items > 0) {
                    cy.get(locators.secondaryLinkCart).should('be.visible').click();
                }
            });

            cy.get('@nameProduct').then((titleProduct) => {
                cy.get(locators.cartProductTitle).should('contain.text', titleProduct);
                cy.screenshot(titleProduct + '-after-validation-cart');
            });

            cy.get('@brandProduct').then((brandProduct) => {
                cy.get(locators.cartProductBrand).should('contain.text', brandProduct);
            });

            cy.get('@priceProduct').then((priceProduct) => {
                cy.get(locators.cartProductPrice).should('contain.text', priceProduct);
            });


        });
    }



}
export default new ProductPage();