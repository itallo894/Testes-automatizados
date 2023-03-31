

import { el } from './elements'
import toast from '../../components/toast'
import alert from '../../components/alert'

class SignupPage {

    constructor() {
        this.toast = toast
        this.alert = alert
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

    



}
export default new SignupPage