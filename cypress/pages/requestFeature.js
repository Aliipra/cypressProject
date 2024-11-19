class requestFeature{

    enterRequestFeature(){
        cy.get('.elementor-element-213e915 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').should('be.visible').click()
    }

    checkTitle(){
        cy.get('.elementor-element-5599441d > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').should('be.visible').should('have.text','Tell us your software feature ideas!')
    }

    enterForm(name,email,phoneNumber,type,Importants,section,message){

        cy.wait(1000)

        cy.get('#form-field-name').should('be.visible').type(name) // enter Name field

        cy.get('#form-field-email').should('be.visible').type(email) // enter Email field 

        cy.get('#form-field-phone').should('be.visible').type(phoneNumber) // enter phone number field

        // cy.get('.elementor-field-group-requestType').should('be.visible')
        if(type >= 0 & type <= 3)
        cy.get('.elementor-field-type-radio.elementor-field-group.elementor-column.elementor-field-group-requestType.elementor-col-100.elementor-field-required.elementor-mark-required > .elementor-field-subgroup.elementor-subgroup-inline > .elementor-field-option').eq(type).click() // Select a type
        else
        cy.log('type out of rang')
        // cy.get('.elementor-field-group-importants').should('be.visible')
        // cy.log(cy.get('.elementor-field-group-importants').children())

        if(Importants >= 0 & Importants <= 3)
        cy.get('.elementor-field-type-radio.elementor-field-group.elementor-column.elementor-field-group-importants.elementor-col-100.elementor-field-required.elementor-mark-required > .elementor-field-subgroup.elementor-subgroup-inline > .elementor-field-option').eq(Importants).click() // Select Importants
        else
        cy.log('Importants out of rang')
        
        // cy.get('.elementor-field-type-select').should('be.visible')
        // cy.log(cy.get('.elementor-field-type-select').children())
        
    
                cy.get('#form-field-section').trigger('mouseover').realClick() // Select the Section
                cy.wait(500)
                // cy.get('.elementor-field-textual.elementor-size-sm').select('Marketing')
                // cy.get('#form-field-section').find('Marketing').trigger('mouseover')
                cy.get('#form-field-section').trigger('mouseover').select(section)
                // cy.get('.elementor-field-type-select.elementor-field-group.elementor-column.elementor-field-group-section.elementor-col-100.elementor-field-required.elementor-mark-required > .elementor-field.elementor-select-wrapper.remove-before').find('option').should('have.length.greaterThan', 0);
                cy.get('#form-field-section').trigger('mouseover').realClick()

        
        cy.get('#form-field-message').should('be.visible').type(message) // Enter a explain

        cy.get('#featre-request-action > :nth-child(1) > .elementor-button-text').realClick() // Send button
    }

}

module.exports = new requestFeature()