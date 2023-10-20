<script lang="ts">
	import './style.scss';
	import { base } from '$app/paths';

	// Adapters
	import { i18n } from '$lib/core/adapters/i18n';
	import { app } from '$lib/core/adapters/app';
	import { onMount } from 'svelte';
	import { browser } from '@/lib/core/adapters/browser';
	import type { MouseEventHandler } from 'svelte/elements';

	// Reactive language
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	let t: Record<string, any> = {};
	i18n.subscribe((data: unknown) => {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		t = data as Record<string, any>;
	});

	// Reactive app
	let settings: Record<string, unknown> = {};
	app.subscribe(
		/** @param {any} data */
		(data: unknown) => {
			settings = data as Record<string, unknown>;
		}
	);

	const updateActive = (href: string): MouseEventHandler<HTMLAnchorElement> | null | undefined => {
		settings.activePage = href;
		return null;
	};

	$: langParam = settings.lang ? `lang=${settings.lang}` : '';
	$: themeParam = settings.theme ? `theme=${settings.theme}` : '';

	onMount(() => {
		settings.activePage = browser.getUrlHost();
	});
</script>

<div data-testid="navbar-top" class="navbar stack-width-full">
	{#each t['general.menu'] as link}
		<a
			href="{base}{link.href}?{langParam}&{themeParam}"
			class="link-navbar"
			class:active={settings.activePage === link.href}
			on:click={updateActive(link.href)}>{link.title}</a
		>
	{/each}
</div>
