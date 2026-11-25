import dotenv from 'dotenv';

dotenv.config();

export const env = {

    // Falls back to SauceDemo so the tests also run in CI without a secret.
    BASE_URL: process.env.BASE_URL || 'https://www.saucedemo.com/'

};
