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

    lastNameInput() {
        return cy.get('#lastName')
    }

    fillLastName(lastName) {
        this.lastNameInput().type(lastName)
    }

    userEmailInput() {

        return cy.get('#userEmail')
    }


    fillUserEmail(userEmail) {
        this.userEmailInput().fill(userEmail)
    }

    genderRadioButton() {

        return cy.get('input[name="gender"]')
    }

    selectGender(gender) {

        this.genderRadioButton().check(gender)
    }

    mobilePhoneInput() {
        return cy.get('#userNumber')
    }

    fillMobilePhone(mobilePhone) {
        this.mobilePhoneInput().fill(mobilePhone)
    }

    dateOfBirthInput() {
        return cy.get('#dateOfBirthInput')
    }

    selectDateOfBirth(dateOfBirth) {
        this.dateOfBirthInput().click()
        cy.get('.react-datepicker__year-select').select(dateOfBirth.year)
        cy.get('.react-datepicker__month-select').select(dateOfBirth.month)
        cy.contains(
            '.react-datepicker__day:not(.react-datepicker__day--outside-month)',
            new RegExp(`^${dateOfBirth.day}$`)
        ).click()

    }


    submitButton() {
        return cy.get('#submit')

    }
    submit() {
        this.submitButton().click();
    }
}

export default new PracticeFormPage()