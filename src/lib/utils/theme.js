import {STORAGE_KEY_THEME, THEMES} from "$lib/constants/localStorage.js";
import {theme} from "$lib/store/store.js";

const ATTRIBUTE_KEY = 'data-theme';

export function setDefaultTheme(){
  //get attribute navigator theme
  const systTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES.DARK : THEMES.LIGHT;
  
  //create local storage item
  const localStorageTheme = localStorage.getItem(STORAGE_KEY_THEME);
  if (localStorageTheme == null) {
    localStorage.setItem(STORAGE_KEY_THEME, systTheme);
  }
  //update writable in store, used to be able to retrieve/update value in js since localstorage not defined in .svelte
  theme.set(localStorage.getItem(STORAGE_KEY_THEME));
  //set attribute in project's html file
  document.querySelector("html").setAttribute(ATTRIBUTE_KEY, localStorage.getItem(STORAGE_KEY_THEME));

}

export function toggleTheme() {
  let localStorageTheme = localStorage.getItem(STORAGE_KEY_THEME);
  const newTheme = localStorageTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  localStorage.setItem(STORAGE_KEY_THEME, newTheme);
  theme.set(newTheme);
  document.querySelector("html").setAttribute(ATTRIBUTE_KEY, newTheme);
}