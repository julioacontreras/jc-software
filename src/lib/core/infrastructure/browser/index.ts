import { type BrowserAdapter, setBrowser } from '../../adapters/browser';

export class Browser implements BrowserAdapter {
	findInDocument(search: string): HTMLElement | null {
		return document.querySelector(search);
	}

	findValueInDocument(search: string): string {
		const el = this.findInDocument(search);
		return el ? (el as HTMLInputElement).value : '';
	}

	replaceUrlParams(values: Record<string, unknown>) {
		const url = new URL(window.location.toString());
		for (const [key, value] of Object.entries(values)) {
			url.searchParams.set(encodeURIComponent(key), encodeURIComponent(value as string));
		}
		history.replaceState({}, '', url);
	}

	getUrlParams(keys: string[]): Record<string, unknown> {
		const url = new URL(window.location.toString());
		const params: Record<string, unknown> = {};
		keys.forEach((key) => {
			params[key] = url.searchParams.get(key);
		});
		return params;
	}

	public getUrlHost(): string {
		return window.location.pathname;
	}
}

setBrowser(new Browser());
