<script>
// @ts-nocheck

    import './style.scss'
	import { onMount } from 'svelte'

	// Adapters
	import { i18n } from '$lib/core/adapters/i18n'

    // language reactive
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
	<title> {t['general.skills']} - {t['general.app']}</title>
</svelte:head>

<div class="container">
	<section class="stack stack-direction-column fade-in">
		<section class="spacer space-xl-4"></section>
		<h1>{t['general.skills']}</h1>
		<section class="spacer space-xl"></section>
		<section class="grid grid-skills grid-direction-row grid-gap-xl">
			{#each t['skills.list'] as skill}
			<div>
				<h2>{skill.title}</h2>
				<section class="spacer space-sm"></section>
				<TextList decoration="pill" gap="sm" items="{skill.items}" classes="list-skills"></TextList>
				<section class="spacer space-sm"></section>
			</div>
			{/each}
		</section>
	</section>
</div>

