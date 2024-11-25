import { expect } from '@playwright/test';

export class MainPage {
  constructor(page) {
    this.page = page;
    this.currentProjectHeader = page.locator('.current-project');
    this.overviewTab = page.locator('.overview');
    this.downloadTab = page.locator('.download');
    this.activityTab = page.locator('.activity');
    this.roadmapTab = page.locator('.roadmap');
    this.issuesTab = page.locator('.issues');
    this.newsTab = page.locator('.news');
    this.wikiTab = page.locator('[href="/projects/redmine/wiki"]');
    this.boardsTab = page.locator('.boards');
    this.repositoryTab = page.locator('.repository');
    this.redmineH = page.locator('h1:has-text("Redmine")').locator('nth=1');
    this.featuresH = page.locator('h2:has-text("Features")');
    this.documentationH = page.locator('h2:has-text("Documentation")');
    this.supportGettingHelpH = page.locator('h2:has-text("Support & getting help")');
    this.contributingAndHelpingOutH = page.locator('h2:has-text("Contributing and helping out")');
    this.whoUsesRedmineH = page.locator('h2:has-text("Who uses Redmine?")');
    this.redmineBooksH = page.locator('h2:has-text("Redmine books")');
  }

  async goto() {
    await this.page.goto('https://www.redmine.org');
  }

  async expectElementToBeVisible(elem) {
    await expect(elem).toBeVisible();
  }

  async expectElemToHaveClass(elem, cls) {
    await expect(elem).toHaveClass(cls);
  }
}