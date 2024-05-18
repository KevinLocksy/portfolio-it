import {writable} from "svelte/store";
import {browser} from "$app/environment";
import {STORAGE_KEY_THEME, THEMES, STORAGE_KEY_LANG, LANG} from "$lib/constants/localStorage.js";

export const theme = writable(browser && localStorage.getItem(STORAGE_KEY_THEME) || THEMES.DARK); //default dark mode
theme.subscribe((val) => {
  if (browser) return (localStorage.theme = val)
})

export const lang_code = writable(LANG.language[0].code);