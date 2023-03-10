

class Header {
    userlonggerIN(username) {
        cy.get('header a strong', { timeout: 10000 })
            .should('be.visible')
            .should('have.text', username)

    }

}

export default new Header()