/// <reference types= "cypress" />

context('Funcionalidade Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit("https://www.cvcl.it/home-cvcl")
        cy.get('[href="/extranet/area-riservata-candidati"]').click()
        cy.get('#txtNomeUtente').type("80167622")
        cy.get('#txtDataNascita').type("31/10/1983")
        cy.get('#btnLogin').click()
        cy.get('#ctl00_ContentPlaceHolder1_gwparametri_ctl02_btnStp').click()
        
      
    
    
    });
});