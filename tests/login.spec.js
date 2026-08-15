import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('TC_001 Verify login with valid credentials', async ({ page }) => {

    const login = new LoginPage(page);

    await login.open();

    await login.login('Admin', 'admin123');

    await expect(page).toHaveURL(/dashboard/);
    await expect(login.dashboard).toBeVisible();

});