import loc from '../support/locators'

describe('Validar campo de pesquisa blog AgiBank', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('Validar campo de pesquisa com valor valido renda fixa', () => {
    cy.searchCommand("renda fixa")  // exemplo usando custom commands do cypress
    cy.get(loc.SEARCH.SEARCH_TITLE).should('contain', 'renda fixa')
    cy.get('article').should('exist')
  })

  it('Validar campo de pesquisa com valor não encontrado', () => {
    cy.get(loc.HOME.BTN_OPEN_SEARCH).click() // sem usar o custom commands do cypress
    cy.get(loc.HOME.TXT_SEARCH).first().type("C6Bank")
    cy.get(loc.HOME.BTN_SEARCH).first().click()
    cy.get(loc.SEARCH.TITLE).should('have.text', 'Nenhum resultado')
  })
  
})
