class ToolTipsPage {

    visit() {

        cy.visit('/tool-tips')
    }

    tooltipButton() {

        return cy.get('#toolTipButton')
    }

    tooltip() {
        return cy.get('.tooltip-inner')
    }

    hoverTooltipButton() {
        this.tooltipButton().trigger('mouseover')
    }


}

export default new ToolTipsPage()