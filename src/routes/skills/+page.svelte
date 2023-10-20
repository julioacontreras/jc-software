<script lang="ts">
	import './style.scss';
	import { onMount } from 'svelte';
	import type { Items } from '@/lib/ui/components/text-list/types';

	type Service = {
		title: string;
		items: Items;
	};

	// Adapters
	import { i18n } from '$lib/core/adapters/i18n';

	// language reactive
	let t: Record<string, unknown> = {};
	i18n.subscribe((data: unknown) => {
		t = data as Record<string, unknown>;
	});

	// Components & views
	import TextList from '@/lib/ui/components/text-list/index.svelte';

	$: skills = (t['skills.list'] as Service[]) || [];

	onMount(async () => {
		window.document.body.classList.remove('page-home');
		window.document.body.classList.add('page-default');
		window.document.body.classList.add('image-fill');
	});
</script>

<svelte:head>
	<title>{t['general.skills']} - {t['general.app']}</title>
</svelte:head>

<div class="container">
	<section class="stack stack-direction-column fade-in">
		<section class="spacer space-xl-4" />
		<h1>{t['general.skills']}</h1>
		<section class="spacer space-xl" />
		<section class="grid grid-skills grid-direction-row grid-gap-xl">
			{#each skills as skill}
				<div>
					<h2>{skill.title}</h2>
					<section class="spacer space-sm" />
					<TextList decoration="pill" gap="sm" items={skill.items} classes="list-skills" />
					<section class="spacer space-sm" />
				</div>
			{/each}
		</section>
	</section>
</div>
