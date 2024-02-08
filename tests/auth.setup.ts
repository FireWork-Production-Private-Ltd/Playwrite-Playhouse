import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto('https://qa-utsav-patel.rt.gw/wp-login.php?redirect_to=https%3A%2F%2Fqa-utsav-patel.rt.gw%2Fwp-admin%2F&reauth=1');
    await page.getByLabel('Username or Email Address').fill('qa-utsav-patel');
    await page.getByLabel('Username or Email Address').press('Tab');
    await page.getByLabel('Password', { exact: true }).fill('.2123cds*sKird');
    await page.getByRole('button', { name: 'Log In' }).click();
    // await page.waitForURL('https://qa-utsav-patel.rt.gw/');

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});


// import { test as setup } from '@playwright/test';
// import { title } from 'process';

// const authFile = 'playwright/.auth/user.json';

// setup('authenticate', async ({ request }) => {
//   // Send authentication request. Replace with your own.
//   await request.post('https://qa-utsav-patel.rt.gw/wp-json/wp/v2/posts', {
//     headers: {
//       'Authorization' : 'Basic cWEtdXRzYXYtcGF0ZWw6YXdCSiBQd2lVIGNqWGkgWmlHaSBkdXpEIElDRVg='
//     },
//     data: {
//       title: 'Test Post playwrite utsav patel',
//       status: 'publish',
//     },
//   });
//   await request.storageState({ path: authFile });
// });