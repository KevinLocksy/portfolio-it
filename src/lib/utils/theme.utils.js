import {STORAGE_KEY} from "$lib/constants/localStorage.const.js";
import {THEMES} from "$lib/constants/theme.const.js";
import {getLocalStorageTheme} from "$lib/utils/localStorage.utils.js";
import {HTML_ATTR} from "$lib/constants/htmlAttr.const.js";
import {themeStore} from "$lib/store/theme.store.js";

export function setDefaultTheme(){
  const systTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES.DARK : THEMES.LIGHT;//get attribute navigator theme
  const localStorageTheme = getLocalStorageTheme(); //create local storage item
  
  if (localStorageTheme == null) {
    localStorage.setItem(STORAGE_KEY.THEME, systTheme);
  }
  themeStore.set(getLocalStorageTheme()); //update writable in store, used to be able to retrieve/update value in js since localstorage not defined in .svelte
  document.querySelector(HTML_ATTR.HTML).setAttribute(HTML_ATTR.THEME, getLocalStorageTheme()); //set attribute in project's html file
}//end export function setDefaultTheme()

export function toggleTheme(){
  let localStorageTheme = getLocalStorageTheme();
  const newTheme = localStorageTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  localStorage.setItem(STORAGE_KEY.THEME, newTheme);
  themeStore.set(newTheme);
  document.querySelector(HTML_ATTR.HTML).setAttribute(HTML_ATTR.THEME, newTheme);
}//end export function toggleTheme()
