// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let menu: any

export type LinkType = {
    id: string
    title: string
    href: string
    isActive: boolean
}

export interface MenuAdapter {
    getLinks: () => LinkType[]
    translate: () => void
    updateLinks: (id: string) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setMenu(instance: any) {
    menu = instance
}