describe('Form submits correctly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  const firstName = () => cy.get('input[name=firstName]');
  const lastName = () => cy.get('input[name=lastName]');
  const email = () => cy.get('input[name=email]');
  const password = () => cy.get('input[name=password]');
  const tos = () => cy.get('input[name=tos]');
  const submitBtn = () => cy.get(`button[id='submitBtn']`);

  it('Test Works', () => {
    expect(1+2).to.equal(3);
    expect(10+10).not.to.equal(21);
    expect({}).not.to.equal({});
    // Objects are compared by reference!!!.
    expect({}).to.eql({});
    // Deep comparison

  })

  it('the elements are showing', () => {
    firstName().should('exist');
    lastName().should('exist');
    email().should('exist');
    password().should('exist');
    tos().should('exist');
    submitBtn().should('exist');
    cy.contains('Submit').should('exist');
  })

  describe('inputs can be filled out/submit button', () => {
    it('all inputs work', () => {
      submitBtn().should('be.disabled')
      firstName()
        .should('have.value', '')
        .type('Justin')
        .should('have.value', 'Justin');
      lastName()
        .should('have.value', '')
        .type('Abellera')
        .should('have.value', 'Abellera');
      email()
        .should('have.value', '')
        .type('email@email.com')
        .should('have.value', 'email@email.com');
      password()
        .should('have.value', '')
        .type('shh...secret')
        .should('have.value', 'shh...secret');
      tos().should('not.be.checked').check().should('be.checked');
      submitBtn().should('not.be.disabled');
    })

    it('Submit shows inputted values to page', () => {
      firstName().type('Justin');
      lastName().type('Abellera');
      email().type('email@email.com');
      password().type('shh...secret');
      tos().check();
      submitBtn().click();
      cy.contains('Justin').should('exist');
      cy.contains('Abellera').should('exist');
      cy.contains('email@email.com').should('exist');
      cy.contains('shh...secret').should('exist');
    })

  })





})