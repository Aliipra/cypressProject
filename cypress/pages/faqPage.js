import 'cypress-real-events/support';

class faqPage{

    enterFAQ(){ // Click on the FAQ Tab
        cy.wait(1000)
        cy.get('.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-29146').realClick()
        
    }

checkURL(){
    cy.url().should('eq','https://business.toptalla.com/en/en-faq/')
}

checkFAQTitle(){
    cy.contains('h3.section-title', 'How can we help?').should('exist')
}

checkFAQ(){
    cy.get('#cea-accordion-2 > :nth-child(1) > .card-header > .nav-item').should('be.visible').should('have.class','active') // Check the firs FAQ

    cy.get('#cea-accordion-2 > :nth-child(2) > .card-header > .nav-item').should('be.visible').click().should('have.class', 'active') // Check the Secund FAQ 

    cy.get('#cea-accordion-2 > :nth-child(1) > .card-header > .nav-item').should('be.visible').should('have.class','active') // dbCheck the first FAQ stall Active

}

checkFAQBar(){
    cy.get('[href="#cea-tab-1-1"]').should('be.visible').should('have.class','active') // Check the firs FAQ

    cy.get('[href="#cea-tab-1-4"]').should('be.visible').click().should('have.class','active') // Check the Secund FAQ 

}

checkSignForm(){
    cy.get('.elementor-template > .elementor > .elementor-section > .elementor-background-overlay').should('be.visible')

    cy.get('.elementor-element-cc65c49 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').should('have.attr', 'href', '#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI5NzIwIiwidG9nZ2xlIjpmYWxzZX0%3D');
}




}

module.exports = new faqPage()