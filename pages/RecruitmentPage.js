
export class RecruitmentPage {

    constructor(page) {
        this.page = page;

        this.recruitmentMenu = page.getByRole('link', { name: 'Recruitment' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.addButton = page.getByRole('button', { name: ' Add' });
        this.candidatesTab = page.getByRole('link', { name: 'Candidates' });
        this.vacanciesTab = page.getByRole('link', { name: 'Vacancies' });
        this.recruitmentTitle = page.getByRole('heading', { name: 'Recruitment' });
    }

    async openDashboard() {
    await this.page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
        { waitUntil: 'domcontentloaded' }
    );
}

    async openRecruitment() {
        await this.recruitmentMenu.waitFor({ state: 'visible' });
        await this.recruitmentMenu.click();
    }


    async clickReset() {
        await this.resetButton.click();
    }

    async clickAdd() {
        await this.addButton.click();
    }


    async openCandidates() {
        await this.candidatesTab.click();
    }

    


}