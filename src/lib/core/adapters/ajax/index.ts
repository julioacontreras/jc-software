export interface AjaxAdapter {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	post: (url: string, body: any) => Promise<object>;
}

export const ErrorCode = {
	ERROR_AJAX: 'AJAX_ERROR_INTERNAL_ERROR'
};

export let ajax: AjaxAdapter;

export function setAjax(instance: AjaxAdapter) {
	ajax = instance;
}
