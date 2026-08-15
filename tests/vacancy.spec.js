import { test, expect } from '@playwright/test';
import fs from 'fs';
import { VacancyPage } from '../pages/VacancyPage.js';
import { VacancyValidationPage } from '../pages/VacancyValidationPage.js';

test.use({
    storageState: 'storageState.json'
});

test('TC_004 - Verify user can access Vacancy page', async ({ page }) => {

    const vacancy = new VacancyPage(page);

    await vacancy.openDashboard();
    await vacancy.openRecruitment();
    await vacancy.openVacancies();

    await expect(vacancy.vacancyTitle).toBeVisible();

});

test('TC_005 - Verify user can open Add Vacancy form', async ({ page }) => {

    const vacancy = new VacancyPage(page);

    await vacancy.openDashboard();
    await vacancy.openRecruitment();
    await vacancy.openVacancies();
    await vacancy.clickAdd();

    await expect(vacancy.addVacancyTitle).toBeVisible();

});

test('TC_006 - Verify vacancy can be added with valid information', async ({ page }) => {

    const vacancy = new VacancyPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await vacancy.openRecruitment();
    await vacancy.openVacancies();
    await vacancy.clickAdd();

    const vacancyData = await vacancy.addVacancy();

    await expect(page).toHaveURL(/recruitment\/addJobVacancy\/\d+/);

    fs.writeFileSync(
    'vacancyData.json',
    JSON.stringify({ vacancyName: vacancyData }, null, 2)
    );

    });

test('TC_007 - Verify vacancy creation without Vacancy Name', async ({ page }) => {

    const vacancy = new VacancyValidationPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await vacancy.openRecruitment();
    await vacancy.openVacancies();
    await vacancy.clickAdd();

    await vacancy.addVacancyWithoutName();

    await vacancy.verifyVacancyNameRequired();
});

test('TC_008 - Verify vacancy creation without Hiring Manager', async ({ page }) => {

    const vacancy = new VacancyValidationPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await vacancy.openRecruitment();
    await vacancy.openVacancies();
    await vacancy.clickAdd();

    await vacancy.addVacancyWithoutHiringManager();

    await vacancy.verifyHiringManagerRequired();
});


test('TC_009 - Verify vacancy search with valid vacancy name', async ({ page }) => {

    const vacancy = new VacancyValidationPage(page);

    const vacancyData = JSON.parse(
        fs.readFileSync('vacancyData.json', 'utf-8')
    );

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await vacancy.openRecruitment();
    await vacancy.openVacancies();

    await vacancy.searchVacancy(vacancyData.vacancyName);

    await vacancy.verifyVacancyDisplayed(vacancyData.vacancyName);
});



