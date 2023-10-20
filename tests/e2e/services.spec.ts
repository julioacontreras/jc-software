import { expect, test } from '@playwright/test';

test('services page flow', async ({ page }) => {
	await page.goto('/services');

	await expect(page).toHaveTitle(/Servicios - Julio Contreras/);

	await expect(page.locator('body')).toHaveClass('theme page-default image-fill');

	await expect(page.locator('h1')).toHaveText('DESARROLLO SOB MEDIDA');
	await expect(page.locator('h2')).toHaveText('CREACIÓN DE APLICACIONES Y SERVICIOS SOB MEDIDA.');

	await expect(page.locator('ul li')).toHaveCount(3);
});
