class homePage{

    // To visit the landingPage
    visit(){
        cy.visit('https://business.toptalla.com/en/') 
    }

    // To active the home tap
    homeTap(){
    cy.get('#menu-1-4af5e36 > .menu-item-home > .elementor-item').should('be.visible')
    cy.get('.elementor-item-active').invoke('html').then((html)=>{expect(html).be.equal('Home')})
    }

    // To check each elements
    checkElements(){
        cy.get('a > .attachment-medium_large').should('be.visible') //check logo
        cy.get('#widget2').should('be.visible') //check video
        cy.get('a > .attachment-medium_large').should('be.visible') //check Feature tap
        cy.get('#menu-1-4af5e36 > .menu-item-29146').should('be.visible') //check FAQ tap
        cy.get('.elementor-item.elementor-item-anchor.has-submenu').should('be.visible') //check Lang tap
        cy.get('.elementor-element-5ef1cc0a > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').should('be.visible') //check login button
        cy.get('.elementor-element-9a99af2 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').should('be.visible') //check join button
        cy.get('.elementor-element-2f27b3e > :nth-child(1) > .elementor-col-100 > :nth-child(1)').should('be.visible') //check Services Section
        cy.get('.elementor-element-9788682 > .elementor-background-overlay').should('be.visible') //check Solution Section
        cy.get('.elementor-element-7de03fc9 > .elementor-background-overlay').should('be.visible') //check Feature Section
        cy.get('.elementor-background-overlay').should('be.visible') //check Articles Section
        cy.get('.elementor-element-df6c359').should('be.visible') //check CTA join
        cy.get('.elementor-element-1d33ec0 > .elementor-background-overlay').should('be.visible') //check Intg Software
        cy.get('.elementor-template > .elementor > .elementor-section > .elementor-background-overlay').should('be.visible') //check CTA2 join
        cy.get('.elementor-element-76791334').should('be.visible') //check Footer section

    }


        hoverElements(){

        cy.get('a > .attachment-medium_large').trigger('mouseover') //check logo
        cy.wait(1000)
        // cy.get('#widget2').first().trigger('mouseover') //check video
        cy.get('a > .attachment-medium_large').first().trigger('mouseover') //check Feature tap
        cy.wait(1000)
        cy.get('#menu-1-4af5e36 > .menu-item-29146').first().trigger('mouseover') //check FAQ tap
        cy.wait(1000)
        cy.get('.elementor-item.elementor-item-anchor.has-submenu').first().trigger('mouseover') //check Lang tap
        cy.wait(1000)
        cy.get('.elementor-item.elementor-item-anchor.has-submenu').first().click() //check Lang tap
        cy.wait(1000)
        cy.get('.elementor-item.elementor-item-anchor.has-submenu').first().click() //check Lang tap
        cy.wait(1000)
        cy.get('.elementor-element-5ef1cc0a > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').first().trigger('mouseover') //check login button
        cy.wait(1000)
        cy.get('.elementor-element-9a99af2 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').first().trigger('mouseover') //check join button
        cy.wait(1000)
        cy.get('.elementor-element-2f27b3e > :nth-child(1) > .elementor-col-100 > :nth-child(1)').first().trigger('mouseover') //check Services Section
        cy.wait(1000)
        // cy.get('.elementor-element-9788682 > .elementor-background-overlay').first().trigger('mouseover') //check Solution Section
        // cy.get('.elementor-element-7de03fc9 > .elementor-background-overlay').first().trigger('mouseover') //check Feature Section
        // cy.get('.elementor-background-overlay').trigger('mouseover') //check Articles Section
        cy.get('.elementor-element-df6c359').first().trigger('mouseover') //check CTA join
        cy.wait(1000)
        // cy.get('.elementor-element-1d33ec0 > .elementor-background-overlay').first().trigger('mouseover') //check Intg Software
        // cy.get('.elementor-template > .elementor > .elementor-section > .elementor-background-overlay').first().trigger('mouseover') //check CTA2 join
        cy.get('.elementor-element-76791334').first().trigger('mouseover') //check Footer section

    }


    // To check each taps
    checkTaps(){
        cy.get('.elementor-nav-menu').children().should('be.visible');
    }

    // To check the title
    checkTitle(){
    cy.title().should('eq','Toptalla: Leading Salon Management Software in Saudi Arabia');
    }

        // To check the landingPage URL
    checkURL(){
        cy.url().should('contain','https://business.toptalla.com/en/');
    }




}

module.exports = new homePage()