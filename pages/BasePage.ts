import { expect, Locator, Page } from '@playwright/test';

export class BasePage {

    constructor(protected page: Page) { }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async type(locator: Locator, text: string) {
        await locator.pressSequentially(text);
    }

    async getText(locator: Locator) {
        return await locator.textContent();
    }

    async isVisible(locator: Locator) {
        return await locator.isVisible();
    }

    async waitForElement(locator: Locator) {
        await locator.waitFor({
            state: 'visible'
        });
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    async verifyTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    async verifyURL(url: RegExp) {
        await expect(this.page).toHaveURL(url);
    }
}