import HomePage from '../support/pages/HomePage';
import ResultSearchPage from '../support/pages/ResultSearchPage';
import ProductPage from '../support/pages/ProductPage'


describe('Validar cuotas en compra de equipo', () => {
     beforeEach(() => {
        cy.visit('/', { failOnStatusCode: false });
    })

    it('validar 3 cuotas sin interes', () => {
        HomePage.buttonSearch("a15");
        ResultSearchPage.searchElementList("samsung-galaxy-a15-4g.html");
        ProductPage.search('3 cuotas sin interés')
    })

})