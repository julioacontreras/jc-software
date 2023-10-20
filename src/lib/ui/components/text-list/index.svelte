<script>
	import './style.scss';

	/** @type {string} classes */
	export let classes = '';

	/** @type {string[]} links */
	export let items;

	/** @type {string} decoration */
	export let decoration = 'none';

	/** @type {string} gap */
	export let gap = 'none';

	/** @type {string} distribution */
	export let distribution = 'start';

	/** @type {string} direction */
	export let direction = 'column';
</script>

<ul
	class="text-list text-list-decoration-{decoration} text-list-gap-{gap} text-list-distribution-{distribution} text-list-direction-{direction} {classes}"
>
	{#each items as item}
		<li>{item}</li>
	{/each}
</ul>
