<script lang="ts">
	import {THEME_LIGHT} from '$lib/ui/components/header/constants';

	// Adapters
	import { app } from '$lib/core/adapters/app';

    // Reactive app
    let settings: Record<string, unknown> = {}
    app.subscribe(
		(data: unknown) => {
        settings = data as Record<string, unknown>
	})   		

	$:linkedin = settings.theme === THEME_LIGHT ? 'linkedin-light' : 'linkedin'
	$:github = settings.theme === THEME_LIGHT ? 'github-light' : 'github'
	$:medium = settings.theme === THEME_LIGHT ? 'medium-light' : 'medium'
</script>

<a href="https://www.linkedin.com/in/julio-contreras-6579b623/">
    <img src="./assets/svg/{linkedin}.svg" width="39" alt="Linkedin" />
</a>
<a href="https://medium.com/@julio.aranis.contreras">
    <img src="./assets/svg/{github}.svg" width="39" alt="Medium" />
</a>
<a href="https://github.com/julioacontreras">
    <img src="./assets/svg/{medium}.svg" width="39" alt="Github" />
</a>