<script lang="ts">
	// Adapters
	import { i18n } from '$lib/core/adapters/i18n';

	// Reactive language
	let t: Record<string, unknown> = {};
	i18n.subscribe((data: unknown) => {
		t = data as Record<string, unknown>;
	});
</script>

<div class="container">
	<section class="stack stack-direction-column fade-in text-end">
		<section class="spacer space-xl-4" />
		<h1>Ops...</h1>
		<section class="spacer space-sm" />
		<h2>{t['error.title']}</h2>
		<section class="spacer space-xl-2" />
		<p><a href="/">{t['error.link-home']}</a></p>
	</section>
</div>
