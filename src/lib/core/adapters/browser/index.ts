export interface BrowserAdapter {
	findInDocument: (search: string) => HTMLElement | null;
	findValueInDocument: (search: string) => string;
	replaceUrlParams: (values: Record<string, unknown>) => void;
	getUrlParams: (keys: string[]) => Record<string, unknown>;
	getUrlHost: () => string;
}

export let browser: BrowserAdapter;

export function setBrowser(htmlInstance: BrowserAdapter) {
	browser = htmlInstance;
}
