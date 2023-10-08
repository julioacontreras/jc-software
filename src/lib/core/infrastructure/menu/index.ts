import { writable } from 'svelte/store'
import { setMenu, type MenuAdapter, type LinkType } from '../../adapters/menu'
import { logger } from '../../adapters/logger'
import menu from '../../../assets/content/menu.json'
import { i18n } from '$lib/core/adapters/i18n'

const storeMenu = writable(menu)

class Menu implements MenuAdapter {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public menu: any
    
    constructor () {
        storeMenu.subscribe(menu => {
            this.menu = menu
        })
    }

    public translate () {
        this.menu.forEach((link: LinkType) => {
            link.title = i18n.t(link.title)
        })
    }

    public updateLinks (id: string) {
        this.menu.forEach((link: LinkType) => {
            link.isActive = link.id === id
        })
        storeMenu.set(this.menu)
    }

    public getLinks(): LinkType[] {
        return this.menu
    }
}


const menuClass = new Menu()
setMenu(menuClass)
logger.log('Menu infrastructure loaded!')
