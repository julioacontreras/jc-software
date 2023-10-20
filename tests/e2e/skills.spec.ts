import { expect, test } from '@playwright/test';

test('skills page flow', async ({ page }) => {
	await page.goto('/skills');

	await expect(page).toHaveTitle(/Habilidades - Julio Contreras/);

	await expect(page.locator('body')).toHaveClass('theme page-default image-fill');

	await expect(page.locator('h1')).toHaveText('Habilidades');

	await expect(page.locator('ul')).toHaveCount(3);
});
