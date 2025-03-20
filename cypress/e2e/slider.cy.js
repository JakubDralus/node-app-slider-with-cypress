// describe('Swiper Gallery Test', function () {
//   it('Checks if second slide contains "United Kingdom"', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
//   });
// });
//
// describe('Swiper Gallery Test', function () {
//   it('Checks if third slide contains "Paris"', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.wait(1000);
//     cy.get('.swiper-button-next').click({ force: true });
//     cy.wait(1000);
//     cy.get('.swiper-slide-active').should('contain', 'Paris');
//   });
// });

// --- new ---
describe('Swiper Gallery Test', function () {
  
  it('Can change slides with arrow keys', function () {
    cy.visit('http://localhost:3000');
    cy.get('body').trigger('keydown', { key: 'ArrowRight', keyCode: 39 });
    cy.wait(500);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('body').trigger('keydown', { key: 'ArrowLeft', keyCode: 37 });
    cy.wait(500);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  })
  
  it('Checks slides content', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(500);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click();
    cy.wait(500);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
  });
  
  it('Checks if all gallery elements are visible', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-wrapper').should('be.visible');
    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.get('.swiper-button-next').should('be.visible').click();
  });
})

describe('Swiper Gallery Responsive Test', function () {
  
  const viewports = [
    { device: 'Desktop', width: 1280, height: 720 },
    { device: 'Tablet', width: 768, height: 1024 },
    { device: 'Mobile', width: 375, height: 812 }
  ];
  
  viewports.forEach(viewport => {
    it(`Should display and navigate correctly on ${viewport.device}`, function () {
      cy.viewport(viewport.width, viewport.height);
      cy.visit('http://localhost:3000');
      cy.get('.swiper').should('be.visible');
      
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.wait(500);
      cy.get('.swiper-slide-active').should('be.visible');
      
      cy.get('.swiper-button-prev').should('be.visible').click();
      cy.wait(500);
      cy.get('.swiper-slide-active').should('be.visible');
    });
  });
});
