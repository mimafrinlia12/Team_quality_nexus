import { test, expect } from '@playwright/test';
import fs from 'fs';
import { AddCandidatePage } from '../pages/AddCandidatePage.js';
import { SearchCandidatePage } from '../pages/SearchCandidatePage.js';

test.use({
storageState: 'storageState.json'
});

const candidateData = JSON.parse(
fs.readFileSync('candidateData.json', 'utf-8')
);

test('TC_020 - Verify candidate search with valid name', async ({ page }) => {

const candidate = new AddCandidatePage(page);
const search = new SearchCandidatePage(page);

await candidate.openDashboard();
await candidate.openRecruitment();

await search.searchCandidate(candidateData.fullName);

await expect(search.candidateRow).toBeVisible();

});

test('TC_021 - Verify candidate search with invalid name', async ({ page }) => {

const candidate = new AddCandidatePage(page);
const search = new SearchCandidatePage(page);

await candidate.openDashboard();
await candidate.openRecruitment();

await search.searchInvalidCandidate();

await expect(search.invalidMessage).toBeVisible();

});