class featurePage {


        enterFeature(){

        cy.get('.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-29147').first().trigger('mouseover')
        cy.wait(1000)
        cy.get('.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-29147').first().dblclick()

    }



    checkURL(){
        cy.url().should('eq','https://business.toptalla.com/en/features/')
    }


        checkElements(){
            
             cy.get('.elementor-col-100 > :nth-child(1) > .elementor-section').should('be.visible') // Main Post

            cy.get('.elementor-element-1883adc8').should('be.visible') // your buss

            cy.get('#section-1').should('be.visible') // business man

            cy.get('#section-2').should('be.visible') // calendar & app

             cy.get('#section-3').should('be.visible') // showcase & app

            cy.get('#section-4').should('be.visible') // stay connected to your clin

            cy.get('#section-5').should('be.visible') // value your time

            cy.get('#section-6').should('be.visible') // POS

            cy.get('#section-7').should('be.visible') // And much more

            cy.get('.elementor-template > .elementor > .elementor-section > .elementor-background-overlay').should('be.visible') // Reg Form

            cy.get('.elementor-element-76791334').should('be.visible') // Footer


        }


}

module.exports = new featurePage()