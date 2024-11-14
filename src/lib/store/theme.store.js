import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { STORAGE_KEY } from '$lib/constants/localStorage.const.js';
import { THEMES } from '$lib/constants/theme.const.js';

export const themeStore = writable(
	(browser && localStorage.getItem(STORAGE_KEY.THEME)) || THEMES.DARK
); //default dark mode

export const isDarkTheme = derived(themeStore, ($themeStore) => {
	return $themeStore == THEMES.DARK;
});

// theme.subscribe((val) => {
//   if (browser) return (localStorage.theme = val)
// })
