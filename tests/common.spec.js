import { test, expect } from '@playwright/test';

test.describe('Common', () => {
    test.only('Navigation', async ({ page }) => {

        await page.goto('https://coding.pasv.us/user/login');

        await page.locator('#normal_login_email').fill('vl1vl@yahoo.com');
        await page.locator('#normal_login_password').fill('57ThTRTV99qf!5L');
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('.ant-avatar-square')).toBeVisible();


        await page.getByTestId('topmenu-Courses').click();
        await expect(page).toHaveURL('https://coding.pasv.us/course');
        await expect(page.getByText('Interactive Courses')).toBeVisible();


        await page.getByTestId('topmenu-Challenges').click();
        await expect(page).toHaveURL('https://coding.pasv.us/challenge?limit=30&page=1');
        await expect(page.getByText('Coding challenges')).toBeVisible();

        await page.getByTestId('topmenu-Interview Questions').click();
        await expect(page).toHaveURL('https://coding.pasv.us/flash');
        await expect(page.getByText('Interview practice cards')).toBeVisible();

        //here is a bug
        await page.getByTestId('topmenu-Diary').click();
        await expect(page).toHaveURL('https://coding.pasv.us/diary?page=1');
        await expect(page.getByText('Daily reports')).toBeVisible()
    })




/*Error: expect.toBeVisible: Error: strict mode violation: getByText('Groups') resolved to 3 elements:
1) <a href="/group">Groups</a> aka getByRole('link', { name: 'Groups' })
2) <h1>Groups</h1> aka getByRole('heading', { name: 'Groups' })
3) <div class="mt-4">Contact the admin to be allowed to see hidden gro…</div> aka getByText('Contact the admin to be')

Call log:
- expect.toBeVisible with timeout 5000ms
- waiting for getByText('Groups')

*/

/*
await page.getByTestId('topmenu-Groups').click()
await expect(page).toHaveURL('https://coding.pasv.us/group')
await expect(page.getByText('Groups')).toBeVisible()
});
 */
})
