class PracticeFormPage {

    //form
    visit() {
        cy.visit('/automation-practice-form') 
    }

    firstNameInput() {
        return cy.get('#firstName')

    }

    typeFirstName(firstName) {
        this.firstNameInput().type(firstName)
    }

    lastNameInput() {
        return cy.get('#lastName')
    }

    typeLastName(lastName) {
        this.lastNameInput().type(lastName)
    }

    userEmailInput() {

        return cy.get('#userEmail')
    }


    typeUserEmail(userEmail) {
        this.userEmailInput().type(userEmail)
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

    typeMobilePhone(mobilePhone) {
        this.mobilePhoneInput().type(mobilePhone)
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

    subjectsInput() {

        return cy.get('#subjectsInput')

    }

    selectSubjects(subjects) {

        subjects.forEach((subject)=> {
            this.subjectsInput().type(subject)

            cy.contains(
                '[role="option"]',
                new RegExp(`^${subject}$`)
            ).click()

        }

    )}

    hobbyLabel(hobby) {
    return cy.contains(
        'label',
        new RegExp(`^${hobby}$`)
        )
    }

    selectHobbies(hobbies) {
    hobbies.forEach((hobby) => {
        this.hobbyLabel(hobby).click()
        })
    }

    uploadPictureFile() {
        return cy.get('#uploadPicture')
    }

    uploadPicture(file) {
        this.uploadPictureFile().selectFile(file)
    }

    streetAddressTextBox() {
        return cy.get('#currentAddress')
    }

    typeStreetAddress(street) {
        this.streetAddressTextBox().type(street)

    }

    stateDropdown() {
        return cy.get('#state')
    }

    selectState(state) {

        this.stateDropdown().click()
        cy.contains(
            '[role="option"]',
        new RegExp(`^${state}$`))
        .click()
    }

    cityDropdown() {
        return cy.get('#city')
    }

    selectCity(city) {

        this.cityDropdown().click()
        cy.contains(
            '[role="option"]',
        new RegExp(`^${city}$`))
        .click()
    }

    submitButton() {
        return cy.get('#submit')

    }
    submit() {
        this.submitButton().click();
    }

    //result modal
    resultModal() {
        return cy.get('[role="dialog"][aria-labelledby="example-modal-sizes-title-lg"]')

    }

    resultModalTitle() {
        return cy.get('#example-modal-sizes-title-lg')

    }

    resultRow(label) {
    return cy.contains('td', label).parent('tr')
    }
}

export default new PracticeFormPage()