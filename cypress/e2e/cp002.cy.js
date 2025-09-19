import HomePage from "../support/pages/HomePage";
describe('filtrar memoria', () => {
    beforeEach(() => {
        cy.visit('/', { failOnStatusCode: false });
    })

    it('filtrar memoria 128GB y precio tipo number en viewport 1920x1080', () => {
        cy.viewport(1920, 1080);
        cy.visit('/');
        HomePage.filterMemory(128);
        HomePage.filterPrice(200.000, 300.000);
    })

    it('filtrar memoria y precio tipo string en viewport default', () => {
        HomePage.filterMemory('128');
        HomePage.filterPrice("200.000", "$300.000");
    })

    it('precio con tipos de datos mezclados', () => {
        HomePage.filterMemory('128');
        HomePage.filterPrice(200.000, "$300.000");
    })

     it('precio con tipos de datos mezclados', () => {
        HomePage.filterMemory('128');
        HomePage.filterPrice("200.000-", 300.000);
    })

})