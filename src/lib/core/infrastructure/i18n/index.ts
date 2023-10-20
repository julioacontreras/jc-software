import { writable } from 'svelte/store';
import { setI18n, type I18nAdapter, type CallbackDictionary, ErrorCode } from '../../adapters/i18n';
import en from '../../../assets/i18n/en.json';
import es from '../../../assets/i18n/es.json';

const dictionaries: Record<string, unknown> = {
	en,
	es
};
const storeDictionary = writable(dictionaries['es']);

class I18n implements I18nAdapter {
	public lang: string = '';

	subscribe(callback: CallbackDictionary) {
		storeDictionary.subscribe(callback);
	}

	public setLang(lang: string) {
		this.lang = lang;
		if (!dictionaries[lang]) {
			throw new Error(ErrorCode.ERROR_NOT_FOUND_DICTIONARY);
		}
		storeDictionary.set(dictionaries[lang]);
	}

	public getLang(): string {
		return this.lang;
	}

	public async getDefaultLang() {
		const lang = await import('./getDefaultLang');
		return lang.getDefaultLang();
	}
}

const i18n = new I18n();
setI18n(i18n);
