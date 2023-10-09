<script>
    import { base } from "$app/paths";
    import './style.scss'
    
    /** @type {string} href */ 
    export let href

    /** @type {boolean} isActive */ 
    export let isActive
</script>

<a class="link-navbar" class:active={isActive} href="{base}{href}"> 
    <slot />
</a>
