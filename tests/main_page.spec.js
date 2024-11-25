import { test } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test.describe('Main page tests', () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
  });
  test('Main menu tabs displayed on the page', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.expectElementToBeVisible(mainPage.currentProjectHeader);
    await mainPage.expectElementToBeVisible(mainPage.overviewTab);
    await mainPage.expectElementToBeVisible(mainPage.downloadTab);
    await mainPage.expectElementToBeVisible(mainPage.activityTab);
    await mainPage.expectElementToBeVisible(mainPage.roadmapTab);
    await mainPage.expectElementToBeVisible(mainPage.issuesTab);
    await mainPage.expectElementToBeVisible(mainPage.newsTab);
    await mainPage.expectElementToBeVisible(mainPage.wikiTab);
    await mainPage.expectElementToBeVisible(mainPage.boardsTab);
    await mainPage.expectElementToBeVisible(mainPage.repositoryTab);
  });

  test('Wiki tab is selected by default at the main page and contains headers', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.expectElemToHaveClass(mainPage.wikiTab, /selected/)
    await mainPage.expectElementToBeVisible(mainPage.redmineH);
    await mainPage.expectElementToBeVisible(mainPage.featuresH);
    await mainPage.expectElementToBeVisible(mainPage.documentationH);
    await mainPage.expectElementToBeVisible(mainPage.supportGettingHelpH);
    await mainPage.expectElementToBeVisible(mainPage.contributingAndHelpingOutH);
    await mainPage.expectElementToBeVisible(mainPage.whoUsesRedmineH);
    await mainPage.expectElementToBeVisible(mainPage.redmineBooksH);
  });
});