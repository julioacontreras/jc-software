import { expect, test } from '@playwright/test';

test('home page flow', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(/Home - Julio Contreras/);

	await expect(page.locator('body')).toHaveClass('theme page-home')

	await expect(page.locator('[data-name="navbar-top"] a:nth-child(1)')).toHaveText('Home')
	await expect(page.locator('[data-name="navbar-top"] a:nth-child(2)')).toHaveText('Servicios')
	await expect(page.locator('[data-name="navbar-top"] a:nth-child(3)')).toHaveText('Habilidades')

	page.locator('[data-name="navbar-settings"] button[data-name="button-lang"]').click()

	await expect(page.locator('[data-name="navbar-top"] a:nth-child(1)')).toHaveText('Home')
	await expect(page.locator('[data-name="navbar-top"] a:nth-child(2)')).toHaveText('Services')
	await expect(page.locator('[data-name="navbar-top"] a:nth-child(3)')).toHaveText('Skills')
	
	page.locator('[data-name="navbar-settings"] button[data-name="button-theme"]').click()

	await expect(page.locator('body')).toHaveClass('theme page-home theme-light')

	await expect(page.locator('[data-name="link-linkedin"]')).toHaveAttribute('href', 'https://www.linkedin.com/in/julio-contreras-6579b623/')
	await expect(page.locator('[data-name="link-github"]')).toHaveAttribute('href', 'https://github.com/julioacontreras')
	await expect(page.locator('[data-name="link-medium"]')).toHaveAttribute('href', 'https://medium.com/@julio.aranis.contreras')
});

