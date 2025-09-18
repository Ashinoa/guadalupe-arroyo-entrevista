import HomePage from '../support/pages/HomePage';
import ResultSearchPage from '../support/pages/ResultSearchPage';
import ProductPage from '../support/pages/ProductPage'

describe('Validar cuotas en compra de equipo', () => {
    beforeEach(() => {
        cy.visit('/', { failOnStatusCode: false });
    })
    it('buscar equipo a15', () => {
        HomePage.search("a15");
    })

    it('seleccionar equipo a15', () => {
       cy.visit('https://tiendaonline.movistar.com.ar/catalogsearch/result/?q=a15');
        ResultSearchPage.searchElementList("samsung-galaxy-a15-4g.html");
    })

    it('validar 3 cuotas sin interes', () => {
        cy.visit('https://tiendaonline.movistar.com.ar/samsung-galaxy-a15-4g.html');
        ProductPage.search('3 cuotas sin interés')
    })

})