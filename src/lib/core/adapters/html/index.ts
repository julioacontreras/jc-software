export interface HtmlAdapter {
    findInDocument: (search: string) => HTMLElement | null;
    findValueInDocument: (search: string) => string;
}

export let html: HtmlAdapter;

export function setHtml(htmlInstance: HtmlAdapter) {
    html = htmlInstance
}