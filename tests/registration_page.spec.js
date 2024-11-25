import { test } from '@playwright/test';
import { RegistrationPage } from '../pages/registrationPage';
import { MakeData } from "../helpers/makeData";

test.describe('Registration page tests', () => {
  const password = MakeData.getPasswordByLength(10);
  const shortPass = MakeData.getPasswordByLength(9);

  test.beforeEach(async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.checkRegistrationHeader();
  });

  test('Verify User registration functionality with valid data', async ({ page }) => {
    const userNickname = MakeData.getUserNickname();
    const email = MakeData.getEmail();
    const registrationPage = new RegistrationPage(page);

    await registrationPage.typeIntoInputByLocator(registrationPage.user, userNickname);
    await registrationPage.typeIntoInputByLocator(registrationPage.password, password);
    await registrationPage.typeIntoInputByLocator(registrationPage.confPassword, password);
    await registrationPage.typeIntoInputByLocator(registrationPage.name, 'Name');
    await registrationPage.typeIntoInputByLocator(registrationPage.surname, 'Surname');
    await registrationPage.typeIntoInputByLocator(registrationPage.email, email);
    await registrationPage.clickSubmitBtn();
    await registrationPage.successfulRegistrationMsg();
  });

  test('Verify User registration functionality with 7 characters length password', async ({ page }) => {
    const userNickname = MakeData.getUserNickname();
    const email = MakeData.getEmail();
    const registrationPage = new RegistrationPage(page);

    await registrationPage.typeIntoInputByLocator(registrationPage.user, userNickname);
    await registrationPage.typeIntoInputByLocator(registrationPage.password, shortPass);
    await registrationPage.typeIntoInputByLocator(registrationPage.confPassword, shortPass);
    await registrationPage.typeIntoInputByLocator(registrationPage.name, 'Name');
    await registrationPage.typeIntoInputByLocator(registrationPage.surname, 'Surname');
    await registrationPage.typeIntoInputByLocator(registrationPage.email, email);
    await registrationPage.clickSubmitBtn();
    await registrationPage.expectErrorMsgContainsText('Password is too short (minimum is 8 characters)');
  });

  test('Verify User registration functionality with confirmed password that not equal to password', async ({ page }) => {
    const userNickname = MakeData.getUserNickname();
    const email = MakeData.getEmail();
    const registrationPage = new RegistrationPage(page);

    await registrationPage.typeIntoInputByLocator(registrationPage.user, userNickname);
    await registrationPage.typeIntoInputByLocator(registrationPage.password, password);
    await registrationPage.typeIntoInputByLocator(registrationPage.confPassword, shortPass);
    await registrationPage.typeIntoInputByLocator(registrationPage.name, 'Name');
    await registrationPage.typeIntoInputByLocator(registrationPage.surname, 'Surname');
    await registrationPage.typeIntoInputByLocator(registrationPage.email, email);
    await registrationPage.clickSubmitBtn();
    await registrationPage.expectErrorMsgContainsText("Password doesn't match confirmation");
  });
});