class LoginPage {
  // Locators for elements on the login page
  elements = {
    logo: () => cy.get('a > .attachment-medium_large'),    // Locator for the username input field
    passwordInput: () => cy.findByLabelText(/كلمة المرور \*/i),    // Locator for the password input field
    loginButton: () => cy.findByRole('link', {  name: /login/i}),  // Locator for the login button
    errorMessage: () => cy.get('.error-message'), // Locator for an error message (if login fails)
    loginpagelogo: ()=> cy.findByRole('img', {  name: /logo/i}),
    usernameinput: ()=> cy.findByRole('textbox', {  name: /رقم الجوال \/ البريد الإلكتروني/i}),
    enterbutton :()=> cy.findByText(/تسجيل الدخول/i)
    
    
  }
  
  // Method to enter username
  
  clickLogin(){
    this.elements.loginButton().invoke('removeAttr', 'target') .click() //////////////
  }
  
  checkurl(){
    cy.visit("https://business.toptalla.com/en/");
    cy.wait(6000)
    cy.url().should('eq', 'https://business.toptalla.com/en/')
    .then(() => {
                // we are trying to return something
                // from the .within callback,
                // but it won't have any effect
              cy.log('check url valid ')
              })


              
            }
            

  checktitle(){

    cy.title().should('eq', 'Toptalla: Leading Salon Management Software in Saudi Arabia');
    this.elements.logo().should('be.visible')



  }

  checkloginappear(){
    this.elements.loginButton().should('be.visible')

  }

  checkloginpageappear(){
    cy.wait(5000)
    cy.url().should('eq', 'https://partners.toptalla.com/auth/sign-in')
    .then(() => {
                // we are trying to return something
                // from the .within callback,
                // but it won't have any effect
              cy.log('check url valid ')
              })

    this.elements.loginpagelogo().should('be.visible')

  }

  enterusername(){
    this.elements.usernameinput().should('be.visible')
    this.elements.usernameinput().click()
    this.elements.usernameinput().type('andrewamin878@gmail.com')

  }
  enterpassword(){
    this.elements.passwordInput().should('be.visible')
    this.elements.passwordInput().click()
    this.elements.passwordInput().type('5W9zA3sJsbAdDwV')

  }
  enterdashboard(){
    this.elements.enterbutton().should('be.visible')
    this.elements.enterbutton().click()
    cy.get('.item-has-start-slot').click()
    cy.get('._logOutItem_zsgaf_36').click()
    cy.url().should('eq', 'https://partners.toptalla.com/auth/sign-in')
    .then(() => {
                // we are trying to return something
                // from the .within callback,
                // but it won't have any effect
              cy.log('check url valid ')
              })
  }
}

module.exports = new LoginPage();