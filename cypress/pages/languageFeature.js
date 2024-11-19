import 'cypress-real-events/support';


class languageFeature{

    enterEngLang(){

        cy.get('.pll-parent-menu-item.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-parent.menu-item-has-children.menu-item-29858').first().trigger('mouseover')
        cy.wait(1000)
        cy.get('.pll-parent-menu-item.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-parent.menu-item-has-children.menu-item-29858').first().click()
        cy.wait(1000)

    }

    enterArbLang(){

        cy.get('.pll-parent-menu-item.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-has-children.menu-item-30196').first().trigger('mouseover')
        cy.wait(1000)
        cy.get('.pll-parent-menu-item.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-has-children.menu-item-30196').first().click()
        cy.wait(1000)

    }

    arabicChange(){

        cy.get('.lang-item-43 > .elementor-sub-item').realHover();
        cy.wait(1000)

        cy.get('.lang-item-56 > .elementor-sub-item').realHover();
        cy.wait(1000)
        cy.get('.lang-item-56 > .elementor-sub-item').realClick();
        cy.wait(1000)

    }

    englishChange(){

        cy.get('.lang-item-56 > .elementor-sub-item').realHover();
        cy.wait(1000)

        cy.get('.lang-item-43 > .elementor-sub-item').realHover();
        cy.wait(1000)

        cy.get('.lang-item-43 > .elementor-sub-item').realClick();
        cy.wait(1000)

    }

    checkArabicChange(){
        cy.url().should('eq','https://business.toptalla.com/')
    }

    checkEnglishChange(){
        cy.url().should('eq','https://business.toptalla.com/en/')
    }


}

module.exports = new languageFeature()