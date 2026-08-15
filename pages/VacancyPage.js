import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class VacancyPage {

    constructor(page) {
        this.page = page;

        // Navigations
        this.recruitment = page.getByRole('link', { name: 'Recruitment' });
        this.vacancies = page.getByRole('link', { name: 'Vacancies' });
        this.vacancyTitle = page.getByRole('heading', { name: 'Vacancies' });
        this.addVacancyTitle = page.getByRole('heading', { name: 'Add Vacancy' });
        this.addBtn = page.getByRole('button', { name: /Add/i });

        // Form fields
        this.vacancyName = page.locator('.oxd-input-group').filter({ hasText: 'Vacancy Name' }).locator('input');
        this.jobTitleDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('.oxd-select-wrapper');
        this.jobTitleOptions = page.locator('.oxd-select-option');
        this.hiringManager = page.getByPlaceholder('Type for hints...');
        this.numberOfPositions = page.locator('.oxd-input-group').filter({ hasText: 'Number of Positions' }).locator('input');
        this.description = page.getByPlaceholder('Type description here');
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        // Notification
        this.toastSuccess = page.locator('.oxd-toast');
    }

    async openDashboard() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    }

    async openRecruitment() {
        await this.recruitment.click();
    }

    async openVacancies() {
        await this.vacancies.click();
    }

    async clickAdd() {
        await this.addBtn.click();
    }

    async addVacancy() {
        const vacancyName = `${faker.person.jobTitle()} ${faker.number.int(1000)}`;
        await this.vacancyName.fill(vacancyName);

       // 1. Job Title Selection
    await this.jobTitleDropdown.click();

    await this.jobTitleOptions.first().waitFor({
        state: 'visible',
        timeout: 5000
    });

    const jobTitleCount = await this.jobTitleOptions.count();

    const randomJobTitleIndex = faker.number.int({
        min: 0,
        max: jobTitleCount - 1
    });

    await this.jobTitleOptions.nth(randomJobTitleIndex).click();

        // 2. Select Hiring Manager
        await this.hiringManager.fill('a');

        const managerOptions = this.page.locator('.oxd-autocomplete-option').filter({ hasNotText: 'Searching' });
        await managerOptions.first().waitFor({ state: 'visible', timeout: 10000 });

        const managerCount = await managerOptions.count();
        const randomManagerIndex = faker.number.int({ min: 0, max: managerCount - 1 });
        await managerOptions.nth(randomManagerIndex).click();

        // 3. Fixed Position to 5
        await this.numberOfPositions.fill('5');

        // 4. Description & Save
        await this.description.fill(faker.lorem.sentence());
        await this.saveBtn.click();

        return vacancyName;
    }

    

    
}