import * as main_page from "../locators/main_page.json";
import * as result_page from "../locators/result_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as default_data from "../helpers/default_data.json";

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
         cy.visit('/');         
           });

    afterEach('Конец теста', function () {
         cy.get(result_page.close).should('be.visible');
        });

    it('верный пароль и логин', function () {
         cy.get(main_page.email).type(default_data.login);
         cy.get(main_page.password).type(default_data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Авторизация прошла успешно');
         cy.get(result_page.title).should('be.visible');
             })

      it('Восстановление пароля', function () {
         cy.get(main_page.fogot_pass_btn).click();
         cy.get(recovery_password_page.title).contains('Восстановите пароль');
         cy.get(recovery_password_page.title).should('be.visible');
         cy.get(recovery_password_page.close).should('be.visible');
         cy.get(recovery_password_page.email).type('dkurilenko87@gmail.com');
         cy.get(recovery_password_page.send_button).click();
         cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
         cy.get(result_page.title).should('be.visible');
              })

     it('неверный пароль и логин', function () {
         cy.get(main_page.email).type('dkurilenko87@gmail.com');
         cy.get(main_page.password).type(default_data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Такого логина или пароля нет');
         cy.get(result_page.title).should('be.visible');
              })

     it('верный пароль и неверный логин', function () {
         cy.get(main_page.email).type(default_data.login);
         cy.get(main_page.password).type('iLoveqastudio2');
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Такого логина или пароля нет');
         cy.get(result_page.title).should('be.visible');
              })

     it('ошибка валидации', function () {
         cy.get(main_page.email).type('germandolnikov.ru');
         cy.get(main_page.password).type(default_data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Нужно исправить проблему валидации');
         cy.get(result_page.title).should('be.visible');
              })

     it('проверка на приведение к строчным', function () {
         cy.get(main_page.email).type('GerMan@Dolnikov.ru');
         cy.get(main_page.password).type(default_data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Авторизация прошла успешно');
         cy.get(result_page.title).should('be.visible');
              })
 }) 