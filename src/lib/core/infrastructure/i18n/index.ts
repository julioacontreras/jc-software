import { writable } from 'svelte/store'
import { setI18n, type I18nAdapter, ErrorCode } from '../../adapters/i18n'
import { logger } from '../../adapters/logger'
import en from '../../../assets/i18n/en.json'
import es from '../../../assets/i18n/es.json'

const dictionaries = {
    en,
    es
}
const storeDictionary = writable(dictionaries['es'])

class I18n implements I18nAdapter {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public dictionary: any
    
    constructor () {
        storeDictionary.subscribe(dictionary => {
            this.dictionary = dictionary
        })
    }

    public setLang(lang: string) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!(dictionaries as any)[lang]) {
            throw new Error(ErrorCode.ERROR_NOT_FOUND_DICTIONARY)
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dictionary = (dictionaries as any)[lang]
        storeDictionary.set(dictionary)
    }

    public async getDefaultLang() {
        const lang = await import('./getDefaultLang')
        return lang.getDefaultLang()
    }

    public t(key: string) {
        return this.dictionary[key] ?? key
    }
}


const i18n = new I18n()
setI18n(i18n)
logger.log('i18n infrastructure loaded!')
