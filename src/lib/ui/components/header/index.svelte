<script>
    // Components
	import Navbar from './navbar/index.svelte'
	import BtnLang from './btn-lang/index.svelte'
	import BtnTheme from './btn-theme/index.svelte'
</script>

<div class="stack stack-drection-row stack-gap-lg stack-width-full">
    <Navbar />
    <div role="navbar-settings" class="stack stack-drection-row stack-width-fit">
        <BtnLang />
        <BtnTheme />
    </div>  
</div>
