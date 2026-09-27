class PracticeFormPage {


    visit() {
        cy.visit('/automation-practice-form') 
    }

    firstNameInput() {
        return cy.get('#firstName')

    }

    fillFirstName(firstName) {
        this.firstNameInput().type(firstName)
    }


    submitButton() {
        return cy.get('#submit')

    }
    submit() {
        this.submitButton().click();
    }
}

export default new PracticeFormPage()