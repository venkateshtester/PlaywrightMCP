import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
// Load env from .env or ENVs per NODE_ENV
dotenv.config({ path: path.resolve(__dirname, '.env') });

const HEADLESS = process.env.HEADLESS === 'true';
const BASE_URL = process.env.BASE_URL || undefined;
const TRACE = process.env.TRACE || 'on-first-retry';
const VIDEO = process.env.VIDEO || 'retain-on-failure';
const SCREENSHOT = process.env.SCREENSHOT || 'only-on-failure';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  outputDir: 'traces',
  use: {
    baseURL: BASE_URL,
    trace: TRACE as 'on' | 'off' | 'retain-on-failure' | 'on-first-retry',
    headless: HEADLESS,
    video: VIDEO as 'on' | 'off' | 'retain-on-failure',
    screenshot: SCREENSHOT as 'on' | 'off' | 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] }
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] }
    // }
  ],
});
