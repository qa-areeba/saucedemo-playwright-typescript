import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],

  use: {
    baseURL: process.env.BASE_URL,

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'WebKit',
      use: {
        ...devices['Desktop Safari']
      }
    }
  ]
});