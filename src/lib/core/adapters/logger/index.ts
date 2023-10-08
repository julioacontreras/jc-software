export interface LoggerAdapter {
    log: (message: string) => void
}

export let logger: LoggerAdapter

export function setLogger(instance: LoggerAdapter) {
    logger = instance
}