/// <reference types="cypress" />
describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/compound-component/accordion')
  })

  it('can open a closed item', () => {
    cy.get('[data-test=1]')
      .click()
      .find('div.max-h-52')
      .should('have.class', 'max-h-52')
  })

  it('can close an opened item', () => {
    cy.get('[data-test=1]')
      .click()
      .find('div.max-h-52')
      .should('have.class', 'max-h-52')

    cy.get('[data-test=1]')
      .click()
      .find('div.max-h-52')
      .should('have.class', 'max-h-52')
  })
})
