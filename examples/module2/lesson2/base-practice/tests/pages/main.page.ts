import { Locator, Page } from '@playwright/test';
import { URLs } from '../../utils/constants';

export class MainPage {
  private readonly page: Page;
  private readonly navigator: Locator;
  private readonly url = URLs.MAIN_PAGE;
  private readonly featuredArticleExcerpt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigator = page.getByRole('navigation', {
      name: 'Personal tools',
    });
    this.featuredArticleExcerpt = page.locator('#mp-tfa');
  }

  navigate() {
    return this.page.goto(this.url);
  }

  goToLoginPage() {
    return this.navigator.getByRole('link', { name: 'Log in' }).click();
  }

  getNavigator() {
    return this.navigator;
  }

  async goToFeaturedArticle() {
    const linkToFeaturedArticle = this.featuredArticleExcerpt
      .getByRole('paragraph')
      .getByRole('link')
      .first();

    const articleHref = (await linkToFeaturedArticle.getAttribute('href'))!;

    await linkToFeaturedArticle.click();

    return this.page.waitForURL(`**${articleHref}`);
  }
}
