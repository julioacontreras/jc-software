<script lang="ts">
    import './style.scss'

    import {
        ICON_THEME_DARK,
        ICON_THEME_LIGHT,
        THEME_DARK,
        THEME_LIGHT,
        THEME_DEFAULT
    } from '../constants'
    
    // Adapters
	import { app } from '$lib/core/adapters/app'
    import { browser } from '$lib/core/adapters/browser'
	import { onMount } from 'svelte';

    // Reactive app
    let settings: Record<string, unknown> = {}
    app.subscribe(
		(data: unknown) => {
        settings = data as Record<string, unknown>
	})  

    // Change theme
    let theme = THEME_DEFAULT
    $:iconTheme = theme === ICON_THEME_LIGHT ? ICON_THEME_DARK : ICON_THEME_LIGHT

    const updateTheme = () => {
        if (theme === ICON_THEME_DARK) {
            window.document.body.classList.remove('theme-light')
        } else {
            window.document.body.classList.add('theme-light')
        }
        settings.theme = theme === ICON_THEME_LIGHT ? THEME_LIGHT : THEME_DARK
        app.set(settings)
    }

    const changeTheme = () => {
        theme = theme === ICON_THEME_LIGHT ? ICON_THEME_DARK : ICON_THEME_LIGHT
        updateTheme()
        browser.replaceUrlParams({theme: theme === ICON_THEME_DARK ? THEME_DARK: THEME_LIGHT})
    }
    
    onMount(async ()=> {
        const params = browser.getUrlParams(['theme'])
        theme = params.theme === THEME_LIGHT ? ICON_THEME_LIGHT : ICON_THEME_DARK
        updateTheme()
    })    
</script>

<button
    class="btn btn-theme"
    class:btn-light={theme === ICON_THEME_DARK}
    class:btn-dark={theme === ICON_THEME_LIGHT}
    on:click="{changeTheme}">
    {iconTheme}
</button>
