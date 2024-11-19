class joinPage{

    visit(){
        cy.visit('https://business.toptalla.com/en/');
    }
    enterJoin(){
        cy.get('.elementor-element-9a99af2 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click();
    }

    enterName(name){
        cy.get('input[name="form_fields[salonName]"]').type(name);
    }
    
    choiceCategory(){
        cy.get('.elementor-field-group-field_abf5359 > .elementor-field-type-radio > .elementor-field-subgroup > :nth-child(2) > label').click();
    }

    enterNext(){
        cy.get('.elementor-field-group-field_abf5359 > .e-form__buttons > .elementor-field-group > .elementor-button').click();
    }

        enterFirstName(name){
        cy.get('#form-field-first_name').type('name');
    }

        enterLastName(name){
        cy.get('#form-field-last_name').type('lastName');
    }


        enterEmail(email){
        cy.get('#form-field-email').type(email);
    }

        enterPhoneNumber(code,phoneNumber){
        cy.get('#form-field-mobile_number').type(code+phoneNumber);

    }

    enterNext2(){
        cy.get('.elementor-field-group-field_bf3dff5 > .e-form__buttons > .elementor-field-type-next > .elementor-button').click();
    }


    submit(){
        cy.get('.elementor-field-type-submit > .elementor-button > :nth-child(1)').click();
    }

    enterPassword(password){
cy.get('#password').type(password)
cy.get('#passwordConfirmation').type(password)
cy.get('._button_17muw_1').click()

    }


    checkURL(){
          cy.url().should('contain', 'https://partners.toptalla.com/');
            cy.get('._welcomePage_1rzk0_1 > :nth-child(1) > .undefined').should('be.visible')
    }

    checkSuccJoin(){
          cy.url().should('contain', 'https://partners.toptalla.com/');
    }

}

module.exports = new joinPage()