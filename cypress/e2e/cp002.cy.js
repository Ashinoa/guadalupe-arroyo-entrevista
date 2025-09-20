import HomePage from "../support/pages/HomePage";
describe('filtrar memoria', () => {
    beforeEach(() => {
        cy.visit('/', { failOnStatusCode: false });
    })

    it('filtrar memoria 128GB y precio tipo number en viewport 1920x1080', () => {
        HomePage.filterMemory(128);
        HomePage.filterPrice("200000", 300.000);

    })

    context('macbook-11 resolution', () => {
        beforeEach(() => {
            cy.viewport('macbook-11')
        })
        it('filtrar memoria y precio tipo string en viewport default', () => {
            HomePage.filterMemory('128');
            HomePage.filterPrice(200.000, "$300.000");
            
        })
    })

})