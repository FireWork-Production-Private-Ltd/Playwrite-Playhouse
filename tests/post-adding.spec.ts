import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // await page.goto('https://qa-utsav-patel.rt.gw/wp-login.php?redirect_to=https%3A%2F%2Fqa-utsav-patel.rt.gw%2Fwp-admin%2F&reauth=1');
  // await page.getByLabel('Username or Email Address').fill('qa-utsav-patel');
  // await page.getByLabel('Username or Email Address').press('Tab');
  // await page.getByLabel('Password', { exact: true }).fill('.2123cds*sKird');
  // await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://qa-utsav-patel.rt.gw/wp-admin');
  await page.getByRole('link', { name: 'Posts', exact: true }).click();
  await page.getByLabel('Main menu', { exact: true }).getByRole('link', { name: 'Add New Post' }).click();
  await page.getByLabel('Add title').fill('testing from playwrite');
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  await page.getByLabel('Editor publish').getByRole('button', { name: 'Publish', exact: true }).click();
});