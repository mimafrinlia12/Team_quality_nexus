import { test as setup, expect } from '@playwright/test';

setup('Login', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name:'Username' })
    .fill('Admin');

  await page.getByRole('textbox', { name:'Password' })
    .fill('admin123');

  await page.getByRole('button', { name:'Login' })
    .click();


 
  await page.getByText('Dashboard').first()
    .waitFor();


  // save login session
  await page.context().storageState({
    path:'storageState.json'
  });

});