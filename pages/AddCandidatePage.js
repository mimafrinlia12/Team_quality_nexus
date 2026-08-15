
import { faker } from '@faker-js/faker';

export class AddCandidatePage {

    constructor(page) {
    this.page = page;

    // Navigation
    this.recruitment = page.getByRole('link', { name: 'Recruitment' });
    this.candidates = page.getByRole('listitem').filter({ hasText: 'Candidates' });
    this.addBtn = page.getByRole('button', { name: /Add/ });

    // Form
    this.addCandidateTitle = page.getByRole('heading', { name: 'Add Candidate' });
    this.firstName = page.getByRole('textbox', { name: 'First Name' });
    this.middleName = page.getByRole('textbox', { name: 'Middle Name' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name' });

    this.vacancyDropdown = page.locator('i').nth(5);
    this.vacancies = page.getByRole('option');

    this.email = page.getByRole('textbox', { name: 'Type here' }).first();
    this.contact = page.getByRole('textbox', { name: 'Type here' }).nth(1);

    this.resume = page.locator('input[type="file"]');

    this.saveBtn = page.getByRole('button', { name: 'Save' });

    this.success = page.getByText('Successfully Saved');

    // Validation Messages
    this.firstNameRequired = page.getByText('Required', { exact: true }).first();
    this.lastNameRequired = page.getByText('Required', { exact: true }).last();
    this.emailRequired = page.getByText('Required', { exact: true });
    this.invalidEmail = page.getByText('Expected format: admin@example.com');
    this.invalidName = page.getByText('Invalid');
    this.fileTypeError = page.getByText('File type not allowed');
    this.fileSizeError = page.getByText('Attachment Size Exceeded');
    }

    async openDashboard() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    }

    async openRecruitment() {
    await this.recruitment.click();
    }

    async openCandidates() {
    await this.candidates.click();
    }

    async addCandidate() {
    const firstName = faker.person.firstName();
    const middleName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const contact = faker.string.numeric(11);

    await this.firstName.fill(firstName);
    await this.middleName.fill(middleName);
    await this.lastName.fill(lastName);

    await this.vacancyDropdown.click();

    const vacancies = await this.vacancies.all();
    const randomIndex = faker.number.int({ min: 0, max: vacancies.length - 1 });
    const vacancy = await vacancies[randomIndex].innerText();

    await vacancies[randomIndex].click();

    await this.email.fill(email);
    await this.contact.fill(contact);

    await this.resume.setInputFiles('tests/files/lia.txt');

    await this.saveBtn.click();

    return {
    firstName,
    middleName,
    lastName,
    fullName: `${firstName} ${middleName} ${lastName}`,
    vacancy
    };
    }


    async clickAdd() {
    await this.addBtn.click();
    await this.page.waitForURL(/addCandidate/);
    }

    // Validation Methods

    async addCandidateWithoutFirstName() {
    await this.middleName.fill(faker.person.firstName());
    await this.lastName.fill(faker.person.lastName());
    await this.email.fill(faker.internet.email());
    await this.saveBtn.click();
    }


    async addCandidateWithoutLastName() {
    await this.firstName.fill(faker.person.firstName());
    await this.middleName.fill(faker.person.firstName());
    await this.email.fill(faker.internet.email());
    await this.saveBtn.click();
    }


    async addCandidateWithoutEmail() {
    await this.firstName.fill(faker.person.firstName());
    await this.middleName.fill(faker.person.firstName());
    await this.lastName.fill(faker.person.lastName());
    await this.saveBtn.click();
    }


    async addCandidateWithInvalidEmail() {
    await this.firstName.fill(faker.person.firstName());
    await this.middleName.fill(faker.person.firstName());
    await this.lastName.fill(faker.person.lastName());
    await this.email.fill('julfiker#!$%^&*_+??$@ex.com');
    await this.saveBtn.click();
    }


    async addCandidateWithInvalidName() {
    await this.firstName.fill('Vaggo123@#$');
    await this.middleName.fill('........');
    await this.lastName.fill('Roy456!@#');
    await this.email.fill(faker.internet.email());
    await this.saveBtn.click();
    }
    
    async uploadUnsupportedResume() {
    await this.firstName.fill(faker.person.firstName());
    await this.middleName.fill(faker.person.firstName());
    await this.lastName.fill(faker.person.lastName());
    await this.email.fill(faker.internet.email());
    await this.resume.setInputFiles('tests/files/lia.png');
    await this.saveBtn.click();
    }

    async uploadLargeResume() {
    await this.firstName.fill(faker.person.firstName());
    await this.middleName.fill(faker.person.firstName());
    await this.lastName.fill(faker.person.lastName());
    await this.email.fill(faker.internet.email());
    await this.resume.setInputFiles('tests/files/large.docx');
    await this.saveBtn.click();
    }

    
}