# Playwright TypeScript Test Automation Framework

![Playwright Tests](https://github.com/qa-areeba/Enterprise-QA-Automation-Platform/actions/workflows/playwright.yml/badge.svg)

A scalable UI test automation framework built with [Playwright](https://playwright.dev/) and TypeScript, using the Page Object Model, custom fixtures, data-driven tests, tagged test suites and multi-browser execution. The tests target the public practice site [SauceDemo](https://www.saucedemo.com), and the suite runs in GitHub Actions on every push and pull request.

## What is tested

Login flow on SauceDemo, run on Chromium, Firefox and WebKit:

| Area | Tests |
| --- | --- |
| Successful login with a valid user (`@smoke`) | 1 |
| Locked-out user sees the expected error (`@regression`) | 1 |
| Login with 3 users from TypeScript test data (`@smoke @regression`) | 3 |
| Login with 3 users from a JSON file (`@regression`) | 3 |
| Utility check (random e-mail generator) | 1 |
| **Total** | **9 tests (27 runs across 3 browsers)** |

## Framework features

- **Page Object Model:** `BasePage` with reusable actions, `LoginPage` for the login flow, locators kept separately in `locators/`
- **Custom Playwright fixtures:** page objects are injected into tests (`fixtures/baseFixture.ts`)
- **Data-driven testing:** test data from TypeScript (`test-data/`) and JSON (`test-data-json/`)
- **Tagged suites:** `@smoke` and `@regression` tags, run with `npm run test:smoke` and `npm run test:regression`
- **Multi-browser:** Chromium, Firefox and WebKit projects
- **Configuration:** `BASE_URL` read from environment variables (`.env`), with a default
- **Reporting:** HTML report and Allure results; screenshots, video and trace kept on failure
- **Logging:** a small `Logger` utility for readable test output
- **CI:** GitHub Actions workflow that uploads the report as an artifact

## Project structure

```text
.
├── .github/workflows/playwright.yml   # CI workflow
├── base/                              # Test hooks (beforeAll, beforeEach, ...)
├── config/                            # Environment configuration
├── constants/                         # Shared constants
├── fixtures/                          # Custom fixtures (page objects)
├── locators/                          # Locators for each page
├── pages/                             # Page Object classes
├── test-data/                         # TypeScript test data
├── test-data-json/                    # JSON test data
├── tests/                             # Test specs
├── utils/                             # Helpers (env, logger, random data)
└── playwright.config.ts
```

## Getting started

Prerequisites: Node.js 20 or later and Git.

```bash
git clone https://github.com/qa-areeba/Enterprise-QA-Automation-Platform.git
cd Enterprise-QA-Automation-Platform
npm ci
npx playwright install
```

Optional: create a `.env` file to override the default URL.

```text
BASE_URL=https://www.saucedemo.com/
```

## Run the tests

```bash
npm test                  # all tests, all browsers
npm run test:smoke        # only @smoke tests
npm run test:regression   # only @regression tests
npm run test:chromium     # Chromium only
npm run report            # open the HTML report
```

## Continuous integration

The workflow `.github/workflows/playwright.yml` runs on every push and pull request to `main`. It installs dependencies and browsers, runs the full suite, and uploads the HTML report as the `playwright-report` artifact (Actions tab, select a run, then Artifacts).

## Author

Areeba Zakir, QA Automation Engineer
[LinkedIn](https://www.linkedin.com/in/areeba-zakir-38364328b) · [GitHub](https://github.com/qa-areeba)
