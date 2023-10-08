<script>
    import './style.scss'
    
    /** @type {string} href */ 
    export let href

    /** @type {boolean} isActive */ 
    export let isActive
</script>

<a class="link-navbar" class:active={isActive} {href}> 
    <slot />
</a>
