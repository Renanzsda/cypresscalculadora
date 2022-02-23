/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('/cypress/integration/TesteCal/index.html')
    })

    it('Fazer a soma com resultado certo', () => {
        cy.get('#num7').click()
        cy.get('#soma').click()
        cy.get('#num5').click()
        cy.get('#resultado').click()
        cy.get('input#tela').should('contain.value',12)
      })

      it('Fazer a soma com resultado errado', () => {
        cy.get('#num7').click()
        cy.get('#soma').click()
        cy.get('#num5').click()
        cy.get('#resultado').click()
        cy.get('input#tela').should('contain.value',13)
      })

    })
