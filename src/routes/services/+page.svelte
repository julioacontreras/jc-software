<script lang="ts">
	import './style.scss';
	import { onMount } from 'svelte';
	import type { Items } from '@/lib/ui/components/text-list/types';

	// Adapters
	import { i18n } from '$lib/core/adapters/i18n';

	// Language reactive
	let t: Record<string, unknown> = {};
	i18n.subscribe((data) => {
		t = data as Record<string, unknown>;
	});

	// Components
	import TextList from '@/lib/ui/components/text-list/index.svelte';

	$: services = (t['services.list'] as { items: Items }[]) || [];

	onMount(async () => {
		window.document.body.classList.remove('page-home');
		window.document.body.classList.add('page-default');
		window.document.body.classList.add('image-fill');
	});
</script>

<svelte:head>
	<title>{t['general.services']} - {t['general.app']}</title>
</svelte:head>

<div class="container">
	<section class="stack stack-direction-column fade-in">
		<section class="spacer space-xl-4" />
		<h1>{t['services.title']}</h1>
		<section class="spacer space-sm" />
		<h2 class="width-sub-title">{t['services.subtitle']}</h2>
		<section class="spacer space-xl" />
		<section class="stack stack-direction-row">
			{#each services as service}
				<TextList decoration="pill" gap="sm" items={service.items} classes="list-services" />
			{/each}
		</section>
	</section>
</div>
