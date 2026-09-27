import PracticeFormPage from "../../pages/PracticeFormPage";
import ToolTipsPage from "../../pages/ToolTipsPage";

describe('Tool Tips', () => {

    beforeEach(() => {

        ToolTipsPage.visit()
    })
    it ('should display the tooltip when hovering over the button', ()=> {

        ToolTipsPage.hoverTooltipButton();

        //assertions
       ToolTipsPage.tooltip()
            .should('be.visible')
            .and('contain.text', 'You hovered over the Button')
    })
})