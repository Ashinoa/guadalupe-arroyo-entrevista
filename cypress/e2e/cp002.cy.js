import HomePage from "../support/pages/HomePage";
describe('Aplicar filtro de equipos', () => {

    beforeEach(() => {
        cy.visit('/', { failOnStatusCode: false });
    })

    it('Filtrar memoria tipo number y precio con distintos tipos de datos', () => {
        HomePage.filterMemory(128);
        HomePage.filterPrice("200000", 300.000);
        HomePage.countProducts(); 

    })

    it('Mostrar mas productos', () => {
        HomePage.filterPrice(200.000, "$300.000");
        HomePage.countProducts(); 

    })

    context('ipad-2 resolution', () => {
        beforeEach(() => {
            cy.viewport('ipad-2');
        })
        it('Filtrar memoria tipo string y precio con distintos tipos de datos responsive', () => {
            HomePage.filterMemory('128GB');
            HomePage.filterPrice(200.000, "$300.000");
            HomePage.countProducts();

        })
    })



})