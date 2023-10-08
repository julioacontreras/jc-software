export interface ConfigAdapter {
    get: (key: string) => unknown;
}

export let config: ConfigAdapter;

export function setConfig(instance: ConfigAdapter) {
    config = instance
}