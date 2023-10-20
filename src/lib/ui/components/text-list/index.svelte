<script lang="ts">
	import './style.scss';

	import type {Items} from './types';

	export let classes = '';
	export let items: Items;
	export let decoration = 'none';
	export let gap = 'none';
	export let distribution = 'start';
	export let direction = 'column';
</script>

<ul
	class="text-list text-list-decoration-{decoration} text-list-gap-{gap} text-list-distribution-{distribution} text-list-direction-{direction} {classes}"
>
	{#each items as item}
		<li>{item}</li>
	{/each}
</ul>
