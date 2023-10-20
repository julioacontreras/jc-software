<script>
	import './style.scss';
	import { onMount } from 'svelte';

	import '$lib/ui/style/main.scss';
	import '$lib/index';

	// Components
	import Header from '@/lib/ui/components/header/index.svelte';

	// Reactive variables
	$: showPage = false;

	onMount(async () => {
		showPage = true;
	});
</script>

<div class="app">
	{#if showPage}
		<div class="container">
			<Header />
		</div>
		<slot />
	{/if}
</div>
