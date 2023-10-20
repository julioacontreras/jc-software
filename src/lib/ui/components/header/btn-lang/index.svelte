<script lang="ts">
    import './style.scss'

    import {
        ICON_THEME_DARK,
        ICON_THEME_LIGHT,
        THEME_DARK,
        ENGLISH,
        SPANISH,
        ICON_SPANISH,
        ICON_ENGLISH,
        THEME_DEFAULT
    } from '../constants'
    
    let theme = THEME_DEFAULT ? ICON_THEME_DARK : ICON_THEME_LIGHT

    // Adapters
	import { i18n } from '$lib/core/adapters/i18n'
	import { app } from '$lib/core/adapters/app'
    import { browser } from '$lib/core/adapters/browser'
	import { onMount } from 'svelte';

    // Reactive language
    let t:Record<string, unknown> = {}
    i18n.subscribe(
		(data: unknown) => {
		    t = data as Record<string, unknown>
	    })

    // Reactive app
    let settings: Record<string, unknown> = {}
    app.subscribe(
		(data: unknown) => {
        settings = data as Record<string, unknown>
	})    
    
    // Change lang
    let lang = i18n.getLang()
    $:iconLang = lang === ENGLISH ? ICON_SPANISH : ICON_ENGLISH
    const changeLang = () => {
        lang = lang === ENGLISH ? SPANISH : ENGLISH
        i18n.setLang(lang)
        browser.replaceUrlParams({lang})
        settings.lang = lang
        app.set(settings)
    }

    onMount(async ()=> {
        const params = browser.getUrlParams(['lang', 'theme'])
        lang = params.lang ? params.lang.toString() : await i18n.getDefaultLang()
        theme = params.theme === THEME_DARK ? ICON_THEME_DARK : ICON_THEME_LIGHT
        i18n.setLang(lang)
        settings.lang = lang
        app.set(settings)
    })
</script>
<button
    prop-name="button-lang"
    class="btn btn-lang"
    class:btn-light={theme === ICON_THEME_DARK}
    class:btn-dark={theme === ICON_THEME_LIGHT}
    on:click="{changeLang}">
    {iconLang}
</button>
