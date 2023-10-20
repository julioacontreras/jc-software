import { cleanup, render, screen } from '@testing-library/svelte';
import SocialLinks from '../../src/lib/ui/components/social-links/index.svelte';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import { setApp } from '../../src/lib/core/adapters/app/index';

const subscribeMocked = vi.fn();

setApp({
	subscribe: subscribeMocked,
	set: () => {}
});

describe('SocialLinks.svelte', () => {
	beforeEach(() => {
		subscribeMocked.mockClear();
	});

	afterEach(() => cleanup());

	it('mounts', () => {
		const { container } = render(SocialLinks, {});
		expect(container).toBeTruthy();
		expect(container.innerHTML).toMatchSnapshot();
		expect(subscribeMocked).toBeCalledTimes(1);
	});

	it('Check links', async () => {
		render(SocialLinks, {});
		const linkedin = screen.getByTestId('link-linkedin');
		expect(linkedin).toBeTruthy();
		const github = screen.getByTestId('link-github');
		expect(github).toBeTruthy();
		const medium = screen.getByTestId('link-medium');
		expect(medium).toBeTruthy();
		expect(subscribeMocked).toBeCalledTimes(1);
	});
});
