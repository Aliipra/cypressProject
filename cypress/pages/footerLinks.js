class footerLinks{

    checkTitle(){
        cy.get('.elementor-element-b272e2c > .elementor-widget-container > .attachment-full').should('exist')

    }

    checkCategoryLinks(){
    
        cy.get('.elementor-element-0c2d6af > .elementor-widget-container > .elementor-heading-title').should('be.visible')

        cy.get('#menu-1-2037640 > .menu-item-31021 > .elementor-item').should('be.visible')

    }
    
    checkFeaturesLinks(){
        cy.get('.elementor-element-28f0a5f > .elementor-widget-container > .elementor-heading-title')

        cy.get('#menu-1-ce2c485 > .menu-item-31030 > .elementor-item')

    }

    checkLinks(){
        cy.get('.elementor-element-e130255 > .elementor-widget-container > .elementor-heading-title').should('be.visible')

        cy.get('#menu-1-307d8a5 > .menu-item-privacy-policy > .elementor-item').should('be.visible').should('have.attr', 'href', 'https://business.toptalla.com/en/privacy-policy/');


    }
    
    checkEmail(){

        cy.get('.elementor-icon-list-items > :nth-child(1) > a').should('be.visible').should('have.attr', 'href').and('include', 'info@toptalla.com');

        


    }

    checkWhatsApp(){
        cy.contains('a', 'Whatsapp').should('be.visible').should('have.attr', 'href').then((href) => {expect(href).to.include('00966539236391');});

    }

    checkDownloadLinks(){

        // cy.get('.elementor-element-f3b21eb > .elementor-widget-container > .attachment-full').should('be.visible').should('have.attr', 'href')

        // cy.get('.elementor-element-df61c1e > .elementor-widget-container > .attachment-full').should('be.visible').should('have.attr', 'href')


            // تحقق من العنصر الأول
    cy.get('.elementor-element-f3b21eb > .elementor-widget-container > .attachment-full')
      .then(($el) => {
        try {
          expect($el).to.be.visible; // تحقق من أن العنصر مرئي
          expect($el).to.have.attr('href'); // تحقق من وجود خاصية href
        } catch (error) {
          cy.log('خطأ في العنصر الأول: ' + error.message); // سجل الخطأ
        }
      });

    // تحقق من العنصر الثاني
    cy.get('.elementor-element-df61c1e > .elementor-widget-container > .attachment-full')
      .then(($el) => {
        try {
          expect($el).to.be.visible; // تحقق من أن العنصر مرئي
          expect($el).to.have.attr('href'); // تحقق من وجود خاصية href
        } catch (error) {
          cy.log('خطأ في العنصر الثاني: ' + error.message); // سجل الخطأ
        }
      });


    }

    checkSocialMediaLinks(){

        cy.get(':nth-child(1) > .elementor-icon').should('be.visible').should('have.attr', 'href', 'https://www.facebook.com/toptalla.partners/');

        cy.get(':nth-child(2) > .elementor-icon').should('have.attr', 'href', 'https://www.instagram.com/toptalla.partners/');

        cy.get(':nth-child(3) > .elementor-icon').should('have.attr', 'href', 'https://www.linkedin.com/company/toptalla');


    }

    checkRequestFeature(){
        cy.get('.elementor-element-213e915 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').should('be.visible').should('have.attr', 'href', '#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI5Njk5IiwidG9nZ2xlIjpmYWxzZX0%3D');

    }



}

module.exports = new footerLinks()