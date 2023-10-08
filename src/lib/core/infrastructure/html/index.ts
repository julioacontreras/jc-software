import { type HtmlAdapter, setHtml } from '../../adapters/html'
import { logger } from '../../adapters/logger'

export class Html implements HtmlAdapter {
    findInDocument(search: string): HTMLElement | null {
        return document.querySelector(search)
    }

    findValueInDocument(search: string): string {
        const el = this.findInDocument(search)
        return el ? (el as HTMLInputElement).value : ''
    }
}

const html = new Html()
setHtml(html)
logger.log('HTML infrastructure loaded!')
