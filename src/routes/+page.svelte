<script lang="ts">
	import { onMount } from 'svelte';

	// Adapters
	import { i18n } from '$lib/core/adapters/i18n';

	// Components
	import SocialLinks from '$lib/ui/components/social-links/index.svelte';

	// Reactive language
	let t: Record<string, unknown> = {};
	i18n.subscribe((data: unknown) => {
		t = data as Record<string, unknown>;
	});

	onMount(async () => {
		window.document.body.classList.remove('page-default');
		window.document.body.classList.remove('image-fill');
		window.document.body.classList.add('page-home');
	});
</script>

<svelte:head>
	<title>{t['general.home']} - {t['general.app']}</title>
</svelte:head>

<div class="container">
	<section class="stack stack-direction-column fade-in text-end">
		<section class="spacer space-xl-4" />
		<h1 class="text-primary">JULIO CONTRERAS</h1>
		<section class="spacer space-sm" />
		<h2 class="text-primary">WEB DEVELOPER</h2>
		<section class="spacer space-xl-2" />
		<section class="stack stack-drection-row stack-gap-lg stack-row-end">
			<SocialLinks />
		</section>
	</section>
</div>
