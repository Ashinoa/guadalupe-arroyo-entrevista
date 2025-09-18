class HomePage {
    constructor(){
        this.searchButton = '#search_action button[type="submit"][title="Search"][class="action search"][aria-label="Search"]'
        this.searchInput = 'input[id="search"][type="text"][name="q"][placeholder="Buscar productos"][class="input-text"] '
        
    }

    search(element){
        cy.get(this.searchButton).should('be.visible').click();
        cy.get(this.searchInput).should('be.visible').type(element);
        cy.get(this.searchButton).should('be.visible').click();
    }
}
   export default new HomePage();