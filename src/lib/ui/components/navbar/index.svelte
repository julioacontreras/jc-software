<script>
    import './style.scss'
    
    import LinkNavbar from './linkNavbar/index.svelte';
    
    /** @type {{href: string, title: string, isActive: boolean}[]} links */
    export let links;

    /** @type {string} classes **/
    export let classes = ''
</script>

<div class="navbar {classes}">
    {#each links as link}
        <LinkNavbar href="{link.href}" isActive="{link.isActive}" >{link.title}</LinkNavbar>
    {/each}
</div>  
