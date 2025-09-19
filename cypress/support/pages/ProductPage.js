class ProductPage {
    constructor() {
        this.searchText = '.price-content ';

    }

     search(element) {
        cy.get(this.searchText)
          .should('be.visible')
          .contains(element)
          .should('contain.text', 'Hasta 3 cuotas sin interés');
    }
}
export default new ProductPage();