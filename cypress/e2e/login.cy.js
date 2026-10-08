describe('Login', () => {

  it('debería mostrar un error cuando las credenciales son incorrectas', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username').type('usuarioIncorrecto')
    cy.get('#password').type('passwordIncorrecta')

    cy.get('button[type="submit"]').click()

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid')
  })

})