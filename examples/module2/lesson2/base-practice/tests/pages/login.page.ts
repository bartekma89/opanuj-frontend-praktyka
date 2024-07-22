import { Locator, Page } from '@playwright/test';
import { URLs } from '../../utils/constants';

export class LoginPage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginForm: Locator;
  private readonly loginButton: Locator;
  private readonly url = URLs.LOGIN_PAGE;
  private readonly page: Page;
  private readonly rememberMeCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginForm = this.page.locator('#userloginForm');
    this.usernameInput = this.loginForm.getByLabel(/Username/);
    this.passwordInput = this.loginForm.getByLabel(/Password/);
    this.loginButton = this.loginForm.getByRole('button', { name: 'Log in' });
    this.rememberMeCheckbox = this.loginForm.locator('#wpRemember');
  }

  navigate() {
    return this.page.goto(this.url);
  }

  async fillLoginForm(username: string, password: string, rememberMe = false) {
    await this.fillUsername(username);
    await this.fillPassword(password);

    if (rememberMe) {
      await this.checkRememberMe();
    }

    return this.loginButton.click();
  }

  checkRememberMe() {
    return this.rememberMeCheckbox.check();
  }

  fillUsername(username: string) {
    return this.usernameInput.fill(username);
  }

  fillPassword(password: string) {
    return this.passwordInput.fill(password);
  }
}
