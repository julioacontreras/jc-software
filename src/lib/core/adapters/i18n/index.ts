// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let i18n: I18nAdapter

export type CallbackDictionary = (data: unknown) => void

export interface I18nAdapter {
    subscribe: (callback: CallbackDictionary) => void

    setLang: (lang: string) => void

    getLang: () => string 

    getDefaultLang: () => Promise<string>
}

export const ErrorCode = {
   ERROR_NOT_FOUND_DICTIONARY: 'INF00002'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setI18n(i18nInstance: any) {
    i18n = i18nInstance
}