import { test, expect } from '@playwright/test';

test.use({
    storageState: 'storageState.json'
});


test('NFTC_001 - Verify Recruitment page loading performance', async ({ page }) => {

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
    );

    await expect(
        page.getByText('Recruitment')
    ).toBeVisible();


    const start = Date.now();


    await page.getByText('Recruitment').click();


    await page.waitForLoadState('domcontentloaded');


    const end = Date.now();


    const loadTime = end - start;


    console.log(`Recruitment Page Load Time: ${loadTime} ms`);


    expect(loadTime).toBeLessThan(5000);

});

test('NFTC_002 - Verify Recruitment module compatibility across browsers', async ({ page }) => {

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
    );

    await expect(
        page.getByText('Recruitment')
    ).toBeVisible();

    await page.getByText('Recruitment').click();

    await expect(
        page.getByRole('heading', { name: 'Candidates' })
    ).toBeVisible();

    console.log('Recruitment module works successfully');

});



test('NFTC_003 - Verify Recruitment module stability during repeated operations', async ({ page }) => {

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
    );

    await expect(
        page.getByText('Recruitment')
    ).toBeVisible();


    await page.getByText('Recruitment').click();


    await page.getByRole('link', {
        name: 'Candidates'
    }).click();


    await expect(
        page.getByRole('heading', {
            name: 'Candidates'
        })
    ).toBeVisible();



    const searchBox = page.getByRole('textbox', {
        name: 'Type for hints...'
    });


    for (let i = 1; i <= 3; i++) {

        console.log(`Stability Cycle ${i}`);


        await searchBox.fill('Admin');


        await page.getByRole('button', {
            name: 'Search'
        }).click();


        await page.waitForTimeout(1000);


        console.log(`Cycle ${i} completed`);

    }


    console.log('Recruitment module remained stable');

});