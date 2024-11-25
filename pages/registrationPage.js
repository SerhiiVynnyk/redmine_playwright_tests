import { expect } from "@playwright/test";
import { text } from "stream/consumers";

export class RegistrationPage {
  constructor(page) {
    this.page = page
    this.header = page.locator('h2')
    this.user = page.locator('#user_login');
    this.password = page.locator('#user_password');
    this.confPassword = page.locator('#user_password_confirmation');
    this.name = page.locator('#user_firstname');
    this.surname = page.locator('#user_lastname');
    this.email = page.locator('#user_mail');
    this.submitBtn = page.locator('[type="submit"]');
    this.successfulRegistration = page.locator('#flash_notice');
    this.errorExplanation = page.locator('#errorExplanation');
  }

  async goto() {
    await this.page.goto('https://www.redmine.org/account/register')
  }

  async checkRegistrationHeader() {
    await expect(this.header).toHaveText('Register');
  }

  async typeIntoInputByLocator(locator, text) {
    await locator.fill(text);
  }

  async clickSubmitBtn() {
    await this.submitBtn.click();
  }

  async successfulRegistrationMsg() {
    await expect(this.successfulRegistration).toContainText('Account was successfully created');
  }
  
  async expectErrorMsgContainsText(text) {
    await expect(this.errorExplanation).toContainText(text);
  }
}