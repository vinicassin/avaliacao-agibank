import loc from './locators'

Cypress.Commands.add('searchCommand', (search_text) => {
    cy.get(loc.HOME.BTN_OPEN_SEARCH).click()
    cy.get(loc.HOME.TXT_SEARCH).first().type(search_text)
    cy.get(loc.HOME.BTN_SEARCH).first().click()

})


