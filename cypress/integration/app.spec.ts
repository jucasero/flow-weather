/// <reference types="cypress" />

describe('App', () => {
  it('frontpage can be opened', () => {
    cy.visit('http://localhost:3000/flow-weather');
    cy.contains('Bienvenido a Flow Weather');
  });

  it('the page not found error is shown', () => {
    cy.visit('http://localhost:3000/flow-weather/error');
    cy.contains('¡Error 404!');
    cy.contains('Volver al inicio').click();
    cy.contains('Bienvenido a Flow Weather');
  });

  it('user can view homepage with geolocalization', () => {
    cy.visit('http://localhost:3000/flow-weather', {
      onBeforeLoad(window) {
        const latitude = -34.60915;
        const longitude = -58.385323;
        cy.stub(window.navigator.geolocation, 'getCurrentPosition').callsFake((callback) => {
          return callback({ coords: { latitude, longitude } });
        });
      }
    });
    cy.contains('Ingresar').click();
    cy.contains('Ubicación actual');
  });

  it('user can see the home page with the current weather and the next days', () => {
    cy.visit('http://localhost:3000/flow-weather', {
      onBeforeLoad(window) {
        const latitude = -34.60915;
        const longitude = -58.385323;
        cy.stub(window.navigator.geolocation, 'getCurrentPosition').callsFake((callback) => {
          return callback({ coords: { latitude, longitude } });
        });
      }
    });
    cy.contains('Ingresar').click();
    cy.get('.card').should('have.length', 6);
  });

  it('user can change city to see weather', () => {
    cy.visit('http://localhost:3000/flow-weather', {
      onBeforeLoad(window) {
        const latitude = -34.60915;
        const longitude = -58.385323;
        cy.stub(window.navigator.geolocation, 'getCurrentPosition').callsFake((callback) => {
          return callback({ coords: { latitude, longitude } });
        });
      }
    });
    cy.contains('Ingresar').click();
    cy.get('select').select('Ubicación actual').should('have.value', '{"lat":-34.60915,"lon":-58.385323}');
    cy.get('select').select('Bogotá').should('have.value', '{"lat":4.601874,"lon":-74.071648}');
  });
});
