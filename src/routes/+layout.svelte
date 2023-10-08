<script>
	import './style.scss'
	import { onMount } from 'svelte'

	import '$lib/ui/style/main.scss'
	import '$lib/index'

	// Adapters
	import { i18n } from '$lib/core/adapters/i18n'
	import { menu } from '$lib/core/adapters/menu'
	
	menu.translate()

	// TODO: get query lang=en
	// TODO: usability
	// TODO: change theme to light
	// TODO: create footer bar with all this things
	
	// Reactive variables
	$:showPage = false

    onMount(async () => {
        i18n.setLang(await i18n.getDefaultLang())
		showPage = true
    })
</script>

<div class="app">
	{#if showPage}
		<slot />
	{/if}
</div>

