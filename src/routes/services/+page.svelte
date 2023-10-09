<script>
    import './style.scss'
	import { onMount } from 'svelte'

	// Adapters
	import { i18n } from '$lib/core/adapters/i18n'
	import { menu } from '$lib/core/adapters/menu'
	menu.updateLinks('services')

	// Content
	import myServices from '$lib/assets/content/services.json'

	// Components & views
	import TextList from '$lib/ui/components/textList/index.svelte'
	import Navbar from '$lib/ui/components/navbar/index.svelte'

    /**  @type {{title: string, items: string[]}[]} links */
	const services = myServices

	onMount(async () => {
		window.document.body.classList.remove('page-home')
        window.document.body.classList.add('page-services')
        window.document.body.classList.add('image-fill')
    })
</script>

<svelte:head>
	<title> {i18n.t('general.services')} - {i18n.t('general.app')}</title>
</svelte:head>

<div class="container">
	<section class="stack stack-direction-row">
		<Navbar classes="navbar" links="{menu.getLinks()}"></Navbar>
	</section>
	<section class="stack stack-direction-column fade-in">
		<section class="spacer space-xl-4"></section>
		<h1>DESARROLLO SOB MEDIDA</h1>
		<section class="spacer space-sm"></section>
		<h2 class="width-sub-title">CREACIÓN DE APLICACIONES Y SERVICIOS SOB MEDIDA.</h2>
		<section class="spacer space-xl"></section>
		<section class="stack stack-direction-row">
			{#each services as service}
				<TextList decoration="pill" gap="sm" items="{service.items}" classes="list-services"></TextList>
			{/each}
		</section>
	</section>
</div>
