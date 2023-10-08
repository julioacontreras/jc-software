// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let i18n: any

export interface I18nAdapter {
    t: (key: string) => void
}

export const ErrorCode = {
   ERROR_NOT_FOUND_DICTIONARY: 'INF00002'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setI18n(i18nInstance: any) {
    i18n = i18nInstance
}