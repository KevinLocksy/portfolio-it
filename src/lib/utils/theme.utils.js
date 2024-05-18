import {STORAGE_KEY} from "$lib/constants/localStorage.const.js";
import {THEMES} from "$lib/constants/theme.const.js";
import {getLocalStorageTheme} from "$lib/utils/localStorage.utils.js";
import {HTML_ATTR} from "$lib/constants/htmlAttr.const.js";

import {themeStore} from "$lib/store/theme.store.js";


export function setDefaultTheme(){
  //get attribute navigator theme
  const systTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES.DARK : THEMES.LIGHT;
  
  //create local storage item
  const localStorageTheme = getLocalStorageTheme();
  if (localStorageTheme == null) {
    localStorage.setItem(STORAGE_KEY.THEME, systTheme);
  }
  //update writable in store, used to be able to retrieve/update value in js since localstorage not defined in .svelte
  themeStore.set(getLocalStorageTheme());
  //set attribute in project's html file
  document.querySelector(HTML_ATTR.HTML).setAttribute(HTML_ATTR.THEME, getLocalStorageTheme());

}

export function toggleTheme() {
  let localStorageTheme = getLocalStorageTheme();
  const newTheme = localStorageTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  localStorage.setItem(STORAGE_KEY.THEME, newTheme);
  themeStore.set(newTheme);
  document.querySelector(HTML_ATTR.HTML).setAttribute(HTML_ATTR.THEME, newTheme);
}
