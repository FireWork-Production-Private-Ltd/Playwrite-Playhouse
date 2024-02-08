import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // await page.goto('https://qa-utsav-patel.rt.gw/wp-login.php?redirect_to=https%3A%2F%2Fqa-utsav-patel.rt.gw%2Fwp-admin%2F&reauth=1');
  // await page.getByLabel('Username or Email Address').fill('qa-utsav-patel');
  // await page.getByLabel('Username or Email Address').press('Tab');
  // await page.getByLabel('Password', { exact: true }).fill('.2123cds*sKird');
  // await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://qa-utsav-patel.rt.gw/wp-admin');
  await page.getByRole('link', { name: 'Posts', exact: true }).click();
  // await page.getByRole('row', { name: 'Select testing from playwrite “testing from playwrite” (Edit) Edit “testing from playwrite” | Quick edit “testing from playwrite” inline | Move “testing from playwrite” to the Trash | View “testing from playwrite” qa-utsav-patel Uncategorized No tags No comments Published 2024/02/08 at 9:24 am', exact: true }).getByLabel('Select testing from playwrite').check();
  await page.locator('#bulk-action-selector-top').selectOption('trash');
  await page.locator('#doaction').click();
});