

import { el } from './elements'
import toast from '../../components/toast'

class SignupPage {

    constructor() {
        this.toast = toast
    }


    go() {
        cy.visit('/signup')
    }

    go2(){
        cy.visit('/')
    }

    form(user) {
        cy.get(el.name).type(user.name)
        cy.get(el.email).type(user.email)
        cy.get(el.password).type(user.password)
    }

    submit() {

        cy.contains(el.signupbutton).click()

    }

    alertHavetext(expectText) {
        cy.contains('.alert-error', expectText)
            .should('be.visible')
    }




}
export default new SignupPage