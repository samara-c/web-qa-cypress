import PracticeFormPage from "../../pages/PracticeFormPage"
import SubmissionFormatter from "../../utils/submissionFormatter"


describe('Practice Form', () => {

    let testData 

    beforeEach(() => {

        cy.fixture('practice-form-data').then((data) => {
            testData=data
        })
        PracticeFormPage.visit();
    })

    //happy path
    it('should submit the form with valid data', () => {

        //formatting expected results

        const user = testData.validUser

        const expectedName =
            SubmissionFormatter.formatFullName(user)

        const expectedDateOfBirth =
            SubmissionFormatter.formatDateOfBirth(user.dateOfBirth)

        const expectedSubjects =
            SubmissionFormatter.formatSubjects(user.subjects)

        const expectedHobbies = 
            SubmissionFormatter.formatHobbies(user.hobbies)

        const expectedPicturePath =
            SubmissionFormatter.formatPicturePath(user.picture)

        const formatStateAndCity = 
            SubmissionFormatter.formatStateAndCity(user.currentAddress.stateAndCity)

        //filling and submitting form 

        PracticeFormPage.typeFirstName(user.firstName)
        PracticeFormPage.typeLastName(user.lastName)
        PracticeFormPage.typeUserEmail(user.email)
        PracticeFormPage.selectGender(user.gender)
        PracticeFormPage.typeMobilePhone(user.mobilePhone)
        PracticeFormPage.selectDateOfBirth(user.dateOfBirth)
        PracticeFormPage.selectSubjects(user.subjects)
        PracticeFormPage.selectHobbies(user.hobbies)
        PracticeFormPage.uploadPicture(user.picture)
        PracticeFormPage.typeStreetAddress(user.currentAddress.street)
        PracticeFormPage.selectState(user.currentAddress.stateAndCity.state)
        PracticeFormPage.selectCity(user.currentAddress.stateAndCity.city)
        PracticeFormPage.submit()


        //assertions 
        PracticeFormPage.resultModal().should('be.visible')
        PracticeFormPage.resultRow('Student Name')
            .should('contain.text', expectedName)

    })
})