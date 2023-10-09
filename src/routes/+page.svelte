<script>
	import { onMount } from 'svelte'
	import { menu } from '$lib/core/adapters/menu'
	menu.updateLinks('home')

	// icons
	import linkedin from '$lib/assets/svg/linkedin.svg';
	import medium from '$lib/assets/svg/medium.svg';
	import github from '$lib/assets/svg/github.svg';

	// Components
	import Navbar from '$lib/ui/components/navbar/index.svelte'
	import { i18n } from '$lib/core/adapters/i18n';

    onMount(async () => {
		window.document.body.classList.remove('page-services')
		window.document.body.classList.remove('image-fill')
        window.document.body.classList.add('page-home')
	})
</script>

<svelte:head>
	<title> {i18n.t('general.home')} - {i18n.t('general.app')}</title>
</svelte:head>

<div class="container">
	<section class="stack stack-row">
		<Navbar classes="navbar" links="{menu.getLinks()}"></Navbar>
	</section>
	<section class="stack stack-direction-column fade-in text-end" >
		<section class="spacer space-xl-4"></section>
		<h1 class="text-primary">JULIO CONTRERAS</h1>
		<section class="spacer space-sm"></section>
		<h2 class="text-primary">SENIOR WEB PROGRAMMER</h2>
		<section class="spacer space-xl-2"></section>
		<section class="stack stack-drection-row stack-gap-lg stack-row-end">
			<a href="https://www.linkedin.com/in/julio-contreras-6579b623/">
				<img src="{linkedin}" width="39" alt="Linkedin" />
			</a>
			<a href="https://medium.com/@julio.aranis.contreras">
				<img src="{medium}" width="39" alt="Medium" />
			</a>
			<a href="https://github.com/julioacontreras">
				<img src="{github}" width="39" alt="Github" />
			</a>
		</section>
	</section>
</div>
