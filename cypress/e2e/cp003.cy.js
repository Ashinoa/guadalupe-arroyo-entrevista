import HomePage from "../support/pages/HomePage";
import ProductPage from "../support/pages/ProductPage";

describe('Validar cuotas en compra de equipo', () => {

    beforeEach(() => {
        cy.visit('/', { failOnStatusCode: false });
    })

    it('Ingresar al 3er equipo de la lista', () => {
        HomePage.searchThirdProduct();
        ProductPage.selectIncorrectPaymentMethods("Credicoop","Visa","60 cuotas");

    })

    it('Ingresar al 3er equipo de la lista', () => {
        HomePage.searchThirdProduct();
        ProductPage.selectCorrectPaymentMethods("Credicoop","Visa","3 cuotas");

    })



})
