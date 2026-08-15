import { test, expect } from '@playwright/test';
import { RecruitmentPage } from '../pages/RecruitmentPage.js';

test.use({
    storageState: 'storageState.json'
});

test('TC_002 - Verify access to Recruitment module', async ({ page }) => {

    const recruitment = new RecruitmentPage(page);

    await recruitment.openDashboard();
    await recruitment.openRecruitment();

    await expect(page).toHaveURL(/recruitment/);
    await expect(recruitment.recruitmentTitle).toBeVisible();
    await expect(recruitment.candidatesTab).toBeVisible();
    await expect(recruitment.vacanciesTab).toBeVisible();
});

test('TC_003 - Verify Recruitment page elements', async ({ page }) => {

    const recruitment = new RecruitmentPage(page);

    await recruitment.openDashboard();
    await recruitment.openRecruitment();

    await expect(recruitment.resetButton).toBeVisible();
    await expect(recruitment.addButton).toBeVisible();

});


