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

        const user = testData.validUser
        //format expected results

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

        const expectStateAndCity = 
            SubmissionFormatter.formatStateAndCity(user.currentAddress.stateAndCity)

        //fill and submit form 

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
        PracticeFormPage.resultModal()
            .should('be.visible')
        PracticeFormPage.resultModalTitle()
            .should('have.text', 'Thanks for submitting the form')
        PracticeFormPage.resultRow('Student Name')
            .should('contain.text', expectedName)
        PracticeFormPage.resultRow('Student Email')
            .should('contain.text', user.email)
        PracticeFormPage.resultRow('Gender')
            .should('contain.text', user.gender)
        PracticeFormPage.resultRow('Mobile')
            .should('contain.text', user.mobilePhone)
        PracticeFormPage.resultRow('Date of Birth')
            .should('contain.text', expectedDateOfBirth)
        PracticeFormPage.resultRow('Subjects')
            .should('contain.text', expectedSubjects)
        PracticeFormPage.resultRow('Hobbies')
            .should('contain.text', expectedHobbies)
        PracticeFormPage.resultRow('Picture')
            .should('contain.text', expectedPicturePath)
        PracticeFormPage.resultRow('Address')
            .should('contain.text', user.currentAddress.street)
        PracticeFormPage.resultRow('State and City')
            .should('contain.text', expectStateAndCity)

    })

    //edge cases
    
    it('should not submit the form when required fields are empty', () => {

        //submit empty form
        PracticeFormPage.submit()

        //assertions 
        PracticeFormPage.resultModal()
            .should('not.exist')
        PracticeFormPage.firstNameInput()
            .should('match', ':invalid')
        PracticeFormPage.lastNameInput()
            .should('match', ':invalid')
        PracticeFormPage.genderRadioButton()
            .should('not.be.checked')
        PracticeFormPage.mobilePhoneInput()
            .should('match', ':invalid')


     })

    it('should not submit the form with an invalid email', () => {

        const user = testData.validUser
        const invalidEmailValue = testData.invalidValues.invalidEmail

        PracticeFormPage.typeFirstName(user.firstName)
        PracticeFormPage.typeLastName(user.lastName)
        PracticeFormPage.typeUserEmail(invalidEmailValue)
        PracticeFormPage.selectGender(user.gender)
        PracticeFormPage.typeMobilePhone(user.mobilePhone)
        PracticeFormPage.submit()

        //assertions
        PracticeFormPage.resultModal()
            .should('not.exist')
        PracticeFormPage.userEmailInput()
            .should('match', ':invalid')
        


    }),

    it('should not submit the form with an invalid mobile phone number', () => {

        const user = testData.validUser
        const invalidPhoneNumberValue = testData.invalidValues.mobileWithLetters

        PracticeFormPage.typeFirstName(user.firstName)
        PracticeFormPage.typeLastName(user.lastName)
        PracticeFormPage.typeUserEmail(user.email)
        PracticeFormPage.selectGender(user.gender)
        PracticeFormPage.typeMobilePhone(invalidPhoneNumberValue)

        PracticeFormPage.mobilePhoneInput()
            .should('have.value', invalidPhoneNumberValue)
            .should('match', ':invalid')
        PracticeFormPage.submit()

        //assertions
        PracticeFormPage.resultModal()
            .should('not.exist')
        PracticeFormPage.mobilePhoneInput()
            .should('match', ':invalid')
        


    })
    
})