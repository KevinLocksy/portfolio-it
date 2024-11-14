import { STORAGE_KEY } from '$lib/constants/localStorage.const.js';
import { HTML_ATTR } from '$lib/constants/htmlAttr.const.js';
import LANG from '$config/i18n.conf.json';
import { getLocalStorageLang } from '$lib/utils/localStorage.utils.js';
import { i18nStore } from '$store/i18n.store.js';

const DEFAULT_LANG = LANG.language[0].value;

export function setDefaultLang() {
	var systLang = navigator.language || navigator.userLanguage || DEFAULT_LANG; //set attribute in project's html file
	document.querySelector(HTML_ATTR.HTML).setAttribute(HTML_ATTR.LANG, systLang);

	const localStorageLang = getLocalStorageLang(); //create local storage item
	if (localStorageLang == null) {
		localStorage.setItem(STORAGE_KEY.LANG, systLang);
	}
	i18nStore.set(getLocalStorageLang()); //update writable in store, used to be able to retrieve/update value in js since localstorage not defined in .svelte
} //end export function setDefaultLang()

export function updateLang(newLang) {
	localStorage.setItem(STORAGE_KEY.LANG, newLang); //update local storage
	i18nStore.set(newLang); //update store writable
} //end export function updateLang()
