import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class VacancyValidationPage {

    constructor(page) {
        this.page = page;
        // Navigations
        this.recruitment = page.getByRole('link', { name: 'Recruitment' });
        this.vacancies = page.getByRole('link', { name: 'Vacancies' });
        this.addBtn = page.getByRole('button', { name: /Add/i });

        // Form fields
        this.vacancyName = page.locator('.oxd-input-group', { hasText: 'Vacancy Name' }).locator('input');
        this.jobTitleDropdown = page.locator('.oxd-input-group', { hasText: 'Job Title' }).locator('.oxd-select-wrapper');
        this.hiringManager = page.getByPlaceholder('Type for hints...');
        this.numberOfPositions = page.locator('.oxd-input-group', { hasText: 'Number of Positions' }).locator('input');
        this.description = page.getByPlaceholder('Type description here');
        this.saveBtn = page.getByRole('button', { name: 'Save' });

        // Validation
        this.vacancyNameRequired = page.getByText('Required', { exact: true }).first();
        this.hiringManagerRequired = page.getByText('Required', { exact: true }).last();

         // Search
        this.vacancyDropdown = page
            .locator('.oxd-input-group')
            .filter({ hasText: 'Vacancy' })
            .locator('.oxd-select-wrapper');

        this.searchBtn = page.getByRole('button', { name: 'Search' });
    }



    async openRecruitment() {
        await this.recruitment.click();
    }

    async openVacancies() {
        await this.vacancies.click();
    }

    async clickAdd() {
        await this.addBtn.click();
        await this.page.waitForURL(/addJobVacancy/);
    }

    async addVacancyWithoutName() {

        await this.jobTitleDropdown.click();
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.hiringManager.fill('a');
        const manager = this.page.locator('.oxd-autocomplete-option').first();
        await manager.waitFor({ state: 'visible' });
        await manager.click();
        await this.numberOfPositions.fill('5');
        await this.description.fill(faker.lorem.sentence());
        await this.saveBtn.click();
    }

    async verifyVacancyNameRequired() {
        await expect(this.vacancyNameRequired).toBeVisible();
    }

    async addVacancyWithoutHiringManager() {

    await this.vacancyName.fill(`${faker.person.jobTitle()} ${faker.number.int(1000)}`);
    await this.jobTitleDropdown.click();
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.numberOfPositions.fill('5');
    await this.description.fill(faker.lorem.sentence());
    await this.saveBtn.click();
    }

    async verifyHiringManagerRequired() {
        await expect(this.hiringManagerRequired).toBeVisible();
    }

    async searchVacancy(vacancyName) {
    await this.vacancyDropdown.click();

    await this.page.getByRole('option', {
        name: vacancyName,
        exact: true
    }).click();

    await this.searchBtn.click();
}

    async verifyVacancyDisplayed(vacancyName) {
        await expect(
            this.page.getByRole('row').filter({
                hasText: vacancyName
            })
        ).toBeVisible();
    }



}