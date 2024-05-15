import {STORAGE_KEY_THEME, THEMES} from "$lib/constants/localStorage.js";
import {theme} from "$lib/store/store.js";

const ATTRIBUTE_KEY = 'data-theme';

export function setDefaultTheme(){
  const systTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES.DARK : THEMES.LIGHT;
  document.querySelector("html").setAttribute(ATTRIBUTE_KEY, systTheme);

  const localStorageTheme = localStorage.getItem(STORAGE_KEY_THEME);
  if (localStorageTheme == null) {
    localStorage.setItem(STORAGE_KEY_THEME, systTheme);
  }
}

export function toggleTheme() {
  let localStorageTheme = localStorage.getItem(STORAGE_KEY_THEME);
  const newTheme = localStorageTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  localStorage.setItem(STORAGE_KEY_THEME, newTheme);
  theme.set(newTheme);
  document.querySelector("html").setAttribute(ATTRIBUTE_KEY, newTheme);
}