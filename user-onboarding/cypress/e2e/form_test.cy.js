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






})