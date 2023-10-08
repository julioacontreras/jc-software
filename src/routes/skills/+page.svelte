<script>
    import './style.scss'
	import { onMount } from 'svelte'

	// Adapters
	import { i18n } from '$lib/core/adapters/i18n'
	import { menu } from '$lib/core/adapters/menu'
	menu.updateLinks('skills')

	// Content
	import skills from '$lib/assets/content/skills.json'

	// Components & views
	import TextList from '$lib/ui/components/textList/index.svelte'
	import Navbar from '$lib/ui/components/navbar/index.svelte'

	onMount(async () => {
		window.document.body.classList.remove('page-home')
        window.document.body.classList.add('page-services')
        window.document.body.classList.add('image-fill')
    })
</script>

<svelte:head>
	<title> {i18n.t('general.skills')} - {i18n.t('general.app')}</title>
</svelte:head>

<div class="container">
	<section class="stack stack-direction-row">
		<Navbar classes="navbar" links="{menu.getLinks()}"></Navbar>
	</section>
	<section class="stack stack-direction-column fade-in">
		<section class="spacer space-xl-4"></section>
		<h1>{i18n.t('general.skills')}</h1>
		<section class="spacer space-xl"></section>
		<section class="grid grid-skills grid-direction-row grid-gap-xl">
			{#each skills as skill}
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

