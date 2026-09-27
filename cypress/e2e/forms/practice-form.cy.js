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



    })
})