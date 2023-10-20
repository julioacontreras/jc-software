import { type AjaxAdapter, setAjax, ErrorCode } from '../../adapters/ajax';

export class Ajax implements AjaxAdapter {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	async post(url: string, body: any): Promise<object> {
		const data = new URLSearchParams();
		Object.keys(body).map((key: string) => {
			data.append(key, body[key]);
		});
		const response = await fetch(url, {
			method: 'POST',
			body: data
		});
		const INTERNAL_ERROR = 500;
		if (response.status === INTERNAL_ERROR) {
			throw new Error(ErrorCode.ERROR_AJAX);
		}
		return await response.json();
	}
}

const ajax = new Ajax();
setAjax(ajax);
