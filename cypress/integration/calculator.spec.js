describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should do the number buttons update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '24')

  });
//3+3
  it('should an arithmetical operation (+) update the display with the result of the operation', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '6')

  });
//3-3
  it('should an arithmetical operation (-) update the display with the result of the operation', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '0')

  });
//3*3
  it('should an arithmetical operation (multiply) update the display with the result of the operation', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '9')

  });
// 3/3
  it('should an arithmetical operation (divide) update the display with the result of the operation', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '1')

  });
  
  it('should multiple operations be chained together', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    //((3/3) x 3 ) + 3 - 1
    cy.get('.display').should('contain', '5')

  });

  it('Is the output as expected for a positive number', () => {
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')

  });
//1-3
it('Is the output as expected for a negative number', () => {
  cy.get('#number1').click();
  cy.get('#operator-subtract').click();
  cy.get('#number3').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '-2')

  });
// 1/2
it('Is the output as expected for a decimal number', () => {
  cy.get('#number1').click();
  cy.get('#operator-divide').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '0.5')
  
    });
//1111 * 1
it('Is the output as expected for a large number', () => {
  cy.get('#number1').click();
  cy.get('#number1').click();
  cy.get('#number1').click();
  cy.get('#number1').click();
  
  cy.get('#operator-multiply').click();
  cy.get('#number1').click();
  
  cy.get('#operator-equals').click();

  cy.get('.display').should('contain', '1111')
      
        });
//1/0
  it('devide by zero', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', "Error")



  });


})