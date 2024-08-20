import { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class MainPage {
  private readonly page: Page;
  private readonly url = URLs.MAIN_PAGE;
  readonly navigation: Locator;
  private readonly featuredArticleExcerpt: Locator;
  private readonly searchInput: Locator;
  private readonly mainMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigation = page.getByRole('navigation', {
      name: 'Personal tools',
    });

    this.featuredArticleExcerpt = page.locator('#mp-tfa');

    this.searchInput = page
      .getByRole('search')
      .getByRole('searchbox', { name: /Search Wikipedia/i });

    this.mainMenu = page.locator('#vector-main-menu-pinned-container');
  }

  navigate() {
    return this.page.goto(this.url);
  }

  goToLoginPage() {
    return this.navigation.getByRole('link', { name: 'Log in' }).click();
  }

  async goToCommunityPage() {
    const linkToCommunityPage = this.mainMenu.getByRole('link', {
      name: 'Community portal',
    });

    const linkHref = (await linkToCommunityPage.getAttribute('href'))!;
    await linkToCommunityPage.click();
    console.log(linkHref);
    return this.page.waitForURL(`**${linkHref}`);
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

  async searchFor(term: string) {
    return this.searchInput.fill(term);
  }

  getSearchResults() {
    return this.page.getByRole('listbox', { name: /Search results/i });
  }

  getFirstSearchResult() {
    return this.getSearchResults().getByRole('option').first();
  }

  getNavigation() {
    return this.navigation;
  }
}
