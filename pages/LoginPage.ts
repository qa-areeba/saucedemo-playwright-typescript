import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPageLocators } from '../locators/LoginPageLocators';
import { AppConstants } from '../constants/AppConstants';
import { env } from '../utils/env';
import { Logger } from '../utils/Logger';

export class LoginPage extends BasePage {

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.usernameInput = page.locator(LoginPageLocators.usernameInput);
        this.passwordInput = page.locator(LoginPageLocators.passwordInput);
        this.loginButton = page.locator(LoginPageLocators.loginButton);
        this.errorMessage = page.locator(LoginPageLocators.errorMessage);
    }

    async navigate() {
        Logger.info('Navigating to SauceDemo Login Page');
        await this.page.goto(env.BASE_URL);
    }

    async enterUsername(username: string) {
        await this.fill(this.usernameInput, username);
    }

    async enterPassword(password: string) {
        await this.fill(this.passwordInput, password);
    }

    async clickLogin() {
        await this.click(this.loginButton);
    }

    async login(username: string, password: string) {

        Logger.info(`Logging in with user: ${username}`);

        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async verifyInventoryPageLoaded() {

        await this.verifyURL(
            new RegExp(AppConstants.INVENTORY_URL)
        );

        Logger.success('Successfully logged in.');
    }

    async verifyLockedUserError() {

        await expect(this.errorMessage).toContainText(
            'Epic sadface: Sorry, this user has been locked out.'
        );

        Logger.warning('Locked user validation successful.');
    }

    async verifyLoginPageTitle() {
        await this.verifyTitle(
            AppConstants.LOGIN_PAGE_TITLE
        );
    }

}