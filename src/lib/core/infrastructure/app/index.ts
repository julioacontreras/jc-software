import { writable } from 'svelte/store';
import { setApp, type GlobalAdapter, type CallbackGlobal } from '../../adapters/app';

const settings: Record<string, unknown> = {
	lang: '',
	theme: '',
	activePage: ''
};
const storeGlobal = writable(settings);

class Global implements GlobalAdapter {
	subscribe(callback: CallbackGlobal) {
		storeGlobal.subscribe(callback);
	}

	public set(settings: Record<string, unknown>) {
		storeGlobal.set(settings);
	}
}

setApp(new Global());
