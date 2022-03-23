/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.calc-online.xyz/calculadora-basica')
    })

    it('Fazer a soma com resultado certo', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').click()
        cy.get(':nth-child(2) > :nth-child(4) > .btn-info').click()
        cy.get(':nth-child(4) > :nth-child(2) > .form-control').click()
        cy.get(':nth-child(5) > :nth-child(3)').click()
        cy.get('#answer').should('contain.value',13)
      })

    
    })
