# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: validation.spec.js >> TC_019 - Verify candidate name rejects invalid characters
- Location: tests\validation.spec.js:64:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Invalid')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Invalid')
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/95" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/95"

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Recruitment" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: PrimeiroTeste TerceiroTeste
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem:
        - link "Candidates":
          - /url: "#"
      - listitem:
        - link "Vacancies":
          - /url: "#"
      - button ""
- heading "Application Stage" [level=6]
- separator
- text: Name
- paragraph: Vaggo123@#$ ........ Roy456!@#
- text: Vacancy
- paragraph: N/A
- text: Hiring Manager
- paragraph: N/A
- separator
- heading "Candidate Profile" [level=6]
- text: Edit
- checkbox "Edit"
- separator
- text: Full Name*
- textbox "First Name" [disabled]: Vaggo123@#$
- textbox "Middle Name" [disabled]: ........
- textbox "Last Name" [disabled]: Roy456!@#
- text: Job Vacancy -- Select --  Email*
- textbox "Type here" [disabled]: Gayle67@gmail.com
- text: Contact Number
- textbox "Type here" [disabled]
- separator
- text: Resume
- button "Choose File"
- text: Browse No file selected 
- paragraph: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
- separator
- text: Keywords
- textbox "Enter comma seperated words..." [disabled]
- text: Date of Application
- textbox "yyyy-mm-dd" [disabled]: 2026-08-15
- text:  Notes
- textbox "Type here" [disabled]
- text: Consent to keep data
- checkbox "" [disabled]
- text: 
- heading "Candidate History" [level=6]
- separator
- text: (1) Record Found
- table:
  - rowgroup:
    - row "Performed Date Description Actions":
      - columnheader "Performed Date"
      - columnheader "Description"
      - columnheader "Actions"
  - rowgroup:
    - row "2026-08-15 PrimeiroTeste SegundoTeste TerceiroTeste added Vaggo123@#$ ........ Roy456!@#":
      - cell "2026-08-15"
      - cell "PrimeiroTeste SegundoTeste TerceiroTeste added Vaggo123@#$ ........ Roy456!@#"
      - cell
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { AddCandidatePage } from '../pages/AddCandidatePage.js';
  3   | 
  4   | test.use({
  5   | storageState: 'storageState.json'
  6   | });
  7   | 
  8   | test('TC_015 - Verify candidate creation without First Name', async ({ page }) => {
  9   | 
  10  |     const candidate = new AddCandidatePage(page);
  11  | 
  12  |     await candidate.openDashboard();
  13  |     await candidate.openRecruitment();
  14  |     await candidate.openCandidates();
  15  |     await candidate.clickAdd();
  16  |     await candidate.addCandidateWithoutFirstName();
  17  | 
  18  |     await expect(candidate.firstNameRequired).toBeVisible();
  19  | 
  20  | });
  21  | 
  22  | test('TC_016 - Verify candidate creation without Last Name', async ({ page }) => {
  23  | 
  24  |     const candidate = new AddCandidatePage(page);
  25  | 
  26  |     await candidate.openDashboard();
  27  |     await candidate.openRecruitment();
  28  |     await candidate.openCandidates();
  29  |     await candidate.clickAdd();
  30  |     await candidate.addCandidateWithoutLastName();
  31  | 
  32  |     await expect(candidate.lastNameRequired).toBeVisible();
  33  | 
  34  | });
  35  | 
  36  | test('TC_017 - Verify candidate creation without Email', async ({ page }) => {
  37  | 
  38  |     const candidate = new AddCandidatePage(page);
  39  | 
  40  |     await candidate.openDashboard();
  41  |     await candidate.openRecruitment();
  42  |     await candidate.openCandidates();
  43  |     await candidate.clickAdd();
  44  |     await candidate.addCandidateWithoutEmail();
  45  | 
  46  |     await expect(candidate.emailRequired).toBeVisible();
  47  | 
  48  | });
  49  | 
  50  | test('TC_018 - Verify email field rejects invalid special characters', async ({ page }) => {
  51  | 
  52  |     const candidate = new AddCandidatePage(page);
  53  | 
  54  |     await candidate.openDashboard();
  55  |     await candidate.openRecruitment();
  56  |     await candidate.openCandidates();
  57  |     await candidate.clickAdd();
  58  |     await candidate.addCandidateWithInvalidEmail();
  59  | 
  60  |     await expect(candidate.invalidEmail).toBeVisible();
  61  | 
  62  | });
  63  | 
  64  | test('TC_019 - Verify candidate name rejects invalid characters', async ({ page }) => {
  65  | 
  66  |     const candidate = new AddCandidatePage(page);
  67  | 
  68  |     await candidate.openDashboard();
  69  |     await candidate.openRecruitment();
  70  |     await candidate.openCandidates();
  71  |     await candidate.clickAdd();
  72  |     await candidate.addCandidateWithInvalidName();
  73  | 
> 74  |     await expect(candidate.invalidName).toBeVisible();
      |                                         ^ Error: expect(locator).toBeVisible() failed
  75  | 
  76  | });
  77  | 
  78  | test('TC_020 - Verify resume upload with unsupported file format', async ({ page }) => {
  79  | 
  80  |     const candidate = new AddCandidatePage(page);
  81  | 
  82  |     await candidate.openDashboard();
  83  |     await candidate.openRecruitment();
  84  |     await candidate.openCandidates();
  85  |     await candidate.clickAdd();
  86  |     await candidate.uploadUnsupportedResume();
  87  | 
  88  |     await expect(candidate.fileTypeError).toBeVisible();
  89  | 
  90  | });
  91  | 
  92  | test('TC_021 - Verify resume upload with large file size', async ({ page }) => {
  93  | 
  94  |     const candidate = new AddCandidatePage(page);
  95  | 
  96  |     await candidate.openDashboard();
  97  |     await candidate.openRecruitment();
  98  |     await candidate.openCandidates();
  99  |     await candidate.clickAdd();
  100 |     await candidate.uploadLargeResume();
  101 | 
  102 |     await expect(candidate.fileSizeError).toBeVisible();
  103 | 
  104 | });
```