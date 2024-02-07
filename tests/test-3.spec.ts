import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-utsav-patel.rt.gw/wp-login.php?redirect_to=https%3A%2F%2Fqa-utsav-patel.rt.gw%2Fwp-admin%2F&reauth=1');
  await page.getByLabel('Username or Email Address').fill('qa-utsav-patel');
  await page.getByLabel('Username or Email Address').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('.2123cds*sKird');
  await page.getByLabel('Password', { exact: true }).press('Tab');
  await page.getByLabel('Show password').press('Tab');
  await page.getByLabel('Remember Me').press('Tab');
  await page.getByRole('button', { name: 'Log In' }).press('Enter');
  await page.getByRole('link', { name: 'Posts', exact: true }).click();
  await page.getByRole('link', { name: 'Categories' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('aaa Test Utsav');
  await page.getByRole('button', { name: 'Add New Category' }).click();
});