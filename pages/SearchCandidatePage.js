export class SearchCandidatePage {

    constructor(page) {
        this.page = page;

        // Search Candidate
        this.candidateName = page.getByRole('textbox', { name: 'Type for hints...' });
        this.searchBtn = page.getByRole('button', { name: 'Search' });
        this.invalidMessage = page.getByText('Invalid', { exact: true });

    }

    async searchCandidate(fullName) {
        const firstName = fullName.split(' ')[0];

        this.candidateOption = this.page
            .getByRole('option', { name: new RegExp(firstName) })
            .first();

        this.candidateRow = this.page
            .getByRole('row', { name: new RegExp(fullName) })
            .first();

        await this.candidateName.click();
        await this.candidateName.fill(firstName);
        await this.candidateOption.click();
        await this.searchBtn.click();
    }
    
    async searchInvalidCandidate() {
        await this.candidateName.click();
        await this.candidateName.fill('shafi');
        await this.searchBtn.click();
    }

}