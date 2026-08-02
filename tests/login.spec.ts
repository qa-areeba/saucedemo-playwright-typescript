import { test } from '../base/baseTest';
import { loginData, multipleValidUsers } from '../test-data/loginData';
import users from '../test-data-json/loginUsers.json';

// Smoke Test
test('@smoke Successful Login to SauceDemo', async ({ loginPage }) => {

    await loginPage.navigate();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await loginPage.verifyInventoryPageLoaded();

});

// Regression Test
test('@regression Locked User Login', async ({ loginPage }) => {

    await loginPage.navigate();

    await loginPage.login(
        loginData.lockedUser.username,
        loginData.lockedUser.password
    );

    await loginPage.verifyLockedUserError();

});

// Smoke + Regression Tests (TypeScript Data)
multipleValidUsers.forEach((user) => {

    test(`@smoke @regression Login using ${user.username}`, async ({ loginPage }) => {

        await loginPage.navigate();

        await loginPage.login(
            user.username,
            user.password
        );

        await loginPage.verifyInventoryPageLoaded();

    });

});

// Regression Tests (JSON Data)
users.forEach((user) => {

    test(`@regression JSON Login - ${user.username}`, async ({ loginPage }) => {

        await loginPage.navigate();

        await loginPage.login(
            user.username,
            user.password
        );

        await loginPage.verifyInventoryPageLoaded();

    });

});