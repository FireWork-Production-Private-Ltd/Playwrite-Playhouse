import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // await page.goto('https://qa-utsav-patel.rt.gw/wp-login.php?redirect_to=https%3A%2F%2Fqa-utsav-patel.rt.gw%2Fwp-admin%2F&reauth=1');
  // await page.getByLabel('Username or Email Address').fill('qa-utsav-patel');
  // await page.getByLabel('Username or Email Address').press('Tab');
  // await page.getByLabel('Password', { exact: true }).fill('.2123cds*sKird');
  // await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://qa-utsav-patel.rt.gw/wp-admin');
  await page.locator('#menu-media').getByRole('link', { name: 'Media', exact: true }).click();
  await page.getByRole('button', { name: 'Add New Media File' }).click();
  await page.getByLabel('Select Files').click();
  // await page.getByLabel('Select Files').setInputFiles('manheim.png');
  // await page.locator('button').setInputFiles('manheim.png');
});