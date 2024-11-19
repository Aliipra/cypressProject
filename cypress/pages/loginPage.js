class loginPage{


    visit(){

        cy.visit('https://partners.stg.toptalla.com/auth/sign-in')

    }


    checkElements(){
        
        cy.get('[alt="Logo"]').should('be.visible') // Check Logo

        cy.get('._authLayoutCard_gqvpo_8').should('be.visible') // Check Form

        cy.get(':nth-child(1) > .ion-text-start > .ion-valid').should('be.visible') // Check Email Box

        cy.get(':nth-child(2) > .ion-text-start > .ion-valid').should('be.visible') // Check Pass Box

        cy.get('a').should('be.visible') // Check forgait Password

        cy.get('.ion-color-primary').should('be.visible') // Check Submit Butt

        cy.get(':nth-child(6) > p').should('be.visible') // Check CTA Reg

        cy.get('.button-outline').should('be.visible') // Check Reg Butt

    }

    loginFunc(){
        cy.get('.elementor-element-5ef1cc0a > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click()
    }


    enterUserName(userName){
    cy.get('input[name="identifier"]').type(userName);
    }


    enterPassword(password){
    cy.get('input[name="password"]').type(password);
    }

    submit(){
        cy.get('.ion-color-primary').click();
    }

    checkURL(){
cy.url().should('contain', 'https://partners.stg.toptalla.com/');
    }



}

module.exports = new loginPage()