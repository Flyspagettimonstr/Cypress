import * as pokemon_data from "../helpers/pokemon_data.json";


describe('Покупка аватара', function () {

    it('сквозной позитивный', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('#k_email').type(pokemon_data.login);
         cy.get('#k_password').type(pokemon_data.password);
         cy.get('.MuiButton-root').click();
         cy.get('.header_card_trainer').click();
         cy.get('.k_mobile > :nth-child(5)').click();
         cy.get('.available > .shop__button').first().click(); 
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996');
         cy.get(':nth-child(1) > .style_1_base_input').type('1226');
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Dmitry');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.style_1_base_input').type('56456'); 
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно');
         cy.get('.payment_status_top_title').should('be.visible');  
     })    
 }) 