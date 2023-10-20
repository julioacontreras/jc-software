import { expect, test } from '@playwright/test';

test('home page flow', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(/Home - Julio Contreras/);

	await expect(page.locator('body')).toHaveClass('theme page-home')

	await expect(page.locator('[prop-name="navbar-top"] a:nth-child(1)')).toHaveText('Home')
	await expect(page.locator('[prop-name="navbar-top"] a:nth-child(2)')).toHaveText('Servicios')
	await expect(page.locator('[prop-name="navbar-top"] a:nth-child(3)')).toHaveText('Habilidades')

	page.locator('[prop-name="navbar-settings"] button[prop-name="button-lang"]').click()

	await expect(page.locator('[prop-name="navbar-top"] a:nth-child(1)')).toHaveText('Home')
	await expect(page.locator('[prop-name="navbar-top"] a:nth-child(2)')).toHaveText('Services')
	await expect(page.locator('[prop-name="navbar-top"] a:nth-child(3)')).toHaveText('Skills')
	
	page.locator('[prop-name="navbar-settings"] button[prop-name="button-theme"]').click()

	await expect(page.locator('body')).toHaveClass('theme page-home theme-light')

	await expect(page.locator('#link-linkedin')).toHaveAttribute('href', 'https://www.linkedin.com/in/julio-contreras-6579b623/')
	await expect(page.locator('#link-github')).toHaveAttribute('href', 'https://github.com/julioacontreras')
	await expect(page.locator('#link-medium')).toHaveAttribute('href', 'https://medium.com/@julio.aranis.contreras')
});

