import { Locator, Page } from '@playwright/test';

export class CommunityPortalPage {
  private readonly helpDeskItem: Locator;

  constructor(page: Page) {
    this.helpDeskItem = page
      .locator('.comportal-blocks')
      .first()
      .getByRole('link', { name: 'Help desk', exact: true });
  }

  goToHelpDesk() {
    return this.helpDeskItem.click();
  }
}
