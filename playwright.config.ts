// import { defineConfig, devices } from '@playwright/test';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // require('dotenv').config();

// /**
//  * See https://playwright.dev/docs/test-configuration.
//  */
// export default defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('/')`. */
//     // baseURL: 'http://127.0.0.1:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//     // storageState: 'playwright/.auth/user.json',
//     // dependencies: ['setup'],
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     { name: 'setup', testMatch: /.*\.setup\.ts/ },

//     {
//       name: 'chromium',
//       use: {
//         ...devices['Desktop Chrome'],
//         // Use prepared auth state.
//         storageState: 'playwright/.auth/user.json',
//       },
//       dependencies: ['setup'],
//     },
//     // {
//     //   name: 'chromium',
//     //   use: { ...devices['Desktop Chrome']},
      
//     // },

//     // {
//     //   name: 'firefox',
//     //   use: { ...devices['Desktop Firefox'] },
//     // },

//     // {
//     //   name: 'webkit',
//     //   use: { ...devices['Desktop Safari'] },
//     // },

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://127.0.0.1:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });


import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath } from 'url';
/**
 * reportes types are: dot, html, json, junit, list, line
 */
export default defineConfig({
  reporter: 'html',
  workers: 10,
  fullyParallel: true,
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://qa-utsav-patel.rt.gw/wp-json/wp/v2/',
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      // 'Accept': 'application/vnd.github.v3+json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      'Authorization': `Basic cWEtdXRzYXYtcGF0ZWw6YXdCSiBQd2lVIGNqWGkgWmlHaSBkdXpEIElDRVg=`,
    },
  },
  // globalSetup: fileURLToPath(
  //   new URL( './config/global-setup.ts', 'file:' + __filename ).href
  // ),
  projects: [
    // Setup project
    { name: 'setup', testMatch: /.*\.setup\.ts/ },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Use prepared auth state.
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     // Use prepared auth state.
    //     storageState: 'playwright/.auth/user.json',
    //   },
    //   dependencies: ['setup'],
    // },
  ],
});