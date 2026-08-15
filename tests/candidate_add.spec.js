import { test, expect } from '@playwright/test';
import fs from 'fs';
import { AddCandidatePage } from '../pages/AddCandidatePage.js';

test.use({
storageState: 'storageState.json'
});

test('TC_013 - Verify user can open Add Candidate form', async ({ page }) => {

    const candidate = new AddCandidatePage(page);

    await candidate.openDashboard();
    await candidate.openRecruitment();
    await candidate.openCandidates();
    await candidate.clickAdd();

    await expect(candidate.addCandidateTitle).toBeVisible();

});


test('TC_014 - Add candidate with valid information', async ({ page }) => {

    const candidate = new AddCandidatePage(page);

    await candidate.openDashboard();
    await candidate.openRecruitment();
    await candidate.openCandidates();
    await candidate.clickAdd();

    const candidateData = await candidate.addCandidate();

    await expect(candidate.success).toBeVisible();

    fs.writeFileSync(
        'candidateData.json',
        JSON.stringify(candidateData, null, 2)
    );

});