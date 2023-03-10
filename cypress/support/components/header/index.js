
import {el} from './elements'
class Header {
    userlonggerIN(username) {
        cy.get(el.FullName, { timeout: 10000 })
            .should('be.visible')
            .should('have.text', username)

    }

}

export default new Header()