import { Locator, Page } from '@playwright/test';
import { getSearchPhraseUrl } from '../utils/get-search-phrase-url';

export class HelpDeskPage {
  private readonly searchButton: Locator;
  private readonly searchInput: Locator;
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page
      .getByRole('cell', { name: 'Search the frequently asked' })
      .getByRole('textbox');

    this.searchButton = page.getByRole('button', {
      name: 'Search the frequently asked',
    });
  }

  fillSearchInput(phrase: string) {
    return this.searchInput.fill(phrase);
  }

  async getSearchPhraseResults(phrase: string) {
    await this.fillSearchInput(phrase);

    await this.searchButton.click();

    return this.page.waitForURL(getSearchPhraseUrl(phrase));
  }
}
