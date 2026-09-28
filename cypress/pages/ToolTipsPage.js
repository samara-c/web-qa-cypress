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

    tooltipTextField() {

        return cy.get('#toolTipTextField')
    }

    hoverTooltipTextField() {

        this.tooltipTextField().trigger('mouseover')
    }

    contraryLink() {

        return cy.contains('a', 'Contrary')
    }

    sectionLink() {

        return cy.contains('a', '1.10.32')
    }

    hoverContraryLink() {

        this.contraryLink().trigger('mouseover')
    }

    hoverSectionLink() {

        this.sectionLink().trigger('mouseover')
    }

    pageTitle() {
        return cy.get('h1')
    }

    hoverPageTitle() {
        this.pageTitle().trigger('mouseover')
    }

    leaveTooltipButton() {
        this.tooltipButton().trigger('mouseout')
    }

}

export default new ToolTipsPage()