import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-utsav-patel.rt.gw/wp-login.php?redirect_to=https%3A%2F%2Fqa-utsav-patel.rt.gw%2Fwp-admin%2F&reauth=1');
  await page.getByLabel('Username or Email Address').fill('qa-utsav-patel');
  await page.getByLabel('Username or Email Address').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('.2123cds*sKird');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Posts', exact: true }).click();
  await page.getByRole('link', { name: 'Categories' }).click();
  await page.getByRole('button', { name: 'Add New Category' }).click();
  // await page.getByLabel('Delete “test”').click();
});