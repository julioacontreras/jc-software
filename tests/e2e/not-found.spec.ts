import { expect, test } from '@playwright/test';

test('error page flow', async ({ page }) => {
	await page.goto('/page-with-wrong-name');

	await expect(page.locator('body')).toContainText('Not Found')
});

