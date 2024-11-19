class categoryPage{





    enterCategory(){

        cy.get('.elementor-item.has-submenu').first().trigger('mouseover')
        cy.wait(1000)
        cy.get('.elementor-item.has-submenu').first().dblclick()

    }



    checkURL(){
        cy.url().should('eq','https://business.toptalla.com/en/categories/')
    }

    checkElements(){
        cy.get('.elementor-column.elementor-col-100.elementor-top-column.elementor-element.elementor-element-3fbf9f3').should('be.visible') //barbershop
        
        cy.get('.elementor-element-590269a > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-img > a > .attachment-full').should('be.visible') //Nails
        
         cy.get('.elementor-element-ce2043d > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-img > a > .attachment-full').should('be.visible') //Massage
        
        cy.get('.elementor-element-2d5db3f > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-img > a > .attachment-full').should('be.visible') //Hair
        
        cy.get('.elementor-element-2c44cff > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-img > a > .attachment-full').should('be.visible') //Brows & lashes
        
         cy.get('.elementor-element-cb7f95d > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-img > a > .attachment-full').should('be.visible') //Braids & Llocs
        
        cy.get('.elementor-background-overlay').should('be.visible') //Reg Form
        
         cy.get('.elementor-element-76791334').should('be.visible') //Footer
        
    }


    checkTitle(){
        cy.get('.elementor-element-aa6e847 > .elementor-widget-container > .elementor-heading-title').invoke('html')
.then((html) => {
    expect(html).to.eq('Business Categories');
});
    }


}
module.exports = new categoryPage