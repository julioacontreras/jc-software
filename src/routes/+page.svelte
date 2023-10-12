<script lang="ts">
	import { onMount } from 'svelte'

	import {THEME_LIGHT} from '$lib/ui/components/header/constants';

	// Components
	import { i18n } from '$lib/core/adapters/i18n';
	import { app } from '$lib/core/adapters/app';

    // Reactive language
    let t:Record<string, unknown> = {}
    i18n.subscribe(
		(data: unknown) => {
		    t = data as Record<string, unknown>
	    })

    // Reactive app
    let settings: Record<string, unknown> = {}
    app.subscribe(
		(data: unknown) => {
        settings = data as Record<string, unknown>
	})   		

    onMount(async () => {
		window.document.body.classList.remove('page-default')
		window.document.body.classList.remove('image-fill')
        window.document.body.classList.add('page-home')
	})

	$:linkedin = settings.theme === THEME_LIGHT ? 'linkedin-light' : 'linkedin'
	$:github = settings.theme === THEME_LIGHT ? 'github-light' : 'github'
	$:medium = settings.theme === THEME_LIGHT ? 'medium-light' : 'medium'
</script>

<svelte:head>
	<title> {t['general.home']} - {t['general.app']}</title>
</svelte:head>

<div class="container">
	<section class="stack stack-direction-column fade-in text-end" >
		<section class="spacer space-xl-4"></section>
		<h1 class="text-primary">JULIO CONTRERAS</h1>
		<section class="spacer space-sm"></section>
		<h2 class="text-primary">SENIOR WEB PROGRAMMER</h2>
		<section class="spacer space-xl-2"></section>
		<section class="stack stack-drection-row stack-gap-lg stack-row-end">
			<a href="https://www.linkedin.com/in/julio-contreras-6579b623/">
				<img src="./assets/svg/{linkedin}.svg" width="39" alt="Linkedin" />
			</a>
			<a href="https://medium.com/@julio.aranis.contreras">
				<img src="./assets/svg/{github}.svg" width="39" alt="Medium" />
			</a>
			<a href="https://github.com/julioacontreras">
				<img src="./assets/svg/{medium}.svg" width="39" alt="Github" />
			</a>
		</section>
	</section>
</div>
