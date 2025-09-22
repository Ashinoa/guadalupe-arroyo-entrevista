import HomePage from "../support/pages/HomePage";
import ProductPage from "../support/pages/ProductPage";
describe('Validar informacion del equipo en carrito de compras', () => {
    beforeEach(() => {
        cy.visit('/', { failOnStatusCode: false });
    })

    it('Validar producto en carrito de compra', () => {
        HomePage.searchProductByIndex(1);
        ProductPage.addProductInCart();
    })

    context('ipad-2 resolution', () => {
        beforeEach(() => {
            cy.viewport('ipad-2');
        })

        it('Validar productos en carrito de compra responsive', () => {
            HomePage.searchProductByIndex(1);
            ProductPage.addProductInCart();
            ProductPage.backHomePage();
            HomePage.searchProductByIndex(0);
            ProductPage.addProductInCart();

        })
    })

})