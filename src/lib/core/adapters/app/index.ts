export let app: GlobalAdapter

export type CallbackGlobal = (data: unknown) => void

export interface GlobalAdapter {
    subscribe: (callback: CallbackGlobal) => void

    set: (settings: Record<string, unknown>) => void
}

export function setGlobal(instance: GlobalAdapter) {
    app = instance
}