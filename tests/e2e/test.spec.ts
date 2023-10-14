import { expect, test } from '@playwright/test';

test('index page flow', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/Home - Julio Contreras/);
	await expect(page.locator('.navbar a:nth-child(1)')).toHaveText('Home')
	await expect(page.locator('.navbar a:nth-child(2)')).toHaveText('Servicios')
	await expect(page.locator('.navbar a:nth-child(3)')).toHaveText('Habilidades')
});

