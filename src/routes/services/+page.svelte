<script>
	// @ts-nocheck

    import './style.scss'
	import { onMount } from 'svelte'

	// Adapters
	import { i18n } from '$lib/core/adapters/i18n'
    // Language reactive
 	/** @param {any} dictionary */		
	let t = {}
	i18n.subscribe(
		/** @param {any} data */		
		(data) => {
			t = data
		})

	// Components & views
	import TextList from '$lib/ui/components/textList/index.svelte'

	onMount(async () => {
		window.document.body.classList.remove('page-home')
        window.document.body.classList.add('page-default')
        window.document.body.classList.add('image-fill')
    })
</script>

<svelte:head>
	<title> {t['general.services']} - {t['general.app']}</title>
</svelte:head>

<div class="container">
	<section class="stack stack-direction-column fade-in">
		<section class="spacer space-xl-4"></section>
		<h1>{t['services.title']}</h1>
		<section class="spacer space-sm"></section>
		<h2 class="width-sub-title">{t['services.subtitle']}</h2>
		<section class="spacer space-xl"></section>
		<section class="stack stack-direction-row">
			{#each t['services.list'] as service}
				<TextList decoration="pill" gap="sm" items="{service.items}" classes="list-services"></TextList>
			{/each}
		</section>
	</section>
</div>
