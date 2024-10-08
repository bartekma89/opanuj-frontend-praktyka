import test, { expect } from '@playwright/test';
import { STORAGE_STATE } from '../../../../playwright.config';
import { MainPage } from './pages/main.page';
import { URLs } from '../utils/constants';
import { LoginPage } from './pages/login.page';

test('login into wiki account', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToLoginPage();

  const loginPage = new LoginPage(page);
  await loginPage.fillLoginForm(process.env.USERNAMEE!, process.env.PASSWORDD!);

  // await page.waitForURL(/.*Special:UserLogin.*/);

  await expect(page).toHaveURL(URLs.MAIN_PAGE);
  await expect(mainPage.getNavigator()).toContainText(process.env.USERNAMEE!, {
    ignoreCase: true,
  });

  await page.context().storageState({ path: STORAGE_STATE });
});
