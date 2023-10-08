export function getDefaultLang () {
    return navigator.language.includes('-') ? navigator.language.split('-')[0] : navigator.language
}