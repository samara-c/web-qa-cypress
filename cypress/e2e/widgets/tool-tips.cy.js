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
    it ('should display the tooltip when hovering over the text field', ()=> {

        ToolTipsPage.hoverTooltipTextField();

        //assertions
        ToolTipsPage.tooltip()
            .should('be.visible')
            .and('contain.text', 'You hovered over the text field')
    })

     it ('should display the tooltip when hovering over the contrary link', ()=> {

        ToolTipsPage.hoverContraryLink();

        //assertions
        ToolTipsPage.tooltip()
            .should('be.visible')
            .and('contain.text', 'You hovered over the Contrary')
    })

    it ('should display the tooltip when hovering over the section link', ()=> {

        ToolTipsPage.hoverSectionLink();

        //assertions
        ToolTipsPage.tooltip()
            .should('be.visible')
            .and('contain.text', 'You hovered over the 1.10.32')
    })

    //edge cases
    it ('should not display tooltip when hovering over an unrelated element', ()=> {

        ToolTipsPage.hoverPageTitle();

        //assertions
        ToolTipsPage.tooltip()
            .should('not.exist')
    })

    it ('should hide tooltip when mouse leaves the button', ()=> {

        ToolTipsPage.tooltip()
            .should('not.exist')

        ToolTipsPage.hoverTooltipButton();

        //assertions
        ToolTipsPage.tooltip()
            .should('be.visible')
            .and('contain.text', 'You hovered over the Button')

        ToolTipsPage.leaveTooltipButton()

        ToolTipsPage.tooltip()
            .should('not.exist')
    })

    

})