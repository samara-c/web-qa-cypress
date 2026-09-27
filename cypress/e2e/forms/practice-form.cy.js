import PracticeFormPage from "../../pages/PracticeFormPage"


describe('Practice Form', () => {

    let testData 

    beforeEach(() => {

        cy.fixture('practice-form-data').then((data) => {
            testData=data
        })
        PracticeFormPage.visit();
    })

    it('should submit the form with valid data', () => {

        //filling and submitting form 
        
        PracticeFormPage.typeFirstName(testData.validUser.firstName)
        PracticeFormPage.typeLastName(testData.validUser.lastName)
        PracticeFormPage.typeUserEmail(testData.validUser.email)
        PracticeFormPage.selectGender(testData.validUser.gender)
        PracticeFormPage.typeMobilePhone(testData.validUser.mobilePhone)
        PracticeFormPage.selectDateOfBirth(testData.validUser.dateOfBirth)
        PracticeFormPage.selectSubjects(testData.validUser.subjects)
        PracticeFormPage.selectHobbies(testData.validUser.hobbies)
        PracticeFormPage.uploadPicture(testData.validUser.picture)
        PracticeFormPage.typeStreetAddress(testData.validUser.currentAddress.street)
        PracticeFormPage.selectState(testData.validUser.currentAddress.stateAndCity.state)
        PracticeFormPage.selectCity(testData.validUser.currentAddress.stateAndCity.city)
        PracticeFormPage.submit()

        //validating results

        PracticeFormPage.resultModal().should('be.visible')

    })
})