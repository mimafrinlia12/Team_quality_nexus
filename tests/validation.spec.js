import { test, expect } from '@playwright/test';
import { AddCandidatePage } from '../pages/AddCandidatePage.js';

test.use({
storageState: 'storageState.json'
});

test('TC_015 - Verify candidate creation without First Name', async ({ page }) => {

    const candidate = new AddCandidatePage(page);

    await candidate.openDashboard();
    await candidate.openRecruitment();
    await candidate.openCandidates();
    await candidate.clickAdd();
    await candidate.addCandidateWithoutFirstName();

    await expect(candidate.firstNameRequired).toBeVisible();

});

test('TC_016 - Verify candidate creation without Last Name', async ({ page }) => {

    const candidate = new AddCandidatePage(page);

    await candidate.openDashboard();
    await candidate.openRecruitment();
    await candidate.openCandidates();
    await candidate.clickAdd();
    await candidate.addCandidateWithoutLastName();

    await expect(candidate.lastNameRequired).toBeVisible();

});

test('TC_017 - Verify candidate creation without Email', async ({ page }) => {

    const candidate = new AddCandidatePage(page);

    await candidate.openDashboard();
    await candidate.openRecruitment();
    await candidate.openCandidates();
    await candidate.clickAdd();
    await candidate.addCandidateWithoutEmail();

    await expect(candidate.emailRequired).toBeVisible();

});

test('TC_018 - Verify email field rejects invalid special characters', async ({ page }) => {

    const candidate = new AddCandidatePage(page);

    await candidate.openDashboard();
    await candidate.openRecruitment();
    await candidate.openCandidates();
    await candidate.clickAdd();
    await candidate.addCandidateWithInvalidEmail();

    await expect(candidate.invalidEmail).toBeVisible();

});

test('TC_019 - Verify candidate name rejects invalid characters', async ({ page }) => {

    const candidate = new AddCandidatePage(page);

    await candidate.openDashboard();
    await candidate.openRecruitment();
    await candidate.openCandidates();
    await candidate.clickAdd();
    await candidate.addCandidateWithInvalidName();

    await expect(candidate.invalidName).toBeVisible();

});

test('TC_020 - Verify resume upload with unsupported file format', async ({ page }) => {

    const candidate = new AddCandidatePage(page);

    await candidate.openDashboard();
    await candidate.openRecruitment();
    await candidate.openCandidates();
    await candidate.clickAdd();
    await candidate.uploadUnsupportedResume();

    await expect(candidate.fileTypeError).toBeVisible();

});

test('TC_021 - Verify resume upload with large file size', async ({ page }) => {

    const candidate = new AddCandidatePage(page);

    await candidate.openDashboard();
    await candidate.openRecruitment();
    await candidate.openCandidates();
    await candidate.clickAdd();
    await candidate.uploadLargeResume();

    await expect(candidate.fileSizeError).toBeVisible();

});