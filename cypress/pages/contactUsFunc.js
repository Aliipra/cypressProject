import 'cypress-real-events/support';

class contactUsFunc{


    enterContactUS(){
        cy.wait(1000)
        cy.contains('a', 'Contect Us').should('be.visible').trigger('mouseover').click()
        cy.wait(1000)
    }

    checkTitle(){
        cy.get('.elementor-element-136f28bc > .elementor-widget-container > .elementor-heading-title').should('be.visible').should('have.text','Contact Us')

    }

    checkForm(firstName,phoneNumber,email,note,){

        cy.get('#form-field-field_6b514f4').type(firstName)

        cy.get('#form-field-email').type(phoneNumber)

        cy.get('#form-field-message').type(email)

        cy.get('#form-field-field_cacf1ef').type(note)

        cy.get('.elementor-field-type-submit > .elementor-button').realClick()

    }

    CheckValidForm(){
                cy.get('.elementor-message').should('be.visible').should('have.text','Your submission was successful.')
    }

    CheckInvalidForm(){
                cy.get('div.elementor-message').should('be.visible').should('have.text','Your submission failed because of an error.')
    }



}

module.exports = new contactUsFunc()